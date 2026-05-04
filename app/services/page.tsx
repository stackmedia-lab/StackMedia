import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/mock";

export const metadata: Metadata = {
  title: "Services",
  description: "Eight performance marketing disciplines, one operating system.",
};

export default function Services() {
  return (
    <>
      <section className="container-x pt-24 md:pt-36 pb-16">
        <Reveal>
          <span className="eyebrow">Services</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="h-display text-6xl md:text-8xl mt-6 max-w-[16ch]">
            Eight disciplines. One operating system.
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed">
            Whether you need one service or the full stack, every engagement runs through the
            same weekly operating rhythm — measure, test, learn, compound.
          </p>
        </Reveal>
      </section>

      <section className="container-x pb-32">
        <div className="grid md:grid-cols-2 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <Link
                href={`/services/${s.slug}`}
                className="group block bg-cream hover:bg-white p-10 h-full transition-colors duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="text-3xl mb-6">{s.icon}</div>
                  <ArrowUpRight
                    size={18}
                    className="opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all"
                  />
                </div>
                <div className="font-display text-3xl tracking-tight">{s.title}</div>
                <p className="text-muted mt-3 max-w-md leading-relaxed">{s.excerpt}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium group-hover:text-accent transition-colors">
                  View service details <ArrowUpRight size={11} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
