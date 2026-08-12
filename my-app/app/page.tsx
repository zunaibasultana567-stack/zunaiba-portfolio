import Nav from "@/components/layout/Nav";
import QuickInfoTab from "@/components/layout/QuickInfoTab";
import Footer from "@/components/layout/Footer";
import PillButton from "@/components/ui/PillButton";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <header>
        <Nav />
        <PillButton href="#contact" className="fixed right-6 top-6 z-40">
          Contact
        </PillButton>
        <QuickInfoTab />
      </header>

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
