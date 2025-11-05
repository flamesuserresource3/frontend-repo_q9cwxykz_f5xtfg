import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = ({ onJoin }) => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D scene as background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for cinematic vibe */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(600px 300px at 70% 20%, rgba(168, 85, 247, 0.25), transparent 60%), radial-gradient(400px 200px at 30% 70%, rgba(59, 130, 246, 0.18), transparent 60%)'
      }} />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-6xl"
        >
          Stop the scroll, let the story roll.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-5 text-lg text-white/80 sm:text-xl"
        >
          Tired of wasting time deciding what to watch?
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-white/70"
        >
          Scrolop helps you find what to watch — faster, smarter, and based on your vibe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <button
            onClick={onJoin}
            className="group relative inline-flex items-center justify-center rounded-full bg-purple-600 px-7 py-3 font-medium text-white shadow-[0_0_25px_rgba(168,85,247,0.45)] transition hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(168,85,247,0.6)]"
          >
            <span className="relative z-10">Join Waitlist</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60" />
          </button>
          <div className="text-sm text-white/60">Be the first to try Scrolop.</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
