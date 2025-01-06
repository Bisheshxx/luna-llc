import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FAQData } from "@/StaticData";
import { IFAQ } from "@/types";

const FAQ = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-background">
      <main className="container max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-muted-foreground">
              Find answers to your questions about our products and services.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {FAQData.map((faq: IFAQ, index: number) => (
              <AccordionItem value={`${index}`} key={index}>
                <AccordionTrigger className="flex items-center">
                  <h3 className="text-lg font-medium text-foreground text-left">
                    {faq.question}
                  </h3>
                  <div />
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 text-muted-foreground">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
