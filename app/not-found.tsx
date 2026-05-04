import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-x py-40 flex flex-col items-center text-center">
      <div className="h-display text-8xl md:text-[160px] font-semibold leading-none text-line">
        404
      </div>
      <h1 className="font-display text-3xl md:text-4xl mt-4">Page not found</h1>
      <p className="mt-4 text-muted max-w-sm">
        This page doesn&apos;t exist (yet). Head back and find what you&apos;re looking for.
      </p>
      <Link href="/" className="btn-primary mt-10">
        <ArrowLeft size={14} /> Back to home
      </Link>
    </section>
  );
}
