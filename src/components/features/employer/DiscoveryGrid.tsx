'use client';

import React, { useState, useEffect } from 'react';
import WorkerCard from './WorkerCard';
import { Search, MapPin, SlidersHorizontal, Radar, Loader2 } from 'lucide-react';

const DiscoveryGrid = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchSkill, setSearchSkill] = useState('');

  // Fetch workers from the real PostGIS-powered API
  const fetchWorkers = async (skill?: string) => {
    setLoading(true);
    try {
      const url = new URL('/api/discovery/search', window.location.origin);
      if (skill) url.searchParams.set('skill', skill);
      
      const res = await fetch(url.toString());
      const json = await res.json();
      
      if (json.success) {
        setWorkers(json.data.workers);
      }
    } catch (err) {
      console.error('Failed to fetch workers:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkers();
  }, []);

  return (
    <div className="w-full">
      {/* Premium Search Header */}
      <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 transition-all duration-300">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            <div className="relative flex-1 group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                <Search className="h-5 w-5" />
              </div>
              <input
                type="text"
                placeholder="Search by skill (Welder, Plumber, Driver...)"
                className="block w-full pl-12 pr-4 h-14 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold placeholder:text-slate-400 text-slate-900"
                value={searchSkill}
                onChange={(e) => setSearchSkill(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && fetchWorkers(searchSkill)}
              />
            </div>
            
            <div className="flex gap-2">
              <button className="flex items-center gap-3 px-6 h-14 bg-slate-50 border-2 border-slate-100 rounded-2xl font-black text-slate-600 hover:bg-slate-100 transition-all">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Okhla, Delhi</span>
              </button>
              <button className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                <SlidersHorizontal className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="container mx-auto px-6 py-12">
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-6">
            <div className="relative">
              <Radar className="h-24 w-24 text-primary/10 animate-spin-slow" />
              <Loader2 className="h-10 w-10 text-primary animate-spin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <p className="text-xl font-black text-slate-400 tracking-tight">Scanning Okhla Hub...</p>
          </div>
        ) : workers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {workers.map((worker: any) => (
              <WorkerCard key={worker.id} worker={worker} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center max-w-md mx-auto">
             <div className="h-24 w-24 bg-slate-50 rounded-[2.5rem] flex items-center justify-center mb-6 border-2 border-dashed border-slate-200">
                <Search className="h-10 w-10 text-slate-300" />
             </div>
             <h3 className="text-2xl font-black text-slate-900 mb-2">No Verified Workers Found</h3>
             <p className="text-slate-500 font-bold leading-relaxed">
               Try expanding your search radius or checking different skill categories within your industrial hub.
             </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscoveryGrid;
