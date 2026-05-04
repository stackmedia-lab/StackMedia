import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  { href: "/services/paid-media", label: "Paid Media" },
  { href: "/services/google-ads", label: "Google Ads" },
  { href: "/services/meta-ads", label: "Meta Ads" },
  { href: "/services/tiktok-ads", label: "TikTok Ads" },
  { href: "/services/seo", label: "SEO" },
  { href: "/services/gbp", label: "Google Business" },
  { href: "/services/web-design", label: "Web Design" },
  { href: "/services/branding", label: "Branding" },
];

const studio = [
  { href: "/about", label: "About the studio" },
  { href: "/projects", label: "Case studies" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Start a project" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream mt-32">
      {/* CTA */}
      <div className="container-x pt-20 pb-16 border-b border-cream/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="eyebrow text-cream/50 mb-6">Ready to grow?</div>
            <div className="font-display text-5xl md:text-7xl tracking-tight leading-none">
              Let&apos;s build<br />what&apos;s next.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-6 py-3.5 text-sm font-medium hover:bg-accent/90 transition-colors self-start md:self-auto"
            >
              Start a project <ArrowUpRight size={14} />
            </Link>
            <a
              href="mailto:hello@stackmedia.studio"
              className="text-sm text-cream/60 hover:text-cream transition-colors self-start md:text-right"
            >
              hello@stackmedia.studio
            </a>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="container-x py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="h-6 w-6 rounded-full bg-cream flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-ink" />
            </div>
            <span className="font-display font-semibold">Stack Media</span>
          </div>
          <p className="text-sm text-cream/60 leading-relaxed max-w-[220px]">
            Performance marketing studio for ambitious brands. Remote-first. Based in Toronto.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-cream/40 mb-5">Services</div>
          <ul className="space-y-3 text-sm">
            {services.slice(0, 4).map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-cream/70 hover:text-cream transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-cream/40 mb-5">Also</div>
          <ul className="space-y-3 text-sm">
            {services.slice(4).map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-cream/70 hover:text-cream transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-cream/40 mb-5">Studio</div>
          <ul className="space-y-3 text-sm">
            {studio.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-cream/70 hover:text-cream transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-cream/10">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-cream/40">
          <div>© {new Date().getFullYear()} Stack Media Studio Inc. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span>Performance marketing · Toronto · Remote-first</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
