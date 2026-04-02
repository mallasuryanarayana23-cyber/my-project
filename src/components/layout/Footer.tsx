import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-background py-12 px-6 lg:px-8 mt-auto">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-display text-lg font-bold text-primary-foreground">
              S
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-foreground">
              SkillMap
            </span>
          </div>
          <p className="text-sm text-muted max-w-xs">
            Connecting India's MSMEs with verified local talent through video verification and GPS search.
          </p>
        </div>
        
        <div>
          <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Platform</h3>
          <ul className="space-y-2">
            <li><Link href="/find-workers" className="text-sm text-muted hover:text-primary transition-colors">Find Workers</Link></li>
            <li><Link href="/how-it-works" className="text-sm text-muted hover:text-primary transition-colors">How it Works</Link></li>
            <li><Link href="/join" className="text-sm text-muted hover:text-primary transition-colors">Join as Worker</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-sm text-muted hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/privacy" className="text-sm text-muted hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-sm text-muted hover:text-primary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Connect</h3>
          <ul className="space-y-2">
            <li><Link href="https://twitter.com/skillmap" className="text-sm text-muted hover:text-primary transition-colors">Twitter (X)</Link></li>
            <li><Link href="https://linkedin.com/company/skillmap" className="text-sm text-muted hover:text-primary transition-colors">LinkedIn</Link></li>
            <li><Link href="mailto:support@skillmap.in" className="text-sm text-muted hover:text-primary transition-colors">Support Email</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted">© 2026 SkillMap Technologies Pvt. Ltd. All rights reserved.</p>
        <div className="flex gap-4">
            <span className="flex items-center gap-1 text-xs text-muted">
                Made with ❤️ for Indian MSMEs
            </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
