import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { servicePages } from "@/lib/serviceData";
import { services } from "@/lib/mock";

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const s = servicePages[params.slug];
  return { title: s ? s.title : "Service" };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = servicePages[params.slug];
  if (!s) return notFound();

  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      {/* Back */}
      <div className="container-x pt-8">
        <Link
          href="/services/paid-media"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors"
        >
          <ArrowLeft size={14} /> All services
        </Link>
      </div>

      {/* Hero */}
      <section className="container-x pt-12 md:pt-20 pb-16">
        <Reveal>
          <span className="eyebrow">{s.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="h-display text-5xl md:text-7xl mt-6 max-w-[22ch]">{s.title}</h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl text-lg text-muted leading-relaxed">{s.intro}</p>
        </Reveal>
        <Reveal delay={0.25}>
          <Link href="/contact" className="btn-primary mt-10">
            Start a project <ArrowUpRight size={14} />
          </Link>
        </Reveal>
      </section>

      {/* Hero image */}
      <Reveal>
        <div className="container-x mb-24">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden bg-bone">
            <Image
              src={s.hero}
              alt={s.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </Reveal>

      {/* Capabilities */}
      <section className="border-y border-line bg-white">
        <div className="container-x py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="eyebrow">Capabilities</span>
            <h2 className="h-display text-4xl mt-5">Everything we do.</h2>
          </div>
          <ul className="md:col-span-8 grid sm:grid-cols-2 gap-x-12">
            {s.capabilities.map((c, i) => (
              <li
                key={c}
                className="flex items-center justify-between border-b border-line py-4"
              >
                <div className="flex items-center gap-3">
                  <Check size={14} className="text-accent flex-shrink-0" />
                  <span className="font-display text-lg">{c}</span>
                </div>
                <span className="font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-ink text-cream">
        <div className="container-x py-24 md:py-32">
          <Reveal>
            <span className="eyebrow text-cream/50">Deliverables</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display text-5xl md:text-7xl mt-5 mb-16">What you get.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {s.deliverables.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.06}>
                <div className="border-t border-cream/15 pt-6">
                  <div className="font-mono text-xs text-cream/40 mb-3">
                    D / {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-2xl">{d.title}</h3>
                  <p className="text-cream/70 mt-3 leading-relaxed">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-x py-24 md:py-32">
        <Reveal>
          <span className="eyebrow">Process</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="h-display text-5xl md:text-6xl mt-5 mb-16">A clear path to revenue.</h2>
        </Reveal>
        <div className="grid md:grid-cols-4 gap-8">
          {s.process.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.06}>
              <div className="border-t-2 border-ink pt-6">
                <div className="font-mono text-xs text-accent font-medium">{step.n}</div>
                <h3 className="font-display text-2xl mt-3">{step.t}</h3>
                <p className="text-sm text-muted mt-3 leading-relaxed">{step.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line">
        <div className="container-x py-24">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <span className="eyebrow">FAQ</span>
              <h2 className="h-display text-4xl mt-5">Common questions.</h2>
            </div>
            <div className="md:col-span-8 divide-y divide-line border-y border-line">
              {s.faq.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="cursor-pointer flex justify-between items-center font-display text-xl list-none">
                    {f.q}
                    <span className="text-2xl text-accent group-open:rotate-45 transition-transform duration-200 flex-shrink-0 ml-4">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-muted leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-12 pb-24">
        <Reveal>
          <div className="rounded-3xl bg-ink text-cream p-12 md:p-20 flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="eyebrow text-cream/50 mb-4">Next step</div>
              <h2 className="h-display text-4xl md:text-6xl">
                Want this for your brand?
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-6 py-4 text-sm font-medium hover:bg-accent/90 transition-colors relative z-10 self-start md:self-auto"
            >
              Start a project <ArrowUpRight size={16} />
            </Link>
            <div
              className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
              style={{
                background: "radial-gradient(circle, #FF5A1F 0%, transparent 70%)",
                transform: "translate(30%, -30%)",
              }}
            />
          </div>
        </Reveal>
      </section>

      {/* Related services */}
      <section className="container-x pb-24 border-t border-line pt-12">
        <span className="eyebrow">Related services</span>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/services/${o.slug}`}
              className="group card hover:border-ink hover:shadow-sm transition-all duration-200"
            >
              <div className="text-2xl mb-3">{o.icon}</div>
              <div className="font-display text-xl">{o.title}</div>
              <p className="text-sm text-muted mt-2 leading-relaxed">{o.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
