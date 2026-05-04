import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Stat from "@/components/Stat";
import { processSteps, teamMembers } from "@/lib/mock";

export const metadata: Metadata = {
  title: "Studio",
  description: "Inside Stack Media — a performance marketing studio for ambitious brands.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="container-x pt-24 md:pt-36 pb-16">
        <Reveal>
          <span className="eyebrow">The studio</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="h-display text-6xl md:text-8xl mt-6 max-w-[18ch]">
            A small senior team building large compounding outcomes.
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl text-lg text-muted leading-relaxed">
            We&apos;re operators, not generalists. Every engagement is led by a senior
            strategist who has scaled spend across Google, Meta and TikTok — backed by a
            creative pod, an SEO team and a build team. We work in annual partnerships, not
            90-day projects.
          </p>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="bg-white border-y border-line">
        <div className="container-x py-20 grid grid-cols-2 md:grid-cols-4 gap-10">
          <Stat value={42} label="Specialists across paid, SEO, creative & build" />
          <Stat value={11} label="Avg. years of operator experience per lead" />
          <Stat value={420} suffix="M+" label="Ad spend managed across the portfolio" />
          <Stat value={94} suffix="%" label="Client retention over past 12 months" />
        </div>
      </section>

      {/* Principles */}
      <section className="container-x py-24 md:py-36">
        <Reveal>
          <span className="eyebrow">Our principles</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="h-display text-5xl md:text-6xl mt-5 mb-16 max-w-[20ch]">
            How we think about the work.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              t: "Senior, in the room.",
              d: "No account-manager-only relationships. The strategist on your call is the one writing the plan and running the experiments. Always.",
            },
            {
              t: "Creative is strategy.",
              d: "We treat creative as the highest-leverage variable in paid — and we build systems around testing it at volume, with intent.",
            },
            {
              t: "Own the data.",
              d: "Tracking, dashboards and playbooks are documented and handed off. You own everything we build. No lock-in, no black boxes.",
            },
            {
              t: "Long arcs over hot takes.",
              d: "We optimize for compounding 12-month outcomes, not screenshots of 7-day ROAS. That's a different mindset — and it shows in results.",
            },
            {
              t: "Accountability without ego.",
              d: "If we miss, we own it and fix it. If we win, we document why so we can repeat it. No blame, no excuses.",
            },
            {
              t: "Transparency by default.",
              d: "You get access to all data, all accounts, all experiments. We work like an in-house team because we operate like one.",
            },
          ].map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="border-t border-line pt-8">
                <div className="font-display text-2xl md:text-3xl">{p.t}</div>
                <p className="mt-3 text-muted leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-white border-y border-line">
        <div className="container-x py-24 md:py-32">
          <Reveal>
            <span className="eyebrow">The team</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display text-5xl md:text-6xl mt-5 mb-14">Operators, not order-takers.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.06}>
                <div className="group">
                  <div className="h-56 rounded-2xl bg-bone flex items-center justify-center mb-5 group-hover:bg-ink transition-colors duration-300">
                    <span className="font-display text-4xl font-medium text-ink/30 group-hover:text-cream/30 transition-colors duration-300">
                      {member.avatar}
                    </span>
                  </div>
                  <div className="font-display text-xl">{member.name}</div>
                  <div className="text-sm text-accent mt-1">{member.role}</div>
                  <p className="text-sm text-muted mt-3 leading-relaxed">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-x py-24 md:py-36">
        <Reveal>
          <span className="eyebrow">How we operate</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="h-display text-5xl md:text-6xl mt-5 mb-16 max-w-[20ch]">
            A clear operating system, week to week.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-4 gap-8">
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
      </section>
    </>
  );
}
