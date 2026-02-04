"use client";

import { motion, type Variants } from 'framer-motion';
import { MapPin, Phone, Video, Clock } from 'lucide-react';


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: 'easeOut' }
  }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: 'easeOut' }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9 }
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    transition: { type: 'spring', stiffness: 400, damping: 20 }
  }
};

export default function Office() {
  return (
    <motion.section 
      id="office" 
      className="py-20 sm:py-28 bg-gradient-to-b from-cream-50" 
      style={{
        background: 'linear-gradient( #E5E0DA)',
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-sage-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            A Calm Space for Healing
          </motion.h2>
          <div className="w-20 h-1 bg-sage-600 mx-auto mb-6"></div>
          <motion.p 
            className="text-xl text-sage-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My Santa Monica office is designed to feel safe, comfortable, and grounding—a place where you can truly be yourself
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16"
          variants={containerVariants}
        >
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div className="space-y-4" variants={containerVariants}>
                <motion.div 
                  className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
                  variants={imageVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://progradedigital.com/wp-content/uploads/2023/04/31-Main-Image.png?auto=compress&cs=tinysrgb&w=1200"
                    alt="Therapy office interior"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="aspect-[3/2] rounded-2xl overflow-hidden shadow-lg"
                  variants={imageVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://images.pexels.com/photos/6932094/pexels-photo-6932094.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Comfortable seating area"
                    className="w-full h-500px object-cover"
                  />
                </motion.div>
              </motion.div>
              <motion.div className="space-y-4 pt-8" variants={containerVariants}>
                <motion.div 
                  className="aspect-[3/2] rounded-2xl overflow-hidden shadow-lg"
                  variants={imageVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://images.pexels.com/photos/6932074/pexels-photo-6932074.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Natural light in office"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
                  variants={imageVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://images.pexels.com/photos/6932061/pexels-photo-6932061.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Peaceful therapy space"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div className="space-y-4 text-lg text-sage-700 leading-relaxed" variants={itemVariants}>
              <motion.p variants={itemVariants}>
               Dr. Maya Reynolds’ practice is designed to feel calm, private, and welcoming. Whether meeting in person or through secure telehealth, sessions take place in a space that prioritizes comfort, emotional safety, and confidentiality.
              </motion.p>
              <motion.p variants={itemVariants}>
                The office environment is intentionally warm and grounding, offering clients a quiet place to reflect, process, and heal without judgment. For those who prefer flexibility, telehealth sessions are available for adults throughout California.
              </motion.p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div 
                className="p-6 rounded-xl shadow-md" 
                style={{
                  background: 'linear-gradient( #d6cab8)'
                }}
                variants={cardVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <MapPin className="text-sage-600 mb-3" size={24} />
                <h4 className="font-semibold text-sage-900 mb-2">Location</h4>
                <p className="text-sage-700 text-sm">123th Street 45 W<br />Santa Monica, CA 90401</p>
              </motion.div>

              <motion.div 
                className="p-6 rounded-xl shadow-md" 
                style={{
                  background: 'linear-gradient( #d6cab8)'
                }}
                variants={cardVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <Video className="text-sage-600 mb-3" size={24} />
                <h4 className="font-semibold text-sage-900 mb-2">Session Options</h4>
                <p className="text-sage-700 text-sm">In-person & secure telehealth available</p>
              </motion.div>

              <motion.div 
                className="p-6 rounded-xl shadow-md" 
                style={{
                  background: 'linear-gradient( #d6cab8)'
                }}
                variants={cardVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <Clock className="text-sage-600 mb-3" size={24} />
                <h4 className="font-semibold text-sage-900 mb-2">Privacy</h4>
                <p className="text-sage-700 text-sm">Confidential, professional environment</p>
              </motion.div>

              <motion.div 
                className="p-6 rounded-xl shadow-md" 
                style={{
                  background: 'linear-gradient( #d6cab8)'
                }}
                variants={cardVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="text-sage-600 mb-3" size={24} />
                <h4 className="font-semibold text-sage-900 mb-2">California Clients</h4>
                <p className="text-sage-700 text-sm">Licensed to provide telehealth throughout CA</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
