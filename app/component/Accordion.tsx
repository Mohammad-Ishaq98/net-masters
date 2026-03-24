"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AnimatePresence, easeInOut, easeOut, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { Fragment } from "react";

const faqs = [
  {
    question: "Is team pricing available?",
    answer:
      "Yes! You can purchase a license that you can share with your entire team.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee.",
  },
  {
    question: "Can I upgrade later?",
    answer: "Absolutely! You can upgrade at any time from your account.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee.",
  },
  {
    question: "Can I upgrade later?",
    answer: "Absolutely! You can upgrade at any time from your account.",
  },
  {
    question: "Can I cancel later?",
    answer: "Absolutely! You can cancel at any time from your account.",
  },
];

const Accordion = () => {
  return (
    <div className="w-full">
      {faqs.map((faq, index) => (
        <Disclosure key={index} as="div">
          {({ open }) => (
            <>
              <DisclosureButton className="flex w-full items-center justify-between border-b text-[#626262] py-[1.0625rem] hover:text-black transition-colors">
                <span className="font-poppins text-left font-bold text-sm sm:text-lg lg:text-xl xl:text-2xl pb-2 xl:pb-8">
                  {faq.question}
                </span>

                {/* Icon that changes between Plus and Minus */}
                <motion.div
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {open ? (
                    <Minus className="h-5 w-5 text-black" />
                  ) : (
                    <Plus className="h-5 w-5 text-black" />
                  )}
                </motion.div>
              </DisclosureButton>

              <div className="overflow-hidden">
                <AnimatePresence initial={false}>
                  {open && (
                    <DisclosurePanel static as={Fragment}>
                      <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="text-sm sm:text-lg text-black py-[2rem] font-poppins"
                      >
                        {faq.answer}
                      </motion.div>
                    </DisclosurePanel>
                  )}
                </AnimatePresence>
              </div>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default Accordion;
