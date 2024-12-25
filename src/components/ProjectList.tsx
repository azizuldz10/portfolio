'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ProjectFilter from './ProjectFilter';
import LoadingState from './LoadingState';

const projects = [
  {
    title: "Project 1",
    description: "Detailed description of project 1. Include technologies used and challenges overcome.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "/images/project1.png",
    link: "https://github.com/yourusername/project1",
    demo: "https://project1.demo.com",
    category: "Web App"
  },
  // Add more projects
];

export default function ProjectList() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = category === 'All' || project.category === category;
      const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
                          project.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  if (isLoading) return <LoadingState />;

  return (
    <>
      <ProjectFilter
        onFilterChange={(cat) => setCategory(cat)}
        onSearchChange={(value) => setSearch(value)}
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={category + search}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-foreground/5 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                  >
                    View Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white text-primary rounded-full hover:bg-gray-100 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-primary mb-2 inline-block">{project.category}</span>
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-foreground/70 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
      
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <h3 className="text-xl font-medium text-foreground/70">
            No projects found
          </h3>
          <p className="text-foreground/50 mt-2">
            Try adjusting your search or filter
          </p>
        </motion.div>
      )}
    </>
  );
} 