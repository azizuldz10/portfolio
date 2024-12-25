'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const allProjects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features dark mode, responsive design, and smooth animations.",
    image: "/images/portfolio.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/azizuldz10/portfolio",
    demo: "https://dzdev.vercel.app"
  },
  // {
  //   title: "Research Publication Platform",
  //   description: "A platform for managing and showcasing research publications. Built with React and Firebase, featuring authentication and real-time updates.",
  //   image: "/images/research.png",
  //   tech: ["React", "Firebase", "Material-UI", "Node.js"],
  //   link: "https://github.com/azizuldz10/research-platform",
  //   demo: "https://research-platform.vercel.app"
  //   // Not Yet
  // },
  // {
  //   title: "Data Visualization Dashboard",
  //   description: "Interactive dashboard for visualizing complex datasets. Implements various chart types and filtering capabilities.",
  //   image: "/images/dashboard.png",
  //   tech: ["React", "D3.js", "TailwindCSS", "REST API"],
  //   link: "https://github.com/azizuldz10/data-viz",
  //   demo: "https://data-viz-dashboard.vercel.app"
  //   // Not Yet
  // }
];

export default function ProjectGrid() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {allProjects.map((project, index) => (
        <motion.article
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group bg-foreground/5 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          <div className="relative aspect-video overflow-hidden">
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
            <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h2>
            <p className="text-foreground/70 mb-4">
              {project.description}
            </p>
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
  );
} 