'use client';

import React, { useState } from 'react';
import { Globe, Check } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Button from '@/components/ui/Button';

const languages = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు' }
];

export default function LanguageToggle() {
  const [currentLang, setCurrentLang] = useState(languages[0]);

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="rounded-full px-4 py-2 border-border/50 bg-white/50 backdrop-blur-sm hover:bg-white transition-all shadow-sm flex items-center gap-2">
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold uppercase tracking-tight">{currentLang.code}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 p-2 rounded-2xl border-border/50 bg-white/90 backdrop-blur-xl shadow-2xl animate-in fade-in zoom-in duration-200">
          <div className="px-2 py-1.5 mb-1">
             <p className="text-[10px] font-extrabold uppercase tracking-widest text-muted">Select Language</p>
          </div>
          {languages.map((lang) => (
            <DropdownMenuItem 
              key={lang.code}
              onClick={() => setCurrentLang(lang)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer hover:bg-primary/5 transition-colors group"
            >
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground">{lang.label}</span>
                <span className="text-[10px] font-medium text-muted group-hover:text-primary transition-colors">{lang.native}</span>
              </div>
              {currentLang.code === lang.code && (
                <Check className="h-4 w-4 text-primary animate-in zoom-in duration-300" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
