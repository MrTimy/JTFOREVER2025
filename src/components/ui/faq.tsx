import { useState } from "react";

const faqs = [
  {
    question: "What should I wear? Is there a dress code?",
    answer:
      "[Include your dress code, e.g., “Cocktail attire,” “Garden party chic,” “Formal – but comfy shoes encouraged!”] We want you to feel great and enjoy the celebration, so dress to impress, but also to dance!",
  },
  {
    question: "What time should I arrive?",
    answer:
      "The ceremony will begin at [Time], so please plan to arrive at least 15–20 minutes early to find your seat and get settled.",
  },
  {
    question: "Will the ceremony and reception be at the same location?",
    answer:
      "Yes! (Or, if not: No, they are in different locations — but they’re close by. Directions and details are listed [here].)",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, parking is available at [Location]. Valet/self-parking/ride-share details: [insert relevant info]",
  },
  {
    question: "Can I bring a plus-one?",
    answer:
      "We’d love to celebrate with all our favorite people, but due to space constraints, we’re only able to accommodate the guests listed on your invitation. Thanks for understanding!",
  },
  {
    question: "Are kids welcome?",
    answer:
      "[Your answer here — e.g., “We love your little ones, but we’re keeping it adults-only for the evening!” or “Yes, bring the whole crew!”]",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-10 bg-white px-4">
      <h1 className="text-4xl font-bold font-cairo mb-10">FAQs</h1>
      <div className="w-full max-w-2xl">
        {faqs.map((faq, idx) => (
          <div key={faq.question}>
            <div
              className="flex items-center justify-between py-7 transition group cursor-pointer"
              onClick={() => handleToggle(idx)}
            >
              <span className="flex-1 text-left font-semibold text-xl md:text-2xl font-cairo">
                {faq.question}
              </span>
              <span
                className="text-3xl select-none ml-7 font-light transition-transform duration-200"
                aria-label={openIndex === idx ? "Collapse" : "Expand"}
              >
                {openIndex === idx ? "−" : "+"}
              </span>
            </div>
            {openIndex === idx && (
              <div className="pl-1 pr-5 pb-6 text-lg text-[#6C6B6B] font-cairo animate-fade-in">
                {faq.answer || (
                  <span className="italic text-[#6C6B6B] font-cairo">
                    [Add your answer here]
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
