import { useEffect, useRef, useState } from "react";

const RAAG = [0, 2, 4, 7, 9, 12, 9, 7, 4, 2];

/**
 * Optional ambience: a synthesised bamboo flute over soft river noise and
 * occasional temple bells. Nothing is created or played until asked for.
 */
export function FluteAudio() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timers.current.forEach((id) => window.clearInterval(id));
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

    const master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);
    gainRef.current = master;

    // River: gently filtered noise.
    const len = ctx.sampleRate * 4;
    const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.03 * white) / 1.03;
      data[i] = last * 2.4;
    }
    const river = ctx.createBufferSource();
    river.buffer = buffer;
    river.loop = true;
    const rf = ctx.createBiquadFilter();
    rf.type = "lowpass";
    rf.frequency.value = 900;
    const rg = ctx.createGain();
    rg.gain.value = 0.35;
    river.connect(rf).connect(rg).connect(master);
    river.start();

    // Flute: breathy sine notes wandering a pentatonic phrase.
    let step = 0;
    const note = () => {
      const t = ctx.currentTime;
      const semis = RAAG[step % RAAG.length] ?? 0;
      step += 1;
      const freq = 392 * Math.pow(2, semis / 12);
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq * 0.99, t);
      osc.frequency.linearRampToValueAtTime(freq, t + 0.25);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.12, t + 0.35);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 2.4);
      osc.connect(g).connect(master);
      osc.start(t);
      osc.stop(t + 2.6);
    };
    window.setTimeout(note, 800);
    timers.current.push(window.setInterval(note, 2600));

    // Distant temple bell.
    const bell = () => {
      const t = ctx.currentTime;
      [1, 2.4, 4.1].forEach((mult, i) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = 560 * mult;
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.035 / (i + 1), t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 4 - i);
        osc.connect(g).connect(master);
        osc.start(t);
        osc.stop(t + 5);
      });
    };
    timers.current.push(window.setInterval(bell, 31000));

    master.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 3);
  };

  const toggle = () => {
    if (!on) {
      if (!ctxRef.current) start();
      else {
        void ctxRef.current.resume();
        gainRef.current?.gain.linearRampToValueAtTime(
          0.5,
          ctxRef.current.currentTime + 1.5,
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
      className="rounded-full border border-peacock/25 bg-soft-ivory/80 px-4 py-2 font-body text-[0.55rem] tracking-[0.28em] text-brown/60 backdrop-blur-md transition-all duration-700 hover:border-gold hover:text-peacock focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/60"
    >
      {on ? "FLUTE ON" : "FLUTE OFF"}
    </button>
  );
}
