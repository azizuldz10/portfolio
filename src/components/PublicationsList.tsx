'use client';
import { motion } from 'framer-motion';

const publications = [
  {
    title: "Pengembangan Sistem Informasi Berbasis Web Menggunakan Next.js dan TypeScript",
    abstract: "Penelitian ini membahas tentang pengembangan sistem informasi modern menggunakan Next.js dan TypeScript untuk meningkatkan performa dan developer experience...",
    link: "https://link-to-publication.com",
    tags: ["Web Development", "React", "Next.js"]
  },
  {
    title: "Implementasi Clean Architecture pada Aplikasi React Native",
    abstract: "Studi ini mengeksplorasi penerapan clean architecture dalam pengembangan aplikasi mobile menggunakan React Native...",
    link: "https://link-to-publication.com",
    tags: ["Mobile Development", "React Native", "Architecture"]
  },
  // Tambahkan publikasi lainnya
];

export default function PublicationsList() {
  return (
    <div className="space-y-8">
      {publications.map((pub, index) => (
        <motion.article
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-foreground/5 rounded-xl p-6 hover:shadow-xl transition-all"
        >
          <div className="space-y-4">
            {/* Title as Link */}
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                {pub.title}
              </h2>
            </a>
            
            {/* Abstract */}
            <p className="text-foreground/70">
              {pub.abstract}
            </p>
            
            {/* Tags */}
            <div className="flex gap-2 flex-wrap">
              {pub.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
} 