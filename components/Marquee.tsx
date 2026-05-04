"use client";

interface MarqueeProps {
  items: string[];
  speed?: number;
}

export default function Marquee({ items, speed = 30 }: MarqueeProps) {
  const list = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line py-5 select-none">
      <div
        className="marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {list.map((t, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-4xl tracking-tight text-ink/70 flex-shrink-0 flex items-center gap-4"
          >
            {t}
            <span className="text-accent text-base">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
