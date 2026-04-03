'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import { ShieldCheck, XCircle, Play, CheckCircle2, User, MapPin, Calendar, Clock, Loader2, AlertCircle } from 'lucide-react';

const AdminVerificationPanel = () => {
  const [pendingWorkers, setPendingWorkers] = useState([]);
  const [selectedWorker, setSelectedWorker] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);

  // Mock fetch for pending workers
  useEffect(() => {
    const timer = setTimeout(() => {
      setPendingWorkers([
        { id: '1', name: 'Suresh Kumar', skill: 'Heavy Welder', location: 'Okhla Hub, Delhi', date: '2024-03-28', videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
        { id: '2', name: 'Amit Singh', skill: 'Industrial Electrician', location: 'Noida Sec 62', date: '2024-03-29', videoUrl: '#' },
        { id: '3', name: 'Rahul V.', skill: 'Forklift Operator', location: 'Gurgaon Phase 5', date: '2024-03-29', videoUrl: '#' },
      ] as any);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleVerify = async (id: string, status: 'VERIFIED' | 'REJECTED') => {
    setProcessing(true);
    try {
      const res = await fetch(`/api/admin/verify/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, adminNotes: 'Verified via V-Trust Video Audit' })
      });
      if (res.ok) {
        setPendingWorkers(prev => prev.filter((w: any) => w.id !== id));
        setSelectedWorker(null);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 selection:bg-primary/20 text-slate-100">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-24 h-[calc(100vh-80px)] flex gap-8">
        {/* Queue Sidebar */}
        <div className="w-1/3 bg-slate-800/50 rounded-[2.5rem] border border-white/5 flex flex-col overflow-hidden">
          <div className="p-8 border-b border-white/5 flex items-center justify-between">
            <h2 className="text-xl font-black tracking-tight">Audit Queue</h2>
            <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
              {pendingWorkers.length} Pending
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-slate-500">
                <Loader2 className="h-8 w-8 animate-spin" />
                <p className="text-xs font-black uppercase tracking-widest">Loading Records...</p>
              </div>
            ) : pendingWorkers.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center p-8">
                    <CheckCircle2 className="h-12 w-12 text-emerald-500/50 mb-4" />
                    <p className="text-sm font-bold text-slate-400">All workers verified! <br />Queue is empty.</p>
                </div>
            ) : pendingWorkers.map((worker: any) => (
              <button
                key={worker.id}
                onClick={() => setSelectedWorker(worker)}
                className={`w-full text-left p-6 rounded-3xl transition-all border ${
                  selectedWorker?.id === worker.id 
                    ? 'bg-primary border-primary shadow-xl shadow-primary/20' 
                    : 'bg-white/5 border-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                   <p className="font-black truncate max-w-[150px]">{worker.name}</p>
                   <p className="text-[10px] opacity-60 font-bold">{worker.date}</p>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-80">
                  <ShieldCheck className="h-3 w-3" /> {worker.skill}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Audit Terminal */}
        <div className="flex-1 bg-slate-800/50 rounded-[2.5rem] border border-white/5 relative overflow-hidden flex flex-col">
          {selectedWorker ? (
            <>
              {/* Video Player Section */}
              <div className="aspect-video bg-black relative group overflow-hidden">
                <video 
                  src={selectedWorker.videoUrl} 
                  controls 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-widest">
                   <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                   V-TRUST RAW FEED
                </div>
              </div>

              {/* Quality Controls */}
              <div className="flex-1 p-10 overflow-y-auto">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h1 className="text-4xl font-black tracking-tighter mb-2">{selectedWorker.name}</h1>
                    <div className="flex items-center gap-6 text-slate-400">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                        <MapPin className="h-4 w-4" /> {selectedWorker.location}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                        <User className="h-4 w-4" /> {selectedWorker.skill}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button 
                      disabled={processing}
                      onClick={() => handleVerify(selectedWorker.id, 'REJECTED')}
                      className="h-16 px-8 rounded-2xl bg-red-500/10 text-red-500 border border-red-500/20 font-black hover:bg-red-500 hover:text-white transition-all flex items-center gap-3 disabled:opacity-50"
                    >
                      <XCircle className="h-6 w-6" /> REJECT
                    </button>
                    <button 
                      disabled={processing}
                      onClick={() => handleVerify(selectedWorker.id, 'VERIFIED')}
                      className="h-16 px-8 rounded-2xl bg-emerald-500 text-white font-black hover:bg-emerald-600 shadow-xl shadow-emerald-500/20 transition-all flex items-center gap-3 disabled:opacity-50"
                    >
                      {processing ? <Loader2 className="h-6 w-6 animate-spin" /> : <ShieldCheck className="h-6 w-6" />}
                      APPROVE BADGE
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-12">
                   <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Video Match</p>
                      <p className="text-lg font-black text-emerald-400">98.2% Accuracy</p>
                   </div>
                   <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">GPS Verification</p>
                      <p className="text-lg font-black text-emerald-400">Hub Match: TRUE</p>
                   </div>
                   <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Audio Clarity</p>
                      <p className="text-lg font-black text-amber-400">Grade: B+</p>
                   </div>
                </div>

                <div className="bg-slate-900/50 rounded-3xl p-6 border border-white/5 text-slate-400">
                    <div className="flex items-center gap-3 mb-4 text-white font-black uppercase tracking-widest text-xs">
                        <AlertCircle className="h-4 w-4 text-primary" /> Auditor Guidelines
                    </div>
                    <ul className="text-xs font-bold space-y-2 list-disc pl-4 opacity-80 leading-relaxed">
                        <li>Ensure worker clearly states their name and skill in the video.</li>
                        <li>Verify that the background matches the reported industrial location.</li>
                        <li>Check for basic safety equipment (shoes, uniform) if required for the skill.</li>
                        <li>The V-Trust badge is a legal guarantee to employers. Audit carefully.</li>
                    </ul>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full gap-6 text-slate-500">
               <div className="h-32 w-32 rounded-full border-4 border-dashed border-slate-700 flex items-center justify-center">
                  <Play className="h-12 w-12 opacity-20" />
               </div>
               <div className="text-center">
                  <h3 className="text-2xl font-black text-slate-400 tracking-tight mb-2">Terminal Standby</h3>
                  <p className="text-sm font-bold text-slate-600">Select a worker from the queue to start <br />the V-Trust video audit.</p>
               </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminVerificationPanel;
