import React, { useState } from 'react';
import Hero from './components/Hero';
import PreviewSection from './components/PreviewSection';
import WhySection from './components/WhySection';
import Footer from './components/Footer';
import WaitlistForm from './components/WaitlistForm';

const App = () => {
  const [openWaitlist, setOpenWaitlist] = useState(false);

  return (
    <div className="min-h-screen w-full bg-black font-['Inter',system-ui,sans-serif]">
      <Hero onJoin={() => setOpenWaitlist(true)} />

      {/* Email signup inline */}
      <section className="relative bg-black py-10 text-white">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(600px 250px at 50% 0%, rgba(147,51,234,0.14), transparent 60%)'
        }} />
        <div className="relative mx-auto max-w-3xl px-6">
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 text-center sm:flex-row sm:text-left">
            <div className="flex-1">
              <div className="text-lg font-medium">Be the first to try Scrolop.</div>
              <p className="text-sm text-white/70">Sign up to get early access and exclusive updates.</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-full border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-purple-500/60 sm:w-72"
              />
              <button
                onClick={() => setOpenWaitlist(true)}
                className="group relative inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-3 text-sm font-medium text-white shadow-[0_0_25px_rgba(168,85,247,0.45)] transition hover:shadow-[0_0_45px_rgba(168,85,247,0.6)]"
              >
                <span className="relative z-10">Join Waitlist</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-500 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-60" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <PreviewSection />
      <WhySection />
      <Footer />

      <WaitlistForm open={openWaitlist} onClose={() => setOpenWaitlist(false)} />
    </div>
  );
};

export default App;
