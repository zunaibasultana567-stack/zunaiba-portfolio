import { faqItems } from "@/data/faq";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Accordion from "@/components/ui/Accordion";

export default function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 border-t border-text-light/10 bg-accent px-6 py-24 text-text-light sm:px-12"
    >
      <div className="mx-auto max-w-3xl">
        <ScrollReveal as="h2" id="faq-heading" className="text-3xl font-bold sm:text-5xl">
          Frequently asked questions
        </ScrollReveal>

        <ScrollReveal delay={100} className="mt-12">
          <Accordion items={faqItems} />
        </ScrollReveal>
      </div>
    </section>
  );
}
