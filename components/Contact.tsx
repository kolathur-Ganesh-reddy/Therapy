"use client";

import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const heroTextVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const formVariants: Variants = {
  hidden: { opacity: 0, x: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const inputVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section 
      id="contact" 
      className="py-20 sm:py-28 bg-gradient-to-b from-sage-50 to-cream-50"
      style={{ background: 'linear-gradient(#e5dcc5)' }}
      ref={ref}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Hero Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-sage-900 mb-4"
            variants={heroTextVariants}
          >
            Begin Your Healing Journey
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-sage-600 mx-auto mb-6"
            variants={itemVariants}
          />
          <motion.p 
            className="text-xl text-sage-700 leading-relaxed"
            variants={heroTextVariants}
          >
            Taking the first step toward therapy can feel difficult. I'm here to make the process as comfortable as possible.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
          variants={containerVariants}
        >
          {/* Contact Info Section */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
          >
            <motion.div 
              className="space-y-4 text-lg text-sage-700 leading-relaxed"
              variants={itemVariants}
            >
              <motion.p variants={itemVariants}>
                I offer a free 15-minute phone consultation to discuss your concerns, answer questions, and determine if we're a good fit. This is a no-pressure opportunity to get a sense of my approach and see if therapy feels right for you.
              </motion.p>
              <motion.p variants={itemVariants}>
                Reach out today to schedule your consultation or first appointment. I look forward to supporting you.
              </motion.p>
            </motion.div>

            {/* Contact Cards */}
            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.div
                className="flex items-start gap-4 p-6 rounded-xl shadow-md border border-sage-100"
                style={{ background: 'linear-gradient(#E8EAE6)' }}
                variants={cardVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="text-sage-700" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-sage-900 mb-1">Email</h4>
                  <a 
                    href="mailto:contact@drmayareynolds.com" 
                    className="text-sage-700 hover:text-sage-900 transition-colors"
                  >
                    contact@drmayareynolds.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border border-sage-100"
                style={{ background: 'linear-gradient(#E8EAE6)' }}
                variants={cardVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                  <Phone className="text-sage-700" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-sage-900 mb-1">Phone</h4>
                  <a href="tel:+13105551234" className="text-sage-700 hover:text-sage-900 transition-colors">
                    (310) 555-1234
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-6 rounded-xl shadow-md border border-sage-100"
                style={{ background: 'linear-gradient(#E8EAE6)' }}
                variants={cardVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                  <MapPin className="text-sage-700" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-sage-900 mb-1">Office Location</h4>
                  <p className="text-sage-700">
                    123th Street 45 W<br />
                    Santa Monica, CA 90401
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 border border-sage-100"
            style={{ background: 'linear-gradient(#E8EAE6)' }}
            variants={formVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <motion.h3 
              className="text-2xl font-serif font-semibold text-sage-900 mb-6"
              variants={itemVariants}
            >
              Request a Consultation
            </motion.h3>
            <motion.form className="space-y-6" variants={containerVariants}>
              <motion.div variants={inputVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-sage-800 mb-2">
                  Full Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 transition-colors outline-none"
                  placeholder="Your name"
                  style={{ background: 'linear-gradient(#E8EAE6)' }}
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.div variants={inputVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-sage-800 mb-2">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 transition-colors outline-none"
                  placeholder="your@email.com"
                  style={{ background: 'linear-gradient(#E8EAE6)' }}
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.div variants={inputVariants}>
                <label htmlFor="phone" className="block text-sm font-medium text-sage-800 mb-2">
                  Phone Number
                </label>
                <motion.input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 transition-colors outline-none"
                  placeholder="(310) 555-1234"
                  style={{ background: 'linear-gradient(#E8EAE6)' }}
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.div variants={inputVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-sage-800 mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 transition-colors outline-none resize-none"
                  placeholder="Tell me a bit about what brings you to therapy..."
                  style={{ background: 'linear-gradient(#E8EAE6)' }}
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-sage-600 text-white px-8 py-4 rounded-full hover:bg-sage-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
