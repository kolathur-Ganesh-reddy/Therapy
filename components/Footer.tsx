"use client";

import { motion, Variants } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Animation variants for staggered column entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const columnVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut"
      }
    }
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "#ffffff",
      transition: { duration: 0.9 }
    }
  };

  return (
    <footer className="bg-sage-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand Section */}
          <motion.div variants={columnVariants}>
            <motion.h3 
              className="text-2xl font-serif font-semibold mb-4"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Dr. Maya Reynolds, PsyD
            </motion.h3>
            <motion.p 
              className="text-sage-200 leading-relaxed"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Licensed Clinical Psychologist specializing in anxiety, trauma, and burnout therapy for adults in Santa Monica, California.
            </motion.p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div variants={columnVariants}>
            <motion.h4 
              className="font-semibold mb-4 text-lg"
              variants={textVariants}
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-2">
              {[
                { href: "#about", text: "About" },
                { href: "#services", text: "Services" },
                { href: "#approach", text: "Approach" },
                { href: "#office", text: "Office" },
                { href: "#faq", text: "FAQ" }
              ].map((item, index) => (
                <motion.li 
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a 
                    href={item.href}
                    className="text-sage-200 hover:text-white transition-colors block py-1"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    {item.text}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={columnVariants}>
            <motion.h4 
              className="font-semibold mb-4 text-lg"
              variants={textVariants}
            >
              Contact
            </motion.h4>
            <ul className="space-y-2 text-sage-200">
              <motion.li variants={textVariants}>123th Street 45 W</motion.li>
              <motion.li variants={textVariants}>Santa Monica, CA 90401</motion.li>
              <motion.li 
                className="pt-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a 
                  href="tel:+13105551234"
                  className="hover:text-white transition-colors"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  (310) 555-1234
                </motion.a>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.a 
                  href="mailto:contact@drmayareynolds.com"
                  className="hover:text-white transition-colors"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  contact@drmayareynolds.com
                </motion.a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div 
          className="border-t border-sage-700 pt-8 text-center text-sage-300 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            &copy; {currentYear} Dr. Maya Reynolds, PsyD. All rights reserved.
          </motion.p>
          <motion.p 
            className="mt-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Licensed Clinical Psychologist, California
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
