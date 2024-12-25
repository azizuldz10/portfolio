'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const certificates = [
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "2024",
    image: "/images/certificates/dicoding-web.jpg",
    credential: "N9ZO4K2N5P1M",
    link: "https://www.dicoding.com/certificates/N9ZO4K2N5P1M"
  },
  {
    title: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "2024",
    image: "/images/certificates/dicoding-frontend.jpg",
    credential: "MRZM4N334ZYD",
    link: "https://www.dicoding.com/certificates/MRZM4N334ZYD"
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "2024",
    image: "/images/certificates/dicoding-js.jpg",
    credential: "JMZVM9N04ZN9",
    link: "https://www.dicoding.com/certificates/JMZVM9N04ZN9"
  },
  {
    title: "The Basics of Linux Command Line",
    issuer: "UDEMY",
    date: "2024",
    image: "/images/certificates/udemy.png",
    credential: "UC-ece91887-42b8-42a1-bfe5-f71c6c107b16",
    link: "https://www.udemy.com/certificate/UC-ece91887-42b8-42a1-bfe5-f71c6c107b16/"
  },
  {
    title: "Bootcamp Python Data Science",
    issuer: "Build With Angga",
    date: "2023",
    image: "/images/certificates/BWA_Azizul.jpg",
    credential: "-",
    link: "https://drive.google.com/file/d/10lNGxNzBYhqOVoxzGJnHf8oZUHQVxOXu/view?usp=drive_link"
  }
];

export default function AchievementsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical tablet/desktop breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Adjust items per page based on screen size
  const itemsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(certificates.length / itemsPerPage);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <section className="py-20 bg-foreground/5">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Achievements & Certificates
          </h2>
          <p className="text-foreground/70">
            Recognition and qualifications earned through continuous learning
          </p>
        </motion.div>

        {/* Certificates Section with Slideshow */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Certificates</h3>
          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-6`}
                >
                  {certificates
                    .slice(
                      currentPage * itemsPerPage,
                      (currentPage + 1) * itemsPerPage
                    )
                    .map((cert, index) => (
                      <motion.a
                        key={index}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group bg-background rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                      >
                        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[250px]"> {/* Adjusted height for mobile */}
                          <Image
                            src={cert.image}
                            alt={cert.title}
                            fill
                            className="object-contain p-2"
                            sizes={isMobile ? "100vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                            quality={100}
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                            {cert.title}
                          </h4>
                          <p className="text-sm text-foreground/70 mb-2">
                            {cert.issuer} • {cert.date}
                          </p>
                          <p className="text-sm text-foreground/50">
                            Credential ID: {cert.credential}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentPage === index
                      ? 'bg-primary w-4'
                      : 'bg-foreground/20'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Achievements</h3>
          <div className="flex justify-center items-center min-h-[200px] text-foreground/50">
            <p className="text-lg">No achievements listed yet</p>
          </div>
        </div>
      </div>
    </section>
  );
} 