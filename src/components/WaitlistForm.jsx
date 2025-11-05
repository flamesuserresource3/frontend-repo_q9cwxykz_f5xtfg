import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Backdrop = ({ onClose }) => (
  <motion.button
    aria-label="Close"
    onClick={onClose}
    className="fixed inset-0 z-40 bg-black/60"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  />
);

const WaitlistForm = ({ open, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate a quick submit
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <Backdrop onClose={onClose} />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 240, damping: 22 }}
              className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-6 text-white shadow-[0_0_60px_rgba(168,85,247,0.25)]"
            >
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-600/30 via-fuchsia-500/20 to-blue-500/30 blur-xl" />

              {!submitted ? (
                <form onSubmit={handleSubmit} className="relative z-10">
                  <h3 className="text-xl font-semibold">Join the Scrolop waitlist</h3>
                  <p className="mt-1 text-sm text-white/70">Be the first to try Scrolop.</p>

                  <div className="mt-5 space-y-4">
                    <div>
                      <label className="mb-1 block text-sm text-white/80">Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Smith"
                        className="w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 py-2 text-white placeholder-white/40 outline-none ring-0 focus:border-purple-500/60"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm text-white/80">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 py-2 text-white placeholder-white/40 outline-none ring-0 focus:border-purple-500/60"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm text-white/80">What do you watch most?</label>
                      <select
                        className="w-full rounded-lg border border-white/10 bg-zinc-950/70 px-3 py-2 text-white outline-none focus:border-purple-500/60"
                        defaultValue="movies"
                      >
                        <option value="movies">Movies</option>
                        <option value="tv">TV Shows</option>
                        <option value="anime">Anime</option>
                        <option value="documentaries">Documentaries</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative inline-flex flex-1 items-center justify-center rounded-lg bg-purple-600 px-4 py-2 font-medium text-white shadow-[0_0_25px_rgba(168,85,247,0.45)] transition hover:shadow-[0_0_45px_rgba(168,85,247,0.6)] disabled:opacity-60"
                    >
                      <span className="relative z-10">{loading ? 'Submitting…' : 'Join Waitlist'}</span>
                      <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-500 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-60" />
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/70 hover:text-white"
                    >
                      Close
                    </button>
                  </div>
                </form>
              ) : (
                <div className="relative z-10 text-center">
                  <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 shadow-[0_0_35px_rgba(99,102,241,0.5)]" />
                  <h3 className="text-xl font-semibold">You’re on the list! 🎉</h3>
                  <p className="mt-2 text-white/70">We’ll email you as soon as Scrolop is ready.</p>
                  <button
                    onClick={onClose}
                    className="mt-5 rounded-lg border border-white/10 px-4 py-2 text-sm text-white/80 hover:text-white"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WaitlistForm;
