import { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { ChevronDown } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass rounded-xl overflow-hidden accordion-item">
      <button 
        className="flex justify-between items-center w-full p-6 text-left" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <ChevronDown className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`accordion-content px-6 pb-6 ${isOpen ? 'active' : ''}`}>
        <p className="text-dark-300">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const { t } = useLanguage();

  const faqItems = [
    {
      question: t("faq.1.question"),
      answer: t("faq.1.answer")
    },
    {
      question: t("faq.2.question"),
      answer: t("faq.2.answer")
    },
    {
      question: t("faq.3.question"),
      answer: t("faq.3.answer")
    },
    {
      question: t("faq.4.question"),
      answer: t("faq.4.answer")
    },
    {
      question: t("faq.5.question"),
      answer: t("faq.5.answer")
    },
    {
      question: t("faq.6.question"),
      answer: t("faq.6.answer")
    },
    {
      question: t("faq.7.question"),
      answer: t("faq.7.answer")
    }
  ];

  return (
    <section id="faq" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            {t("faq.subtitle")}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem 
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
