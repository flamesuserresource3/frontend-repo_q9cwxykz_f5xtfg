import React from 'react';
import { motion } from 'framer-motion';

const PreviewSection = () => {
  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(800px 300px at 50% 10%, rgba(147,51,234,0.15), transparent 60%)'
      }} />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Sneak peek</h2>
          <p className="text-sm text-white/60">A sleek feed that learns your vibe.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-3 shadow-[0_0_40px_rgba(99,102,241,0.15)]"
        >
          {/* Placeholder mock feed image */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=2000&auto=format&fit=crop"
              alt="Mock movie recommendation feed"
              className="h-[420px] w-full object-cover opacity-90"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PreviewSection;
