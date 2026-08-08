import { useEffect, useRef, useState } from "react";

/**
 * Optional ambience: synthesised Himalayan wind with distant temple bells.
 * Nothing is created or played until the visitor asks for it.
 */
export function AmbientAudio() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const bellRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (bellRef.current) window.clearInterval(bellRef.current);
      void ctxRef.current?.close();
    };
  }, []);

  const start = () => {
    const Ctor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!Ctor) return;
    const ctx = new Ctor();
    ctxRef.current = ctx;

    // Wind: filtered noise.
    const len = ctx.sampleRate * 4;
    const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.2;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 420;

    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.06;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 180;
    lfo.connect(lfoGain).connect(filter.frequency);

    const master = ctx.createGain();
    master.gain.value = 0;
    gainRef.current = master;

    noise.connect(filter).connect(master).connect(ctx.destination);
    noise.start();
    lfo.start();
    master.gain.linearRampToValueAtTime(0.16, ctx.currentTime + 4);

    // Distant bell, occasionally.
    const bell = () => {
      const t = ctx.currentTime;
      [1, 2.7, 5.4].forEach((mult, i) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = 320 * mult;
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.05 / (i + 1), t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 5 - i);
        osc.connect(g).connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 6);
      });
    };
    window.setTimeout(bell, 2500);
    bellRef.current = window.setInterval(bell, 26000);
  };

  const toggle = () => {
    if (!on) {
      if (!ctxRef.current) start();
      else {
        void ctxRef.current.resume();
        gainRef.current?.gain.linearRampToValueAtTime(
          0.16,
          ctxRef.current.currentTime + 2,
        );
      }
      setOn(true);
    } else {
      const ctx = ctxRef.current;
      if (ctx && gainRef.current) {
        gainRef.current.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.2);
      }
      setOn(false);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      className="rounded-full border border-silver/15 bg-void/50 px-4 py-2 font-body text-[0.55rem] tracking-[0.28em] text-ivory/50 backdrop-blur-md transition-all duration-700 hover:border-moon/45 hover:text-moon focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-moon/60"
    >
      {on ? "AMBIENCE ON" : "AMBIENCE OFF"}
    </button>
  );
}
