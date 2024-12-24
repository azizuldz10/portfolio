'use client';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-foreground/10"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Your Name</h1>
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
} 