import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/lib/mock";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = posts.find((x) => x.slug === params.slug);
  return { title: p ? p.title : "Article" };
}

export default function Post({ params }: { params: { slug: string } }) {
  const p = posts.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  const currentIndex = posts.indexOf(p);
  const related = posts.filter((_, i) => i !== currentIndex).slice(0, 3);

  return (
    <article>
      {/* Back */}
      <div className="container-x pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors"
        >
          <ArrowLeft size={14} /> All insights
        </Link>
      </div>

      {/* Header */}
      <header className="container-x pt-12 pb-12 max-w-4xl">
        <div className="text-xs text-muted flex items-center gap-3">
          <span>
            {new Date(p.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span>·</span>
          <span>{p.author}</span>
          <span>·</span>
          <span>{p.readTime} read</span>
        </div>
        <h1 className="h-display text-4xl md:text-6xl mt-5 leading-[1]">{p.title}</h1>
      </header>

      {/* Hero image */}
      <div className="container-x mb-16">
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
      </div>

      {/* Body */}
      <div className="container-x max-w-3xl pb-24">
        <div className="prose">
          <p className="text-xl text-muted leading-relaxed mb-8">{p.excerpt}</p>

          <p>
            The most effective growth programs share one trait: a weekly operating rhythm where
            creative, channel and conversion experiments compound. In this piece we unpack the
            model we use across portfolios spending from $25k to $2M+/month — and what
            separates the teams who scale from those who plateau.
          </p>

          <h2>Start with the system, not the channel</h2>
          <p>
            Channels are commoditizing. What separates the best performance teams from the rest
            is the system around the channel — briefing, production, shipping, learning. Get that
            right and channel choice becomes secondary. We&apos;ve seen Google-only accounts
            outperform omnichannel programs simply because the operators had a better feedback loop.
          </p>

          <h2>Ship more, faster, with intent</h2>
          <p>
            Volume without intent is noise. We brief every test against a hypothesis, tag it in
            our experiment log, and review weekly. The wins compound; the losses still teach.
            A team shipping 30 experiments per month with documented hypotheses will always
            outlearn a team running 10 without them.
          </p>

          <h2>Measure what actually moves the business</h2>
          <p>
            Platform ROAS lies. We instrument server-side tracking, run holdouts, and reconcile
            against finance monthly. The number we optimize is contribution margin per acquired
            customer — not the ROAS screenshot that looks good in a slide deck.
          </p>

          <h2>Build playbooks, not dependencies</h2>
          <p>
            Every quarter, we document the strategies that worked in repeatable playbooks. This
            means growth doesn&apos;t depend on a single person, a single channel, or a single
            algorithm update. Compounding outcomes come from compounding institutional knowledge.
          </p>
        </div>

        {/* Author */}
        <div className="mt-16 pt-8 border-t border-line flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-ink text-cream flex items-center justify-center font-medium text-sm flex-shrink-0">
            {p.author.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <div className="font-medium">{p.author}</div>
            <div className="text-sm text-muted">Stack Media</div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-line">
          <div className="container-x py-16">
            <div className="eyebrow mb-10">More from the studio</div>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group block">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-line">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="33vw"
                    />
                  </div>
                  <div className="text-xs text-muted mt-4">{r.readTime} read</div>
                  <div className="font-display text-lg mt-1 group-hover:text-accent transition-colors">
                    {r.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
