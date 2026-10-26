import { Navbar } from "@/components/navbar";
import { Banner } from "@/components/banner";
import { WhyChoose } from "@/components/why-choose";
import { Testimonials } from "@/components/testimonials";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <WhyChoose />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}
