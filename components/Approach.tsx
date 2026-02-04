"use client";

import { Brain, Eye, Leaf, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Approach() {
  const modalities = [
    {
      icon: Brain,
      name: 'Cognitive-Behavioral Therapy (CBT)',
      description:
        'Understanding thought patterns and developing practical coping strategies',
    },
    {
      icon: Eye,
      name: 'EMDR',
      description:
        'Evidence-based trauma processing for lasting healing and relief',
    },
    {
      icon: Leaf,
      name: 'Mindfulness-Based Practices',
      description:
        'Cultivating present-moment awareness and stress reduction',
    },
    {
      icon: Users,
      name: 'Body-Oriented Techniques',
      description:
        'Addressing the physical manifestations of anxiety and trauma',
    },
  ];

  return (
    <motion.section
      id="approach"
      className="py-20 sm:py-28 bg-white"
      style={{ background: 'linear-gradient(#F1F0E2)' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-sage-900">
                My Approach to Therapy
              </h2>

              <motion.div
                className="w-20 h-1 bg-sage-600"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
              />
            </div>

            <div className="space-y-4 text-lg text-sage-700 leading-relaxed">
              <p>
                I believe therapy works best when clients feel respected, understood, and actively involved in the process. My approach is warm, collaborative, and grounded, integrating multiple evidence-based methods to address both the emotional and physiological aspects of healing.
              </p>
              <p>
                Rather than just targeting symptoms, my goal is to help you develop lasting insight, resilience, and a stronger relationship with yourself. Sessions are structured to provide support while creating space for meaningful reflection and depth.
              </p>
              <p>
                Trauma work is paced carefully with emphasis on safety and stabilization, helping you feel more regulated not just during sessions, but in your daily life.
              </p>
            </div>
          </motion.div>

          {/* RIGHT CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">
            {modalities.map((modality, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl border border-sage-100 hover:shadow-lg transition-shadow duration-300"
                style={{ background: 'linear-gradient(#e2d9cd)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.15,
                  ease: 'easeOut',
                }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <motion.div
                  className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm"
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ once: true }}
                >
                  <modality.icon className="text-sage-700" size={24} />
                </motion.div>

                <h3 className="text-lg font-semibold text-sage-900 mb-2">
                  {modality.name}
                </h3>

                <p className="text-sage-700 text-sm leading-relaxed">
                  {modality.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-sage-600 to-sage-700 rounded-2xl p-8 sm:p-12 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold">
              Ideal for High-Achievers & Professionals
            </h3>
            <p className="text-lg opacity-95 leading-relaxed">
              If you're looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit.
            </p>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
