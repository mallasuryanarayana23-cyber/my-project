import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-display text-lg font-bold text-primary-foreground">
              S
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-foreground">
              SkillMap
            </span>
          </Link>
        </div>

        <div className="hidden md:flex md:items-center md:gap-8">
          <Link href="/find-workers" className="text-sm font-medium text-muted hover:text-primary transition-colors">
            Find Workers
          </Link>
          <Link href="/admin/dashboard" className="text-sm font-medium text-muted hover:text-primary transition-colors">
            Admin Panel
          </Link>
          <Link href="/how-it-works" className="text-sm font-medium text-muted hover:text-primary transition-colors">
            How it Works
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            Login
          </Link>
          <Link
            href="/worker/onboarding"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Join as Worker
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
