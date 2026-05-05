"use client";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/meenkoky", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSent(true);
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <section className="container-x pt-24 md:pt-36 pb-32">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24">

        {/* LEFT */}
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
              We respond within one business day.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 space-y-6">

              <div className="flex items-start gap-4">
                <Mail size={16} />
                <a href="mailto:hello@stackmedia.studio">hello@stackmedia.studio</a>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={16} />
                <div>Toronto · Remote-first</div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={16} />
                <div>Within 1 business day</div>
              </div>

            </div>
          </Reveal>
        </div>

        {/* RIGHT FORM */}
        <Reveal delay={0.1}>
          <div className="card !p-8 shadow-sm">
            {sent ? (
              <div className="py-20 text-center">
                <div className="font-display text-3xl">Thank you.</div>
                <p className="text-muted mt-3">
                  We’ve received your message and will contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                <h2 className="font-display text-2xl mb-6">Start a project</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    name="name"
                    required
                    placeholder="Name"
                    className="form-input"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className="form-input"
                  />
                </div>

                <input
                  name="company"
                  placeholder="Company"
                  className="form-input"
                />

                <select name="service" className="form-input">
                  <option value="">Select service</option>
                  <option>Paid Media Strategy</option>
                  <option>Google Ads</option>
                  <option>Meta Ads</option>
                  <option>SEO</option>
                  <option>Web Development</option>
                </select>

                <select name="budget" className="form-input">
                  <option value="">Budget</option>
                  <option>Under $10k</option>
                  <option>$10k–$25k</option>
                  <option>$25k+</option>
                </select>

                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="form-input"
                />

                {/* Hidden field (optional) */}
                <input type="hidden" name="source" value="Website Lead" />

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full"
                >
                  {loading ? "Sending..." : "Send inquiry"}
                  {!loading && <ArrowUpRight size={14} />}
                </button>

              </form>
            )}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
