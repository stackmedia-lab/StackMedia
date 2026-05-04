"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimal?: boolean;
}

export default function Stat({ value, suffix = "", prefix = "", label, decimal = false }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const steps = 50;
    const step = value / steps;
    const id = setInterval(() => {
      current += step;
      if (current >= value) {
        setN(value);
        clearInterval(id);
      } else {
        setN(decimal ? Math.round(current * 10) / 10 : Math.floor(current));
      }
    }, 20);
    return () => clearInterval(id);
  }, [inView, value, decimal]);

  const display = decimal ? n.toFixed(1) : n;

  return (
    <div ref={ref} className="group">
      <div className="font-display text-5xl md:text-6xl tracking-tight leading-none group-hover:text-accent transition-colors duration-300">
        {prefix}{display}{suffix}
      </div>
      <div className="text-sm text-muted mt-3 leading-snug max-w-[180px]">{label}</div>
    </div>
  );
}
