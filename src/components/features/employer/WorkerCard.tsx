'use client';

import React from 'react';
import { ShieldCheck, MapPin, Star, Play, Phone, ArrowUpRight } from 'lucide-react';
import Button from '@/components/ui/Button';

interface WorkerCardProps {
  worker: {
    id: string;
    name: string;
    skills: string[];
    distance: string;
    rating: number;
    reviewCount: number;
    status: 'VERIFIED' | 'PENDING' | 'REJECTED' | 'REVIEWING';
    videoUrl?: string;
  };
}

const WorkerCard: React.FC<WorkerCardProps> = ({ worker }) => {
  const isVerified = worker.status === 'VERIFIED';
  
  return (
    <div className={`group relative flex flex-col rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${
      isVerified 
        ? 'border-success/20 bg-white hover:border-success/40 hover:shadow-[0_12px_45px_rgba(16,185,129,0.12)] shadow-sm' 
        : 'border-border/60 bg-white/50 hover:shadow-[0_12px_45px_rgba(79,70,229,0.08)]'
    }`}>
      {/* Video Preview Hub */}
      <div className="relative aspect-[4/5] overflow-hidden m-2 rounded-[2rem]">
        {/* Verification Badge - Glassmorphic */}
        {isVerified && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full bg-success/90 px-4 py-2 text-[10px] font-black text-white shadow-xl backdrop-blur-md animate-in slide-in-from-left-4 duration-500">
            <ShieldCheck className="h-4 w-4 fill-white/20" /> V-TRUST VERIFIED
          </div>
        )}
        
        {/* Play Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-700 cursor-pointer">
          <div className="h-16 w-16 rounded-full bg-white/95 shadow-2xl flex items-center justify-center scale-75 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500">
            <Play className="h-6 w-6 text-primary fill-primary ml-1" />
          </div>
        </div>

        {/* Dynamic Gradient Background for Skills */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-0"></div>
        <div className="absolute bottom-4 left-4 z-10">
          <div className="flex flex-wrap gap-1.5">
            {worker.skills.slice(0, 2).map((skill, i) => (
              <span key={i} className="text-[10px] font-black uppercase tracking-tight px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-md text-white border border-white/10">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Media Placeholder */}
        <div className="w-full h-full bg-slate-100 flex items-center justify-center overflow-hidden">
           <img 
            src={`https://i.pravatar.cc/400?u=${worker.id}`} 
            alt={worker.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
           />
        </div>
      </div>

      <div className="p-8 pt-6">
        <div className="flex items-start justify-between mb-4">
          <div className="max-w-[70%]">
            <h3 className="font-display text-2xl font-black text-foreground mb-1 tracking-tight group-hover:text-primary transition-colors line-clamp-1">{worker.name}</h3>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold leading-none">{worker.distance} away</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1 text-sm font-black text-warning bg-warning/5 px-2.5 py-1 rounded-full border border-warning/10">
              <Star className="h-4 w-4 fill-warning" /> {worker.rating}
            </div>
            <span className="text-[10px] font-bold text-muted-foreground mt-1 uppercase tracking-widest">{worker.reviewCount} Reviews</span>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-8">
          <Button variant="outline" className="flex-1 rounded-full h-12 text-xs font-black tracking-tight border-border/50 hover:bg-slate-50">
            VIEW VIDEO
          </Button>
          <Button size="lg" className="flex-1 rounded-full h-12 text-xs font-black tracking-tight shadow-xl shadow-primary/20 group/btn">
             <Phone className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" /> HIRE NOW
             <ArrowUpRight className="h-4 w-4 ml-1 opacity-0 -translate-y-1 group-hover/btn:opacity-100 group-hover/btn:translate-y-0 transition-all" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkerCard;

