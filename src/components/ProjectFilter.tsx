'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Category = 'All' | 'Web App' | 'Mobile App' | 'UI/UX' | 'Other';

interface ProjectFilterProps {
  onFilterChange: (category: Category) => void;
  onSearchChange: (search: string) => void;
}

export default function ProjectFilter({ onFilterChange, onSearchChange }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const categories: Category[] = ['All', 'Web App', 'Mobile App', 'UI/UX', 'Other'];

  return (
    <div className="mb-12">
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search projects..."
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-2 pl-10 bg-foreground/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              onFilterChange(category);
            }}
            className={`relative px-4 py-2 rounded-full transition-colors ${
              activeCategory === category
                ? 'text-white'
                : 'text-foreground/70 hover:text-primary'
            }`}
          >
            <AnimatePresence>
              {activeCategory === category && (
                <motion.span
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-primary rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </AnimatePresence>
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </div>
    </div>
  );
} 