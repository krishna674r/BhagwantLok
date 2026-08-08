const RAYS = Array.from({ length: 24 }, (_, i) => (i * 360) / 24);
const PETALS = Array.from({ length: 12 }, (_, i) => (i * 360) / 12);

export function Mandala({ visible }: { visible: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[min(140vw,120vh)] -translate-x-1/2 -translate-y-1/2 transition-all duration-[4000ms] ease-out"
      style={{
        opacity: visible ? 0.5 : 0,
        transform: `translate(-50%, -50%) scale(${visible ? 1 : 0.55})`,
      }}
    >
      <svg viewBox="0 0 400 400" className="h-full w-full mandala-spin">
        <defs>
          <radialGradient id="mg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g stroke="url(#mg)" fill="none" strokeWidth="0.5">
          {[60, 84, 108, 132, 156, 180].map((r) => (
            <circle key={r} cx="200" cy="200" r={r} />
          ))}
          {RAYS.map((a) => (
            <line
              key={a}
              x1="200"
              y1="200"
              x2="200"
              y2="20"
              transform={`rotate(${a} 200 200)`}
              strokeWidth="0.3"
            />
          ))}
          {PETALS.map((a) => (
            <g key={a} transform={`rotate(${a} 200 200)`}>
              <circle cx="200" cy="128" r="40" strokeWidth="0.4" />
              <path d="M200 60 Q232 128 200 196 Q168 128 200 60 Z" strokeWidth="0.4" />
            </g>
          ))}
          <polygon points="200,74 309,263 91,263" strokeWidth="0.4" />
          <polygon points="200,326 91,137 309,137" strokeWidth="0.4" />
        </g>
      </svg>
    </div>
  );
}
