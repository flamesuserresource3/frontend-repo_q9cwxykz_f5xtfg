import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-black py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="text-white/70">© {new Date().getFullYear()} Scrolop</div>
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-2 text-white/80 transition hover:scale-105 hover:text-white"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-2 text-white/80 transition hover:scale-105 hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
