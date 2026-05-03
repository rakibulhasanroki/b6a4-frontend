"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need a prescription to order medicines?",
    a: "No. MediStore only provides over-the-counter (OTC) medicines that do not require a prescription.",
  },
  {
    q: "How does payment work?",
    a: "We currently support cash on delivery. You pay only when your order arrives.",
  },
  {
    q: "How long does delivery take?",
    a: "Delivery usually takes 1–3 business days depending on your location.",
  },
  {
    q: "Are the medicines authentic?",
    a: "Yes. We ensure all medicines are sourced from verified and trusted sellers.",
  },
  {
    q: "Can I become a seller?",
    a: "Yes. You can register as a seller and start listing your medicines through the dashboard.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Everything you need to know about MediStore
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
