'use client';

import React, { useState } from 'react';
import WorkerCard from './WorkerCard';
import { Search, MapPin, Filter, Map, List, Compass } from 'lucide-react';
import Button from '@/components/ui/Button';

const mockWorkers = [
  { id: 1, name: 'Rahul Sharma', skill: 'Welder', distance: '1.2 km', rating: 4.8, reviews: 24, isVerified: true },
  { id: 2, name: 'Amit Kumar', skill: 'Electrician', distance: '2.5 km', rating: 4.6, reviews: 18, isVerified: true },
  { id: 3, name: 'Sandeep Singh', skill: 'CNC Operator', distance: '3.1 km', rating: 4.9, reviews: 32, isVerified: false },
  { id: 4, name: 'Vikas Patel', skill: 'Plumber', distance: '4.0 km', rating: 4.5, reviews: 12, isVerified: true },
  { id: 5, name: 'Deepak Verma', skill: 'Fabricator', distance: '4.8 km', rating: 4.7, reviews: 21, isVerified: true },
  { id: 6, name: 'Ajay Yadav', skill: 'Mechanic', distance: '5.2 km', rating: 4.3, reviews: 15, isVerified: true },
];

const DiscoveryGrid = () => {
  const [view, setView] = useState<'grid' | 'map'>('grid');
  const [search, setSearch] = useState('');

  return (
    <div className="w-full bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <header className="mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight mb-6">Find <span className="text-primary italic">Verified</span> Talent Near You.</h1>
            
            <div className="flex flex-col md:flex-row gap-4 items-center bg-white p-4 rounded-3xl border border-border shadow-2xl">
                <div className="flex-1 w-full relative group">
                    <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted group-focus-within:text-primary transition-colors" />
                    <input 
                        type="text" 
                        placeholder="Search by skill (e.g. Welder, CNC Operator)" 
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                
                <div className="w-full md:w-64 relative group border-l border-border pl-4 hidden md:block">
                    <MapPin className="absolute left-4 top-3.5 h-5 w-5 text-primary" />
                    <input 
                        type="text" 
                        placeholder="Location" 
                        className="w-full pl-12 pr-4 py-3 bg-transparent font-bold focus:outline-none"
                        defaultValue="Gurgaon sector 18"
                    />
                </div>

                <Button size="lg" className="w-full md:w-auto px-10 rounded-2xl shadow-lg hover:translate-y-[-2px]">
                    <Compass className="h-5 w-5 mr-2" /> Search My Local Radius
                </Button>
            </div>
        </header>

        <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-muted uppercase tracking-widest">
                    Showing {mockWorkers.length} results
                </span>
            </div>
            
            <div className="flex items-center bg-white rounded-xl border border-border p-1 shadow-sm">
                <button 
                  onClick={() => setView('grid')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${view === 'grid' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted hover:bg-slate-50'}`}
                >
                    <List className="h-4 w-4" /> List
                </button>
                <button 
                  onClick={() => setView('map')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${view === 'map' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted hover:bg-slate-50'}`}
                >
                    <Map className="h-4 w-4" /> Map View
                </button>
            </div>
        </div>

        {view === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {mockWorkers.map((worker) => (
                    <WorkerCard key={worker.id} worker={worker} />
                ))}
            </div>
        ) : (
            <div className="bg-white rounded-3xl aspect-[16/9] flex items-center justify-center border border-border shadow-2xl relative overflow-hidden">
                <div className="text-center relative z-10">
                    <div className="h-20 w-20 rounded-full border-4 border-primary border-t-transparent animate-spin mx-auto mb-6" />
                    <h3 className="text-xl font-bold">Scanning Local Suburb...</h3>
                    <p className="text-muted">Loading GPS coordinates for verified workers.</p>
                </div>
                {/* Simulated Radar Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--border)_1px,_transparent_1px)] bg-[size:40px_40px] opacity-20" />
            </div>
        )}
      </div>
    </div>
  );
};

export default DiscoveryGrid;
