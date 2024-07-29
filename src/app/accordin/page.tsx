import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
  const faq = [
    {
      question: "What is good?",
      answer: "This is good",
    },
    {
      question: "What is neutral?",
      answer: "This is neutral",
    },
  ];
  return (
    <main className="flex justify-center items-center w-[500px]">
      <Accordion type="single" collapsible>
        {faq.map((f) => (
          <AccordionItem value={f.question} key={f.question}>
            <AccordionTrigger>{f.question}</AccordionTrigger>
            <AccordionContent>{f.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}
