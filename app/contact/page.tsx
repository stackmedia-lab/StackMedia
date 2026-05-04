"use client";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  }

  return (
    <section className="container-x pt-24 md:pt-36 pb-32">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24">
        {/* Left */}
        <div>
          <Reveal>
            <span className="eyebrow">Contact</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="h-display text-5xl md:text-7xl mt-6">
              Tell us about the next chapter.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-muted text-lg max-w-md leading-relaxed">
              We respond within one business day. If we&apos;re not the right fit, we&apos;ll point
              you toward someone who is.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-bone flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={16} className="text-ink" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted mb-1">Email</div>
                  <a
                    href="mailto:hello@stackmedia.studio"
                    className="link-underline text-sm"
                  >
                    hello@stackmedia.studio
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-bone flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-ink" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted mb-1">Studio</div>
                  <div className="text-sm">Toronto · Remote-first</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-bone flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={16} className="text-ink" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted mb-1">Response time</div>
                  <div className="text-sm">Within 1 business day</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Social proof */}
          <Reveal delay={0.25}>
            <div className="mt-16 p-6 rounded-2xl border border-line bg-white">
              <div className="text-sm text-muted italic leading-relaxed">
                &ldquo;Stack Media rebuilt our paid program from scratch. Within a quarter we doubled
                efficient revenue and cut blended CPA by 38%.&rdquo;
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-ink text-cream flex items-center justify-center text-xs font-medium">
                  HO
                </div>
                <div>
                  <div className="text-sm font-medium">Hana Okafor</div>
                  <div className="text-xs text-muted">VP Growth, Lumen SaaS</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right — Form */}
        <Reveal delay={0.1}>
          <div className="card !p-8 shadow-sm">
            {sent ? (
              <div className="py-20 text-center">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <ArrowUpRight size={24} className="text-accent" />
                </div>
                <div className="font-display text-3xl">Thank you.</div>
                <p className="text-muted mt-3">
                  We&apos;ve received your message and will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="font-display text-2xl mb-6">Start a project</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted mb-2 block">
                      Name *
                    </label>
                    <input
                      required
                      placeholder="Alex Johnson"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted mb-2 block">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="alex@company.com"
                      className="form-input"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted mb-2 block">
                    Company
                  </label>
                  <input
                    placeholder="Company Inc."
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted mb-2 block">
                    Services interested in
                  </label>
                  <select className="form-input">
                    <option value="">Select a service</option>
                    <option>Paid Media Strategy</option>
                    <option>Google Ads</option>
                    <option>Meta Ads</option>
                    <option>TikTok Ads</option>
                    <option>SEO</option>
                    <option>Google Business Profile</option>
                    <option>Web Design & Development</option>
                    <option>Branding & Identity</option>
                    <option>Multiple services</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted mb-2 block">
                    Monthly budget
                  </label>
                  <select className="form-input">
                    <option value="">Select a range</option>
                    <option>Under $10k/month</option>
                    <option>$10k–$25k/month</option>
                    <option>$25k–$75k/month</option>
                    <option>$75k–$250k/month</option>
                    <option>$250k+/month</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted mb-2 block">
                    What are you trying to achieve? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your business, goals and current challenges..."
                    className="form-input resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send inquiry"}
                  {!loading && <ArrowUpRight size={14} />}
                </button>
                <p className="text-xs text-center text-muted">
                  We respond within 1 business day. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
