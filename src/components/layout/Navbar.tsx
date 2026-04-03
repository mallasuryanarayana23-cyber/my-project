import React from 'react';
import Link from 'next/link';
import LanguageToggle from '@/components/ui/LanguageToggle';

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-[1400px] px-4 md:px-8">
      <div className="flex h-20 items-center justify-between rounded-[2.5rem] border border-white/30 bg-white/60 px-8 py-2 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] transition-all hover:bg-white/70">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary font-display text-xl font-black text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
              S
            </div>
            <span className="font-display text-2xl font-black tracking-tight text-foreground transition-colors group-hover:text-primary">
              SkillMap
            </span>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-10">
            <Link href="/find-workers" className="text-sm font-bold text-muted hover:text-primary transition-all hover:underline decoration-primary decoration-2 underline-offset-4">
              Find Workers
            </Link>
            <Link href="/admin/dashboard" className="text-sm font-bold text-muted hover:text-primary transition-all hover:underline decoration-primary decoration-2 underline-offset-4">
              Admin Panel
            </Link>
            <Link href="/how-it-works" className="text-sm font-bold text-muted hover:text-primary transition-all hover:underline decoration-primary decoration-2 underline-offset-4">
              How it Works
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>
          
          <div className="h-8 w-[1px] bg-border/50 hidden sm:block"></div>

          <Link 
            href="/login" 
            className="text-sm font-bold text-foreground hover:text-primary transition-colors px-4 py-2"
          >
            Login
          </Link>
          <Link
            href="/worker/onboarding"
            className="rounded-full bg-primary px-8 py-3 text-sm font-black text-white shadow-xl shadow-primary/30 hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all focus:outline-none ring-offset-2 focus:ring-2 ring-primary"
          >
            JOIN AS WORKER
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

