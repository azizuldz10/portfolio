'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center py-20 sm:py-0">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 sm:mb-8 relative"
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto relative rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/images/profile.jpg"
                alt="DzDev Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative circles - hidden on mobile */}
            <div className="hidden sm:flex absolute -z-10 inset-0 items-center justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-primary/20 animate-pulse" />
            </div>
            <div className="hidden sm:flex absolute -z-10 inset-0 items-center justify-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-2 border-primary/10" />
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm DzDev HIHIHIHIH
          </motion.h1>
          
          <motion.p
            className="text-lg sm:text-xl text-foreground/70 mb-6 sm:mb-8 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Frontend Developer & Web Enthusiast
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#about"
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors text-sm sm:text-base"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 