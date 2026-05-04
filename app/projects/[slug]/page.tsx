import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/mock";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  return { title: p ? `${p.title} Case Study` : "Case study" };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  const currentIndex = projects.indexOf(p);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      {/* Back */}
      <div className="container-x pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors"
        >
          <ArrowLeft size={14} /> All case studies
        </Link>
      </div>

      {/* Header */}
      <section className="container-x pt-12 pb-12">
        <Reveal>
          <span className="eyebrow">
            {p.category} · {p.year}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="h-display text-5xl md:text-8xl mt-5">{p.title}</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-muted leading-relaxed">{p.excerpt}</p>
        </Reveal>
      </section>

      {/* Hero image */}
      <section className="container-x">
        <Reveal>
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-line">
            <Image
              src={p.image}
              alt={p.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </Reveal>
      </section>

      {/* Metrics */}
      <section className="container-x py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-y border-line py-12">
          {p.metrics.map((m) => (
            <div key={m.k}>
              <div className="font-display text-5xl md:text-6xl text-accent tracking-tight">
                {m.v}
              </div>
              <div className="text-sm text-muted mt-2">{m.k}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="container-x pb-24">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl">
          <Reveal>
            <div>
              <span className="eyebrow">The challenge</span>
              <p className="mt-5 text-lg leading-relaxed">
                {p.title} came to Stack Media with a strong product but a growth program that
                had plateaued. Tracking was inconsistent, creative cadence was ad hoc, and CAC
                was climbing month over month without a clear lever to pull.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <span className="eyebrow">What we did</span>
              <p className="mt-5 text-lg leading-relaxed">
                We restructured accounts from scratch, rebuilt server-side tracking for clean
                attribution, and shipped a weekly creative system. Within a quarter, efficient
                revenue compounded — without inflating spend or cutting corners on margin.
              </p>
            </div>
          </Reveal>
        </div>

        {/* What we built */}
        <div className="mt-20">
          <Reveal>
            <span className="eyebrow">What we built</span>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                t: "Full tracking rebuild",
                d: "Server-side events, GA4 migration, and cross-channel attribution model.",
              },
              {
                t: "Creative system",
                d: "Weekly brief → produce → test cycle with hypothesis logging and winner scaling.",
              },
              {
                t: "Account restructure",
                d: "Campaign architecture rebuilt for signal quality, budget efficiency, and scale.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="card">
                  <div className="font-display text-xl mb-3">{item.t}</div>
                  <p className="text-sm text-muted">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="container-x pb-24">
        <Link href={`/projects/${next.slug}`} className="group block border-t-2 border-ink pt-8">
          <div className="text-xs text-muted uppercase tracking-widest mb-3">Next case study</div>
          <div className="flex items-center justify-between gap-6">
            <div className="font-display text-4xl md:text-6xl group-hover:text-accent transition-colors">
              {next.title}
            </div>
            <ArrowUpRight
              size={28}
              className="flex-shrink-0 group-hover:text-accent transition-colors"
            />
          </div>
          <div className="text-sm text-muted mt-2">
            {next.category} · {next.year}
          </div>
        </Link>
      </section>
    </>
  );
}
