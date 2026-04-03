'use client';

import React, { useState } from 'react';
import { Camera, Mic, CheckCircle2, ChevronRight, Briefcase, MapPin, User, Star } from 'lucide-react';
import Button from '@/components/ui/Button';

const VisualProfileBuilder = () => {
  const [step, setStep] = useState(1);
  const [selectedSkill, setSelectedSkill] = useState('');

  const skills = [
    { id: 'welder', name: 'Welder', icon: '🔥', description: 'Welding and metal fabrication' },
    { id: 'electrician', name: 'Electrician', icon: '⚡', description: 'Wiring and industrial electricals' },
    { id: 'fitter', name: 'Fitter', icon: '🔧', description: 'Mechanical fitting and assembly' },
    { id: 'operator', name: 'Operator', icon: '⚙️', description: 'CNC and lathe machine operation' },
  ];

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-[2.5rem] border border-border shadow-2xl relative overflow-hidden">
      {/* Voice Assistant Visualizer */}
      <div className="absolute top-6 right-6 flex items-center gap-1">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`w-1 bg-primary rounded-full transition-all duration-300 ${step === 1 ? 'h-4 animate-pulse' : 'h-2'}`} style={{ animationDelay: `${i * 150}ms` }} />
        ))}
        <Mic className="h-4 w-4 text-primary ml-2" />
      </div>

      {step === 1 && (
        <div className="space-y-8 animate-in slide-in-from-right-10 duration-500">
          <div>
            <h2 className="text-3xl font-black tracking-tighter mb-2">What is your <br />main skill?</h2>
            <p className="text-sm font-bold text-muted-foreground">Select one to get higher paying jobs.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <button
                key={skill.id}
                onClick={() => setSelectedSkill(skill.id)}
                className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-3 active:scale-95 ${
                  selectedSkill === skill.id 
                    ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10' 
                    : 'border-slate-100 hover:border-slate-200'
                }`}
              >
                <span className="text-4xl">{skill.icon}</span>
                <span className="text-sm font-black uppercase tracking-widest">{skill.name}</span>
              </button>
            ))}
          </div>

          <Button 
            disabled={!selectedSkill}
            onClick={() => setStep(2)}
            className="w-full h-16 rounded-full font-black text-lg gap-3"
          >
            NEXT STEP <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-8 animate-in slide-in-from-right-10 duration-500">
          <div>
            <h2 className="text-3xl font-black tracking-tighter mb-2">Show your work <br />on video</h2>
            <p className="text-sm font-bold text-muted-foreground">This helps employers trust you immediately.</p>
          </div>

          <div className="aspect-[4/5] bg-slate-50 rounded-[2.5rem] border-4 border-dashed border-slate-200 flex flex-col items-center justify-center p-12 text-center group cursor-pointer hover:bg-slate-100 transition-all">
             <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Camera className="h-10 w-10 text-primary" />
             </div>
             <p className="text-lg font-black text-slate-900 mb-2">Record 15 Seconds</p>
             <p className="text-xs font-bold text-slate-500 leading-relaxed">
                Hold your phone and show <br />your tools or worksite.
             </p>
          </div>

          <div className="flex gap-4">
             <Button variant="ghost" onClick={() => setStep(1)} className="h-16 flex-1 rounded-full font-black border-2 border-slate-100">
               GO BACK
             </Button>
             <Button onClick={() => setStep(3)} className="h-16 flex-[2] rounded-full font-black text-lg gap-3">
               USE THIS VIDEO <CheckCircle2 className="h-6 w-6" />
             </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-8 animate-in zoom-in-95 duration-500 text-center py-12">
           <div className="h-32 w-32 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-emerald-500/20">
              <CheckCircle2 className="h-16 w-16" />
           </div>
           
           <div>
              <h2 className="text-3xl font-black tracking-tighter mb-2">V-Trust Badge <br />Active!</h2>
              <p className="text-sm font-bold text-muted-foreground px-8 leading-relaxed">
                Our team is reviewing your video. <br />You'll appear in top searches soon.
              </p>
           </div>

           <div className="bg-slate-50 rounded-3xl p-6 text-left border border-slate-100">
              <div className="flex items-center gap-4 mb-4">
                 <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden" />
                 <div>
                    <p className="text-sm font-black tracking-tight">Rajesh Kumar</p>
                    <p className="text-[10px] font-black uppercase text-primary tracking-widest">{selectedSkill}</p>
                 </div>
              </div>
              <div className="flex gap-3">
                 <div className="flex items-center gap-1 text-[10px] font-black text-slate-500 bg-white px-2 py-1 rounded-md border">
                    <MapPin className="h-3 w-3" /> OKHLA HUB
                 </div>
                 <div className="flex items-center gap-1 text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
                    <Star className="h-3 w-3 fill-emerald-600" /> V-TRUST VERIFIED
                 </div>
              </div>
           </div>

           <Button onClick={() => window.location.href = '/worker/dashboard'} className="w-full h-16 rounded-full font-black text-lg">
             GO TO DASHBOARD
           </Button>
        </div>
      )}
    </div>
  );
};

export default VisualProfileBuilder;
