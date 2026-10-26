import Image from "next/image";

const features = [
  {
    icon: "/images/ShieldCheck.png",
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: "/images/MapTrifold.png",
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: "/images/Headset.png",
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-[#edfcff] py-20 md:py-[120px]">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-0">
        <h2 className="text-center font-display text-[clamp(2rem,5.2vw,3.75rem)] leading-none tracking-[-0.03em] text-[#0c0b0b]">
          Why Choose Wanderlust
        </h2>
        <p className="mt-3.5 text-center text-lg text-[#6c696d]">
          Your trusted partner for exceptional travel experiences
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-10 shadow-[0_1px_1px_rgba(0,0,0,0.1)]"
            >
              <Image
                src={feature.icon}
                alt=""
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <h3 className="mt-6 font-display text-[2rem] leading-none text-[#0c0b0b]">
                {feature.title}
              </h3>
              <p className="mt-4 text-base leading-normal text-[#6c696d]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
