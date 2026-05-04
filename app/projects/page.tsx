import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/mock";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies from Stack Media — performance marketing that compounds.",
};

export default function Projects() {
  return (
    <>
      <section className="container-x pt-24 md:pt-36 pb-16">
        <Reveal>
          <span className="eyebrow">Selected work</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="h-display text-6xl md:text-8xl mt-6 max-w-[18ch]">
            Outcomes we&apos;re proud of.
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed">
            Every case study below represents a real growth partnership — not a one-time project
            or a lucky month.
          </p>
        </Reveal>
      </section>

      <section className="container-x pb-32">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.04}>
              <Link href={`/projects/${p.slug}`} className="group block">
                <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-line">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="flex items-start justify-between mt-5 gap-4">
                  <div className="flex-1">
                    <div className="text-xs text-muted">
                      {p.category} · {p.year}
                    </div>
                    <div className="font-display text-2xl md:text-3xl mt-1 group-hover:text-accent transition-colors">
                      {p.title}
                    </div>
                    <p className="text-sm text-muted mt-2">{p.excerpt}</p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="flex-shrink-0 group-hover:text-accent transition-colors mt-6"
                  />
                </div>

                {/* Metrics */}
                <div className="flex gap-8 mt-5 pt-5 border-t border-line">
                  {p.metrics.map((m) => (
                    <div key={m.k}>
                      <div className="font-display text-2xl text-accent">{m.v}</div>
                      <div className="text-xs text-muted mt-0.5">{m.k}</div>
                    </div>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
