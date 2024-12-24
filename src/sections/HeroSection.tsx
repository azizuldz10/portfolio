'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 relative"
      >
        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Creative Developer
        </h1>
        <p className="text-xl text-foreground/80 mb-8">
          Building beautiful digital experiences
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90"
        >
          View Projects
        </motion.button>
      </motion.div>
    </section>
  );
} 