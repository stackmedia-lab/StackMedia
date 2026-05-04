import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { posts } from "@/lib/mock";

export const metadata: Metadata = {
  title: "Insights",
  description: "Field notes on performance marketing, paid media, SEO and growth from Stack Media.",
};

export default function Blog() {
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="container-x pt-24 md:pt-36 pb-16">
        <Reveal>
          <span className="eyebrow">Insights</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="h-display text-6xl md:text-8xl mt-6 max-w-[18ch]">
            Field notes from the studio.
          </h1>
        </Reveal>
      </section>

      {/* Featured */}
      <section className="container-x pb-16">
        <Reveal>
          <Link href={`/blog/${featured.slug}`} className="group block md:grid md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-line">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width:768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="mt-6 md:mt-0">
              <div className="eyebrow mb-4">Featured</div>
              <h2 className="h-display text-3xl md:text-4xl group-hover:text-accent transition-colors">
                {featured.title}
              </h2>
              <p className="text-muted mt-4 leading-relaxed">{featured.excerpt}</p>
              <div className="text-xs text-muted mt-6 flex items-center gap-3">
                <span>{featured.author}</span>
                <span className="text-line">·</span>
                <span>
                  {new Date(featured.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="text-line">·</span>
                <span>{featured.readTime} read</span>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* Grid */}
      <section className="container-x pb-32 border-t border-line pt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.04}>
              <Link href={`/blog/${p.slug}`} className="group block">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-line">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
                <div className="text-xs text-muted mt-5 flex items-center gap-2">
                  <span>{p.author}</span>
                  <span>·</span>
                  <span>{p.readTime} read</span>
                </div>
                <div className="font-display text-xl mt-2 group-hover:text-accent transition-colors leading-snug">
                  {p.title}
                </div>
                <p className="text-sm text-muted mt-2 leading-relaxed">{p.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
