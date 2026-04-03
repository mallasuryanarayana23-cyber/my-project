'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { Camera, ShieldCheck, Star, Briefcase, Settings, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

const WorkerDashboard = () => {
  // Placeholder state for worker details
  const worker = {
    name: 'Rajesh Kumar',
    status: 'VERIFIED',
    rating: 4.8,
    skill: 'Senior Welder',
    videoUploaded: true,
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary/20">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-24 max-w-2xl">
        {/* Profile Card - Premium Industrial */}
        <div className="relative overflow-hidden bg-white rounded-[2.5rem] border border-border/60 shadow-2xl p-8 mb-8 group">
          <div className="absolute top-0 right-0 p-6">
             {worker.status === 'VERIFIED' ? (
               <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest shadow-xl shadow-success/20 animate-in zoom-in-50 duration-500">
                  <ShieldCheck className="h-4 w-4" /> V-TRUST ACTIVE
               </div>
             ) : (
               <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest">
                  REVIEWING PROFILE
               </div>
             )}
          </div>

          <div className="flex items-center gap-6 mb-8">
            <div className="relative">
              <div className="h-24 w-24 rounded-[2rem] bg-slate-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-xl">
                 <img src="https://i.pravatar.cc/150?u=rajesh" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <button className="absolute -bottom-2 -right-2 h-10 w-10 rounded-full bg-primary text-white border-4 border-white shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            
            <div>
              <h1 className="text-3xl font-black tracking-tight text-foreground">{worker.name}</h1>
              <p className="text-sm font-bold text-primary uppercase tracking-widest mt-1">{worker.skill}</p>
              <div className="flex items-center gap-2 mt-2 text-amber-500 bg-amber-50 self-start px-3 py-1 rounded-full border border-amber-200">
                 <Star className="h-4 w-4 fill-amber-500" />
                 <span className="text-sm font-black">{worker.rating} Verified Rating</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 rounded-3xl bg-slate-50 border border-border/40">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Lifetime Jobs</p>
                <p className="text-2xl font-black text-foreground">142</p>
             </div>
             <div className="p-4 rounded-3xl bg-slate-50 border border-border/40">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Local Rank</p>
                <p className="text-2xl font-black text-foreground">#18</p>
             </div>
          </div>
        </div>

        {/* Action Hub */}
        <div className="space-y-4">
          <h2 className="text-xs font-black uppercase tracking-widest text-muted-foreground px-6 mb-4">Worker Gateway</h2>
          
          <button className="w-full flex items-center justify-between p-6 bg-white rounded-3xl border border-border/60 hover:border-primary/40 hover:shadow-xl transition-all group">
             <div className="flex items-center gap-4 text-left">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                   <Briefcase className="h-6 w-6" />
                </div>
                <div>
                   <p className="text-lg font-black text-foreground">Nearby Open Jobs</p>
                   <p className="text-xs font-bold text-muted-foreground">12 jobs within Okhla Industrial Hub</p>
                </div>
             </div>
             <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-2 transition-transform" />
          </button>

          <button className="w-full flex items-center justify-between p-6 bg-white rounded-3xl border border-border/60 hover:border-success/40 hover:shadow-xl transition-all group">
             <div className="flex items-center gap-4 text-left">
                <div className="h-12 w-12 rounded-2xl bg-success/10 flex items-center justify-center text-success group-hover:scale-110 transition-transform">
                   <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                   <p className="text-lg font-black text-foreground">V-Trust Verification</p>
                   <p className="text-xs font-bold text-success capitalize">Audited Video Active</p>
                </div>
             </div>
             <span className="px-3 py-1 bg-success/10 text-success text-[10px] font-black rounded-full uppercase">Update Verified Video</span>
          </button>

          <button className="w-full flex items-center justify-between p-6 bg-white rounded-3xl border border-border/60 hover:border-slate-400 hover:shadow-xl transition-all group opacity-60">
             <div className="flex items-center gap-4 text-left">
                <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:scale-110 transition-transform">
                   <Settings className="h-6 w-6" />
                </div>
                <div>
                   <p className="text-lg font-black text-foreground">Account Settings</p>
                   <p className="text-xs font-bold text-muted-foreground">Privacy, GPS, & Notifications</p>
                </div>
             </div>
             <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Support Section */}
        <div className="mt-12 p-8 bg-primary rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden">
           <div className="absolute -top-12 -right-12 h-32 w-32 bg-white/10 rounded-full blur-3xl opacity-50" />
           <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-80">Help & Support</p>
           <h3 className="text-2xl font-black mb-4">Need help finding <br />more work?</h3>
           <p className="text-sm font-bold opacity-80 leading-relaxed max-w-[80%] mb-12">
             Our worker support team is available 24/7 in Telugu, Hindi, and English. Speak to an advisor.
           </p>
           <Button className="bg-white text-primary font-black px-10 rounded-full hover:bg-slate-50 border-none h-12 shadow-xl shadow-black/10">
              CALL SUPPORT NOW
           </Button>
        </div>
      </main>
    </div>
  );
};

export default WorkerDashboard;
