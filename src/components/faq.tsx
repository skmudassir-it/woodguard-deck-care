import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/content";

export function FaqSection() {
  return (
    <Accordion
      defaultValue={["faq-0"]}
      className="mx-auto w-full max-w-3xl space-y-4"
    >
      {faqs.map((f, i) => (
        <AccordionItem
          key={f.question}
          value={`faq-${i}`}
          className="glass overflow-hidden rounded-2xl px-5"
        >
          <AccordionTrigger className="text-left font-medium text-primary">
            {f.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {f.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
