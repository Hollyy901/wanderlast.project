import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    name: "— Michael Chen",
    location: "Singapore",
    photo: "/images/person1.png",
  },
  {
    quote:
      '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    name: "— Sarah Johnson",
    location: "New York, USA",
    photo: "/images/person2.png",
  },
];

const arrowBtn =
  "flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#b6b6b6] text-[#6c696d] transition-colors hover:border-[#15a1bf] hover:text-[#15a1bf]";

export function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-[120px]">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-0">
        <div className="flex items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-[clamp(2rem,5.2vw,3.75rem)] leading-none tracking-[-0.03em] text-[#0c0b0b]">
              What Travelers Say
            </h2>
            <p className="mt-2 text-lg text-[#6c696d]">
              Real experiences from our happy travelers.
            </p>
          </div>
          <div className="hidden items-center gap-4 sm:flex">
            <button type="button" aria-label="Previous testimonials" className={arrowBtn}>
              <ArrowLeft size={24} strokeWidth={1.5} />
            </button>
            <button type="button" aria-label="Next testimonials" className={arrowBtn}>
              <ArrowRight size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col gap-6 bg-white p-6 shadow-[0_1px_1px_rgba(0,0,0,0.1)] sm:flex-row sm:gap-12"
            >
              <div className="flex min-w-0 flex-1 flex-col justify-between gap-8">
                <blockquote className="font-display text-2xl leading-[1.2] tracking-[-0.01em] text-[#0c0b0b]">
                  {testimonial.quote}
                </blockquote>
                <figcaption>
                  <p className="text-base text-[#15a1bf]">{testimonial.name}</p>
                  <p className="mt-1 pl-[26px] text-sm text-[#6c696d]">
                    {testimonial.location}
                  </p>
                </figcaption>
              </div>
              <Image
                src={testimonial.photo}
                alt=""
                width={218}
                height={264}
                className="h-[264px] w-[218px] self-center shrink-0 sm:self-auto"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
