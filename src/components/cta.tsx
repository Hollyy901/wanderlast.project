import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section className="relative bg-black text-white">
      <Image
        src="/images/CTA.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative z-10 px-6 py-24 text-center md:py-[120px]">
        <h2 className="font-display text-[clamp(2rem,5.2vw,3.75rem)] leading-none tracking-[-0.03em]">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-3 text-xl text-[#edfcff]">
          Join thousands of travelers who have discovered the world with us.
        </p>
        <a
          href="#"
          className="mt-10 inline-flex h-14 items-center gap-4 bg-white px-6 text-base font-medium uppercase tracking-[0.08em] text-[#0c0b0b] transition-colors hover:bg-[#edfcff]"
        >
          Book Your Trip Today
          <ArrowRight size={20} strokeWidth={2} />
        </a>
      </div>
    </section>
  );
}
