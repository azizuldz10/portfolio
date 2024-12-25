'use client';
import { motion } from 'framer-motion';
import ProfileImage from '@/components/ProfileImage';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-foreground/80 mb-4">
              Saya adalah seorang developer yang passionate dalam menciptakan 
              pengalaman digital yang menarik dan fungsional.
            </p>
            <div className="flex gap-4 mt-8">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">React</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">Next.js</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">TypeScript</span>
            </div>
          </div>
          <div className="relative">
            <ProfileImage />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 