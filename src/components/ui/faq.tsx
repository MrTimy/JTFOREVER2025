import { useState } from "react";


const faqs = [

   {
    question: "Are kids welcome?",
    answer:
      "As much as we love your little ones, we will not be including them in the ceremony or reception. However, we recognize that some of you will be traveling with your kids, so please know they are welcome at the Friday cocktail reception and Sunday brunch!",
  },
   {
    question: "How does the Guest Photo Upload work?",
    answer:
      "We know some of our guests have an eye for great shots — and we’d love to see the day through your lens! 📸 Whether it’s a sweet selfie, a moment with the couple, or a fun dance floor snap, your pictures are part of the memories we’ll cherish forever.You’ll be able to upload your photos easily on the website. All images will be saved securely in the cloud, so we (and you!) can access and relive the magic anytime.",
  },
  {
    question: "What should I wear? Is there a dress code?",
    answer:
      "Formal – but comfy shoes encouraged! We want you to feel great and enjoy the celebration, so dress to impress, but also to dance!",
  },
   {
    question: "Are they Hotels Near the Venue?",
    answer:
      "1. Top Rank Hotel Galaxy – Offers comfortable rooms with free breakfast and Wi‑Fi, plus a pool, spa, and gym expedia.com toprankhotelgalaxyutako.com,    2. Chida International Hotel – its a 3.5-star business-class hotel featuring an outdoor pool, health club, free breakfast, and airport shuttle, 3. Yanna Apartments by Khaliques – Serviced apartments with kitchenettes, spa, pool, and complimentary breakfast—ideal for families or longer stay, 4. Sandralia Hotel – Upscale option with an outdoor pool, fitness centre, spa facilities, and poolside bars"
  },
  {
    question: "What time should I arrive?",
    answer:
      "The ceremony will begin at 12PM, so please plan to arrive at least 15–20 minutes early to find your seat and get settled.",
  },
  {
    question: "Will the ceremony and reception be at the same location?",
    answer:
      "No, they are in different locations — but they’re close by. Directions and details are listed in the event details.",
  },
  {
    question: "What will the weather be like?",
    answer:
      "It’s August in Nigeria — which means there’s a good chance of rain. 🌧️ While we’re hopeful for clear skies and sunshine, we recommend guests come prepared, just in case. Umbrellas, covered shoes, or an extra wrap might come in handy! However, Rain or shine, it’s going to be a beautiful day — and we can’t wait to celebrate it with you. ☀️🌧️💕",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, There is plenty of free parking near the entrance of either Halls.",
  },
  {
    question: "Can I bring a plus-one?",
    answer:
      "We’d love to celebrate with all our favorite people, but due to space constraints, we’re only able to accommodate the number of guests indicated on your Access card. Thanks for understanding!",
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
