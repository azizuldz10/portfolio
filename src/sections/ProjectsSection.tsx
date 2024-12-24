'use client';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "/project1.png", // Tambahkan gambar project Anda
    link: "https://github.com/yourusername/project1"
  },
  // Tambahkan project lainnya
];

export default function ProjectsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="projects" className="min-h-screen py-20 bg-background/50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>
        
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl bg-foreground/5 hover:bg-foreground/10"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 