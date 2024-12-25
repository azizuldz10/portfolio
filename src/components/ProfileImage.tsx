'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary/20"
    >
      <Image
        src="/images/profile.jpg"
        alt="Profile"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, 256px"
      />
    </motion.div>
  );
} 