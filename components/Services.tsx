"use client";

import { Heart, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Anxiety & Panic Treatment',
      description: 'Anxiety can feel overwhelming and exhausting. Dr. Reynolds helps adults understand the root of their anxiety, reduce physical symptoms, and develop effective coping strategies using evidence-based approaches such as Cognitive Behavioral Therapy (CBT) and mindfulness techniques.',
    },
    {
      icon: Shield,
      title: 'Trauma Therapy & EMDR',
      description: 'Unresolved trauma can continue to affect daily life, relationships, and emotional safety. Dr. Reynolds is trained in EMDR (Eye Movement Desensitization and Reprocessing), an evidence-based treatment that helps clients process traumatic experiences in a safe, structured, and supportive environment.',
    },
    {
      icon: Sparkles,
      title: 'Burnout & Professional Support',
      description: 'Chronic stress and emotional overload can lead to burnout and disconnection. Therapy focuses on helping clients identify patterns, set healthier boundaries, and build emotional regulation skills that support long-term resilience and balance.',
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-20 sm:py-28 bg-gradient-to-b from-sage-50 to-white" 
      style={{
        background: 'linear-gradient( #E7DCCD, #F0E3CE)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-sage-900 mb-4">
            Services I Offer
          </h2>
          
          <motion.div 
            className="w-20 h-1 bg-sage-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          
          <motion.p 
            className="text-xl text-sage-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Specialized therapy approaches tailored to your unique needs and experiences
          </motion.p>
        </motion.div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-sage-100 relative overflow-hidden"
              style={{
                background: 'linear-gradient( #F2F0E6, #F2F0E6)',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ 
                delay: 0.2 + index * 0.1,
                duration: 0.5,
                ease: "easeOut"
              }}
              whileHover={{ y: -5, transition: { duration: 0.6 } }}
            >
              {/* Icon */}
              <motion.div 
                className="bg-sage-100 w-16 h-16 rounded-full flex items-center justify-center mb-6"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ 
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon className="text-sage-700" size={28} />
                </motion.div>
              </motion.div>
              
              {/* Title */}
              <motion.h3 
                className="text-2xl font-serif font-semibold text-sage-900 mb-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                {service.title}
              </motion.h3>
              
              {/* Description */}
              <motion.p 
                className="text-sage-700 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.7 }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="inline-block bg-sage-600 text-white px-8 py-4 rounded-full hover:bg-sage-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Discuss Your Needs
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}