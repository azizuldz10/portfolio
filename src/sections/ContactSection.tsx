'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log(formData);
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-foreground/70">Let's work together!</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-primary outline-none"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-primary outline-none"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-primary outline-none"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
} 