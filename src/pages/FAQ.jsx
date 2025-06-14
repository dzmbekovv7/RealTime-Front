import React, { useState } from "react";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    { question: "How can I start a chat?", answer: "Simply click on the chat icon to begin." },
    { question: "Is the chat available 24/7?", answer: "Yes, our support team is available around the clock." },
    { question: "Can I speak to a human representative?", answer: "Yes, you can chat with a live agent anytime." },
    { question: "What kind of issues can I discuss in the chat?", answer: "You can ask about anything related to our services, products, and more." },
    { question: "How long does it take to get a response?", answer: "Response time is usually within a few minutes." },
    { question: "Can I send files through the chat?", answer: "Yes, you can attach images, documents, and other files." },
    { question: "Do I need to sign up to use the chat?", answer: "No, you can start chatting without any sign-up process." },
    { question: "Is the chat private?", answer: "Yes, your conversations are private and secure." },
    { question: "Can I use the chat on my mobile device?", answer: "Yes, the chat is fully optimized for mobile use." },
    { question: "How do I end the chat?", answer: "You can close the chat by clicking the 'End Chat' button at any time." },
  ];

  const toggleFAQ = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-base-100">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md transition duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none"
              >
                <span className="text-base font-medium text-gray-800">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-4 text-sm text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
