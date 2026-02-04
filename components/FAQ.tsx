"use client";

import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Who do you work with?',
      answer: 'Dr. Reynolds works with adults experiencing anxiety, trauma, chronic stress, and emotional overwhelm. Her practice is best suited for individuals seeking thoughtful, evidence-based care.',
    },
    {
      question: 'What can I expect in our first session?',
      answer: 'The first session is an opportunity for us to get to know each other and understand what brings you to therapy. We\'ll discuss your current concerns, your history, and what you hope to gain from our work together. I\'ll explain my approach and answer any questions you have. This initial meeting helps us determine if we\'re a good fit and create a collaborative plan moving forward.',
    },
    {
      question: 'Do you accept insurance?',
      answer: 'I operate as an out-of-network provider. While I don\'t bill insurance directly, I can provide you with a superbill (detailed receipt) that you may submit to your insurance company for potential reimbursement. Many clients find that out-of-network therapy offers more flexibility and privacy. I\'m happy to discuss costs and payment options during our initial consultation.',
    },
    {
      question: 'How long does therapy typically take?',
      answer: 'The length of therapy varies based on your individual needs and goals. Some clients find relief within a few months, while others benefit from longer-term work, especially when addressing trauma or complex patterns. My focus is not just on symptom relief, but on helping you develop lasting insight and resilience. We\'ll regularly check in on your progress and adjust our approach as needed.',
    },
    {
      question: 'What is EMDR and how does it help with trauma?',
      answer: 'EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based therapy approach that helps process traumatic memories and reduce their emotional impact. It\'s effective for both single-incident trauma and complex, long-standing patterns. The approach is paced carefully with emphasis on safety and stabilization, helping you feel more regulated in daily life—not just during sessions.',
    },
    {
      question: 'Do you offer telehealth sessions?',
      answer: 'Yes, I offer secure telehealth sessions for clients located anywhere in California. Many clients appreciate the flexibility and convenience of online therapy, especially for those with busy schedules or who prefer the comfort of their own space. I also offer in-person sessions at my Santa Monica office for those who prefer face-to-face support.',
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: "easeOut" }
    }
  };

  const answerVariants: Variants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: { duration: 0.9 }
    }
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white" style={{
        background: 'linear-gradient( #f2ede0)',
      }}>
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={titleVariants}>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-sage-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-sage-600 mx-auto mb-6"
            initial={{ scaleX: 0, originX: 0.5 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.p 
            className="text-xl text-sage-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Answers to common questions about therapy and working together
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-cream-50 rounded-xl border border-sage-100 overflow-hidden transition-all duration-200 hover:shadow-md hover:shadow-sage-100" 
              style={{ background: 'linear-gradient( #F0E3CE)' }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 sm:px-8 py-6 flex justify-between items-center text-left gap-4 group"
                whileTap={{ scale: 0.98 }}
                whileHover={{ 
                  backgroundColor: "rgba(156, 163, 175, 0.1)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.h3 
                  className="text-lg sm:text-xl font-semibold text-sage-900 pr-4 group-hover:text-sage-800"
                  whileHover={{ x: 4 }}
                >
                  {faq.question}
                </motion.h3>
                <motion.div 
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-600 text-white flex items-center justify-center transition-all duration-200"
                  animate={{ 
                    rotate: openIndex === index ? 180 : 0,
                    scale: openIndex === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    variants={answerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="px-6 sm:px-8 pb-6 overflow-hidden"
                  >
                    <p className="text-sage-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.p 
            className="text-lg text-sage-700 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have more questions? I'm happy to discuss them during a consultation.
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-block bg-sage-600 text-white px-8 py-4 rounded-full hover:bg-sage-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 10px 25px rgba(75, 85, 99, 0.3)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
