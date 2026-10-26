import Image from "next/image";
import { ArrowRight } from "lucide-react";

const fields = [
  { label: "Location", placeholder: "Address, City Or Zip" },
  { label: "Date/Duration", placeholder: "Anytime/3 Days" },
  { label: "Budget", placeholder: "$0-$3000" },
  { label: "People", placeholder: "5-10" },
];

const btn =
  "inline-flex h-12 items-center rounded bg-[#15a1bf] px-7 text-base font-medium uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#0f8aa6]";

export function Banner() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] flex-col text-white">
      <Image
        src="/images/Banner.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[1.02] tracking-[-0.02em]">
          Discover Your<br />Next Adventure.
        </h1>
        <p className="mt-6 max-w-xl text-xl text-[#edfcff]">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#" className={btn}>
            Explore Now
            <ArrowRight size={18} strokeWidth={2} />
          </a>
          <a
            href="#"
            className="inline-flex h-12 items-center rounded bg-white/25 px-7 text-base font-medium uppercase tracking-[0.08em] text-white backdrop-blur-[6px] transition-colors hover:bg-white/35"
          >
            View Destination
          </a>
        </div>
      </div>
      <form className="relative z-10 grid grid-cols-1 bg-[#0c0b0b]/30 backdrop-blur-[2px] sm:grid-cols-2 md:grid-cols-[1fr_1fr_1fr_1fr_0.7fr]">
        {fields.map((field) => (
          <div
            key={field.label}
            className="flex flex-col gap-1 border-b border-white/25 px-8 py-4 last:border-b-0 md:border-b-0 md:border-l md:first:border-l-0"
          >
            <span className="text-xl font-medium">{field.label}</span>
            <span className="text-sm text-white/70">{field.placeholder}</span>
          </div>
        ))}
        <button
          type="submit"
          className="h-16 bg-[#15a1bf] text-xl font-semibold text-white transition-colors hover:bg-[#0f8aa6] md:h-auto"
        >
          Search
        </button>
      </form>
    </section>
  );
}
