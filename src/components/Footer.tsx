export default function Footer() {
  return (
    <footer className="relative py-8 bg-background border-t border-foreground/10 mt-auto">
      <div className="container mx-auto px-6 text-center">
        <p className="text-foreground/70">
          © {new Date().getFullYear()} DzDev. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/azizuldz10" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            GitHub
          </a>
          {/* Add other social links */}
        </div>
      </div>
    </footer>
  );
} 