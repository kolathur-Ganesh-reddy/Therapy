"use client";

import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const credentials = [
    'Licensed Clinical Psychologist (PsyD)',
    'Specializing in Anxiety & Trauma',
    'Evidence-Based Treatment Approaches',
    'California Licensed Provider',
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 sm:py-28 bg-white overflow-hidden"
      style={{
        background: 'linear-gradient( #E5E0DA, #EBE6DE)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Dr. Maya Reynolds"
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div 
              className="absolute -top-6 -right-6 bg-sage-600 text-white p-8 rounded-xl shadow-lg max-w-xs hidden sm:block"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -10 }}
              transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
              whileHover={{ y: -5 }}
            >
              <p className="text-lg font-semibold mb-2">10+ Years</p>
              <p className="text-sm opacity-90">Supporting adults through anxiety, trauma, and life transitions</p>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Title Section with Character Animation */}
            <div className="space-y-4 overflow-hidden">
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-sage-900"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block"
                >
                 Meet Dr. Maya Reynolds, PsyD
                </motion.span>
              </motion.h2>
              
              <motion.div 
                className="w-20 h-1 bg-sage-600"
                initial={{ width: 0 }}
                animate={isInView ? { width: "5rem" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>

            {/* Paragraphs with Word-by-Word or Line-by-Line Animation */}
            <div className="space-y-4 text-lg text-sage-700 leading-relaxed">
              {/* First Paragraph with Word Animation */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="overflow-hidden"
              >
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={isInView ? { y: 0 } : { y: "100%" }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Dr. Maya Reynolds is a licensed clinical psychologist who specializes in working with adults experiencing anxiety, trauma, and chronic stress. Her approach is warm, collaborative, and grounded in research-backed therapeutic methods.
                </motion.span>
              </motion.p>

              {/* Second Paragraph with Staggered Lines */}
              <div className="overflow-hidden">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    Dr. Reynolds believes that healing happens in a space where clients feel safe, respected, and genuinely understood. She works closely with each client to tailor treatment to their unique experiences, goals, and strengths.
                  </motion.span>
                  <br className="hidden sm:block" />
                  <motion.span
                    className="inline-block mt-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                   Her practice is rooted in helping individuals develop insight, emotional resilience, and practical skills they can carry into everyday life.
                  </motion.span>
                </motion.p>
              </div>

              {/* Third Paragraph with Character Reveal Effect */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="relative overflow-hidden"
              >
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth.
                </motion.span>
                <br className="hidden sm:block" />
                <motion.span
                  className="inline-block mt-2"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  I integrate evidence-based methods to help clients understand both the emotional and physiological sides of what they're experiencing.
                </motion.span>
              </motion.p>
            </div>

            {/* Credentials with Typing Effect */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {credentials.map((credential, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.0 + (index * 0.1) }}
                >
                  {/* Icon Animation */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 1.1 + (index * 0.1)
                    }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <CheckCircle2 className="text-sage-600 flex-shrink-0 mt-1" size={20} />
                  </motion.div>
                  
                  {/* Text Animation */}
                  <motion.span 
                    className="text-sage-700 font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 1.2 + (index * 0.1) }}
                    whileHover={{ 
                      x: 5,
                      color: "#4b5563",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {credential}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}