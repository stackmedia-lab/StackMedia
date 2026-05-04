import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import Stat from "@/components/Stat";
import { services, projects, testimonials, clients, processSteps } from "@/lib/mock";

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative grain overflow-hidden bg-cream">
        <div className="container-x pt-20 md:pt-32 pb-24 md:pb-32">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent inline-block" />
              Performance marketing studio · Est. 2019
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="h-display text-[10vw] sm:text-[8vw] md:text-[5.5vw] font-semibold mt-8 leading-[0.92] max-w-[14ch]">
              Growth that{" "}
              <em className="not-italic text-accent italic">compounds</em>,<br />
              not campaigns<br />that fade.
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-8 max-w-lg text-lg text-muted leading-relaxed">
              Stack Media is a performance marketing studio building paid media, SEO, web
              and brand systems for ambitious brands. We engineer growth engines you
              actually own.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Start a project <ArrowUpRight size={16} />
              </Link>
              <Link href="/projects" className="btn-ghost">
                See our work <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          {/* Proof row */}
          <Reveal delay={0.3}>
            <div className="mt-16 flex flex-wrap gap-6 text-sm text-muted">
              {["$420M+ ad spend managed", "180+ brands scaled", "6.2x avg. ROAS", "94% client retention"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check size={14} className="text-accent" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Decorative background orb */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #FF5A1F 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />
      </section>

      {/* ── CLIENTS MARQUEE ── */}
      <Marquee items={clients} />

      {/* ── SERVICES ── */}
      <section className="container-x py-24 md:py-36">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <Reveal><span className="eyebrow">What we do</span></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-display text-5xl md:text-7xl mt-5 max-w-[15ch]">
                A full-stack growth team, on demand.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link href="/services/paid-media" className="btn-ghost self-start">
              All services <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <Link
                href={`/services/${s.slug}`}
                className="group block bg-cream hover:bg-white p-7 h-full transition-colors duration-200"
              >
                <div className="text-3xl mb-5">{s.icon}</div>
                <div className="font-display text-xl font-medium tracking-tight">{s.title}</div>
                <p className="text-sm text-muted mt-2 leading-relaxed">{s.excerpt}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium group-hover:text-accent transition-colors">
                  Learn more <ArrowRight size={12} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-ink text-cream relative overflow-hidden">
        <div className="container-x py-24 md:py-32">
          <Reveal>
            <span className="eyebrow text-cream/50">By the numbers</span>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-12">
            <Stat value={420} suffix="M+" label="Ad spend managed across all channels" />
            <Stat value={6.2} suffix="x" label="Average blended ROAS across portfolio" decimal />
            <Stat value={180} label="Brands scaled from Series A to enterprise" />
            <Stat value={94} suffix="%" label="Client retention over the past 12 months" />
          </div>
        </div>
        {/* Decorative */}
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #FF5A1F 0%, transparent 70%)", transform: "translate(30%, 30%)" }}
        />
      </section>

      {/* ── SELECTED WORK ── */}
      <section className="container-x py-24 md:py-36">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <Reveal><span className="eyebrow">Selected work</span></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-display text-5xl md:text-7xl mt-5">Outcomes, not deliverables.</h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link href="/projects" className="btn-ghost self-start">
              View all <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link href={`/projects/${p.slug}`} className="group block">
                <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-line">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-cream font-display text-lg">View case study</div>
                  </div>
                </div>
                <div className="flex justify-between items-end mt-5">
                  <div>
                    <div className="text-xs text-muted">
                      {p.category} · {p.year}
                    </div>
                    <div className="font-display text-2xl mt-1 group-hover:text-accent transition-colors">
                      {p.title}
                    </div>
                    <p className="text-sm text-muted mt-1">{p.excerpt}</p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="flex-shrink-0 group-hover:text-accent transition-colors ml-4"
                  />
                </div>
                {/* Metrics */}
                <div className="flex gap-6 mt-4 pt-4 border-t border-line">
                  {p.metrics.map((m) => (
                    <div key={m.k}>
                      <div className="font-display text-xl text-accent">{m.v}</div>
                      <div className="text-xs text-muted">{m.k}</div>
                    </div>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="border-t border-line bg-white">
        <div className="container-x py-24 md:py-36">
          <Reveal><span className="eyebrow">How we work</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display text-5xl md:text-7xl mt-5 mb-16 max-w-[18ch]">
              A weekly operating system for growth.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <div className="border-t-2 border-ink pt-6">
                  <div className="font-mono text-sm text-accent font-medium">{s.n}</div>
                  <div className="font-display text-2xl mt-3">{s.title}</div>
                  <p className="text-sm text-muted mt-3 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="container-x py-24 md:py-36">
        <Reveal><span className="eyebrow">What partners say</span></Reveal>
        <Reveal delay={0.05}>
          <h2 className="h-display text-4xl md:text-5xl mt-5 mb-12">Real words from real clients.</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="card h-full flex flex-col hover:border-ink transition-colors duration-200 hover:shadow-md">
                <div className="text-4xl text-accent font-serif leading-none mb-4">&ldquo;</div>
                <p className="text-lg leading-snug flex-1">{t.quote}</p>
                <div className="mt-8 flex items-center gap-3 pt-6 border-t border-line">
                  <div className="h-10 w-10 rounded-full bg-ink text-cream flex items-center justify-center text-xs font-medium flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="container-x pb-24">
        <Reveal>
          <div className="rounded-3xl bg-ink text-cream p-12 md:p-20 flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="eyebrow text-cream/50 mb-4">Next step</div>
              <h2 className="h-display text-4xl md:text-6xl">
                Ready to compound<br />your growth?
              </h2>
            </div>
            <div className="flex flex-col gap-3 relative z-10">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-6 py-4 text-sm font-medium hover:bg-accent/90 transition-colors">
                Start a project <ArrowUpRight size={16} />
              </Link>
              <a href="mailto:hello@stackmedia.studio" className="text-sm text-cream/60 hover:text-cream transition-colors text-center">
                hello@stackmedia.studio
              </a>
            </div>
            {/* BG decoration */}
            <div
              className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
              style={{ background: "radial-gradient(circle, #FF5A1F 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
