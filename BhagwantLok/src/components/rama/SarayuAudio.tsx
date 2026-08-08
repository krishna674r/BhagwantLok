import { useEffect, useRef, useState } from "react";

const VEENA = [0, 2, 5, 7, 9, 7, 5, 2];

/**
 * Optional ambience for Ayodhya: a soft veena/flute phrase over the sound of
 * the Sarayu and distant temple bells. Nothing is created until requested.
 */
export function SarayuAudio() {
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

    // River: filtered noise loop.
    const len = Math.floor(ctx.sampleRate * 4);
    const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < len; i += 1) data[i] = (Math.random() * 2 - 1) * 0.4;
    const river = ctx.createBufferSource();
    river.buffer = buffer;
    river.loop = true;
    const riverFilter = ctx.createBiquadFilter();
    riverFilter.type = "lowpass";
    riverFilter.frequency.value = 520;
    const riverGain = ctx.createGain();
    riverGain.gain.value = 0.05;
    river.connect(riverFilter).connect(riverGain).connect(master);
    river.start();

    const note = (semitone: number, when: number, dur: number, vol: number) => {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = 293.66 * Math.pow(2, semitone / 12);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, when);
      g.gain.exponentialRampToValueAtTime(vol, when + 0.25);
      g.gain.exponentialRampToValueAtTime(0.0001, when + dur);
      osc.connect(g).connect(master);
      osc.start(when);
      osc.stop(when + dur + 0.1);
    };

    let step = 0;
    const phrase = window.setInterval(() => {
      const t = ctx.currentTime + 0.05;
      note(VEENA[step % VEENA.length] ?? 0, t, 2.6, 0.06);
      step += 1;
    }, 2600);

    const bells = window.setInterval(() => {
      const t = ctx.currentTime + 0.1;
      [523.25, 659.25, 783.99].forEach((f, i) => {
        const osc = ctx.createOscillator();
        osc.type = "triangle";
        osc.frequency.value = f;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.035 / (i + 1), t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 4);
        osc.connect(g).connect(master);
        osc.start(t);
        osc.stop(t + 4.2);
      });
    }, 21000);

    timers.current = [phrase, bells];
    master.gain.linearRampToValueAtTime(0.9, ctx.currentTime + 3);
  };

  const toggle = () => {
    if (!on) {
      start();
      setOn(true);
      return;
    }
    const ctx = ctxRef.current;
    const master = gainRef.current;
    if (ctx && master) {
      master.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1.4);
      window.setTimeout(() => void ctx.close(), 1700);
    }
    timers.current.forEach((id) => window.clearInterval(id));
    timers.current = [];
    ctxRef.current = null;
    setOn(false);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      className="rounded-full border border-gold/40 bg-warm-ivory/70 px-5 py-2.5 font-body text-[0.55rem] tracking-[0.3em] text-ink/70 backdrop-blur-sm transition-all duration-700 hover:border-gold hover:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
    >
      {on ? "AMBIENCE ON" : "AMBIENCE OFF"}
    </button>
  );
}
