import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { icon: '🎬', title: 'Personalized Picks', desc: 'Smart suggestions that match your mood.' },
  { icon: '💬', title: 'Friends & Celebs’ Favorites', desc: 'See what your circle and icons are loving.' },
  { icon: '🔥', title: 'No More Endless Scrolling', desc: 'Decide in seconds. Watch more, scroll less.' },
];

const WhySection = () => {
  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(700px 300px at 20% 50%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(700px 300px at 80% 30%, rgba(168,85,247,0.15), transparent 60%)'
      }} />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Why Scrolop?</h2>
          <p className="mt-3 text-white/70">Modern, futuristic, and fun — built for the way you watch.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="text-3xl">{item.icon}</div>
              <div className="mt-4 text-lg font-medium">{item.title}</div>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
