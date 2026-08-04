import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesOverview />
      <Gallery />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
