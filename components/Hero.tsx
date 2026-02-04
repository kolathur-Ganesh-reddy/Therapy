"use client";

import { MapPin, Calendar } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9 },
  },
};

const imageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9 },
  },
};

export default function Hero() {
  return (
    <section
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28"
      style={{ background: 'linear-gradient(#f2ede0, #f2ede0)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-sage-900 leading-tight">
                Anxiety & Trauma Therapy in California for Adults Seeking Lasting Change
              </h1>
              <p className="text-xl sm:text-2xl text-sage-700 leading-relaxed">
                Compassionate, evidence-based therapy with Dr. Maya Reynolds, PsyD — helping adults feel grounded, understood, and empowered to heal.
              </p>
            </motion.div>

            <motion.div className="flex gap-4 pt-4" variants={fadeUp}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-sage-600 text-white px-8 py-4 rounded-full font-semibold"
              >
                Schedule a Consultation
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="border-2 border-sage-600 text-sage-700 px-8 py-4 rounded-full font-semibold"
              >
                Learn More
              </motion.a>
            </motion.div>

            <motion.div className="flex gap-6 pt-4 text-sage-700" variants={fadeUp}>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                Santa Monica, CA
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                In-Person & Telehealth
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="relative"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
              variants={imageVariant}
            >
              <img
                src="https://images.pexels.com/photos/6932522/pexels-photo-6932522.jpeg"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
