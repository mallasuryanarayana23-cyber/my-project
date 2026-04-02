'use client';

import React from 'react';
import { ShieldCheck, MapPin, Star, Play, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';

interface WorkerCardProps {
  worker: {
    id: number;
    name: string;
    skill: string;
    distance: string;
    rating: number;
    reviews: number;
    isVerified: boolean;
    image?: string;
  };
}

const WorkerCard: React.FC<WorkerCardProps> = ({ worker }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-background transition-all hover:shadow-xl hover:-translate-y-1">
      {/* Video Preview / Image Placeholder */}
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
        {worker.isVerified && (
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-bold text-white shadow-lg">
            <ShieldCheck className="h-3.5 w-3.5" /> VERIFIED
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/20 transition-all cursor-pointer">
          <div className="h-12 w-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <Play className="h-5 w-5 text-primary fill-primary ml-1" />
          </div>
        </div>
        {/* Placeholder image */}
        <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400">
          <span className="text-xs font-bold uppercase tracking-widest">{worker.skill} Profile</span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-display text-lg font-bold leading-none mb-1">{worker.name}</h3>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">{worker.skill}</p>
          </div>
          <div className="flex items-center gap-1 text-sm font-bold text-amber-500">
            <Star className="h-4 w-4 fill-amber-500" /> {worker.rating}
          </div>
        </div>

        <div className="flex items-center justify-between text-muted text-sm mb-6">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" /> {worker.distance} away
          </div>
          <div className="text-xs italic">{worker.reviews} reviews</div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1 font-bold">
            View Video
          </Button>
          <Button variant="primary" size="sm" className="flex-1 font-bold bg-primary group-hover:bg-primary/90">
             <Phone className="h-3.5 w-3.5 mr-2" /> Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkerCard;
