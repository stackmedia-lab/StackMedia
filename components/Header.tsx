"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

const servicesMenu = [
  {
    group: "Paid Media",
    items: [
      { href: "/services/paid-media", title: "Paid Media Strategy", desc: "Full-funnel orchestration." },
      { href: "/services/google-ads", title: "Google Ads", desc: "Search, PMax & Shopping." },
      { href: "/services/meta-ads", title: "Meta Ads", desc: "Facebook & Instagram acquisition." },
      { href: "/services/tiktok-ads", title: "TikTok Ads", desc: "Native creative that converts." },
    ],
  },
  {
    group: "Organic & Brand",
    items: [
      { href: "/services/seo", title: "SEO", desc: "Technical, content & authority." },
      { href: "/services/gbp", title: "Google Business Profile", desc: "Local visibility that compounds." },
      { href: "/services/web-design", title: "Web Design", desc: "Sites built to convert fast." },
      { href: "/services/branding", title: "Branding", desc: "Identity systems with intent." },
    ],
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="h-7 w-7 rounded-full bg-ink flex items-center justify-center group-hover:bg-accent transition-colors duration-200">
            <div className="h-2.5 w-2.5 rounded-full bg-cream" />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">Stack Media</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {/* Services mega menu */}
          <div
            onMouseEnter={() => setMega(true)}
            onMouseLeave={() => setMega(false)}
            className="relative"
          >
            <button className="flex items-center gap-1 link-underline">
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${mega ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {mega && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                >
                  <div className="w-[680px] rounded-2xl border border-line bg-white shadow-2xl shadow-ink/10 p-7 grid grid-cols-2 gap-8">
                    {servicesMenu.map((g) => (
                      <div key={g.group}>
                        <div className="eyebrow mb-4">{g.group}</div>
                        <ul className="space-y-4">
                          {g.items.map((it) => (
                            <li key={it.href}>
                              <Link href={it.href} className="group block">
                                <div className="text-sm font-medium group-hover:text-accent transition-colors">
                                  {it.title}
                                </div>
                                <div className="text-xs text-muted mt-0.5">{it.desc}</div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/projects" className="link-underline">Work</Link>
          <Link href="/about" className="link-underline">Studio</Link>
          <Link href="/blog" className="link-underline">Insights</Link>
          <Link
            href="/contact"
            className="btn-primary !py-2 !px-4 text-xs"
          >
            Start a project <ArrowUpRight size={12} />
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 -mr-2 hover:text-accent transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-line bg-cream overflow-hidden"
          >
            <div className="container-x py-6 flex flex-col gap-1">
              <div className="text-xs uppercase tracking-widest text-muted mb-2 mt-2">Services</div>
              {servicesMenu.flatMap((g) =>
                g.items.map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    onClick={() => setOpen(false)}
                    className="py-2 text-sm hover:text-accent transition-colors"
                  >
                    {i.title}
                  </Link>
                ))
              )}
              <div className="border-t border-line my-3" />
              <Link href="/projects" onClick={() => setOpen(false)} className="py-2 text-sm">Work</Link>
              <Link href="/about" onClick={() => setOpen(false)} className="py-2 text-sm">Studio</Link>
              <Link href="/blog" onClick={() => setOpen(false)} className="py-2 text-sm">Insights</Link>
              <div className="mt-4">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary justify-center w-full"
                >
                  Start a project <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
