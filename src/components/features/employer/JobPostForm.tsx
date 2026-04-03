'use client';

import React, { useState } from 'react';
import { Briefcase, MapPin, Calculator, Send, AlertCircle, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';

const JobPostForm = () => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        title: '',
        skill: '',
        salary: '',
        description: '',
    });

    const handleSubmit = async () => {
        setLoading(true);
        // Simulate API call to /api/employer/jobs
        setTimeout(() => {
            setLoading(false);
            setStep(4);
        }, 1500);
    };

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-[3rem] border border-slate-200 shadow-2xl relative overflow-hidden">
            {/* Header */}
            <div className="p-10 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div>
                   <h2 className="text-2xl font-black text-slate-900 tracking-tight">Post Local Job</h2>
                   <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">Hire Verified Workers Instantly</p>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                   <Sparkles className="h-6 w-6" />
                </div>
            </div>

            <div className="p-10">
                {step === 1 && (
                    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-2">Job Role</label>
                           <input 
                             placeholder="e.g. Senior Welder, CNC Operator"
                             className="w-full h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 px-6 font-bold text-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                             value={form.title}
                             onChange={(e) => setForm({...form, title: e.target.value})}
                           />
                        </div>

                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-2">Core Skill Required</label>
                           <select 
                             className="w-full h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 px-6 font-bold text-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all appearance-none"
                             value={form.skill}
                             onChange={(e) => setForm({...form, skill: e.target.value})}
                           >
                              <option value="">Select Primary Skill</option>
                              <option value="WELDER">Welder</option>
                              <option value="ELECTRICIAN">Electrician</option>
                              <option value="FITTER">Fitter</option>
                              <option value="OPERATOR">Operator</option>
                           </select>
                        </div>

                        <Button 
                          disabled={!form.title || !form.skill}
                          onClick={() => setStep(2)}
                          className="w-full h-16 rounded-2xl font-black text-lg mt-4"
                        >
                           CONTINUE TO LOCATION
                        </Button>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-6 animate-in slide-in-from-right-10 duration-300">
                        <div className="aspect-video bg-slate-100 rounded-3xl border-2 border-slate-200 flex flex-col items-center justify-center relative overflow-hidden group">
                           <MapPin className="h-10 w-10 text-primary mb-2 group-hover:scale-110 transition-transform" />
                           <p className="text-sm font-black text-slate-900">Okhla Industrial Hub</p>
                           <p className="text-[10px] font-bold text-slate-500">Auto-detected from your GPS</p>
                           <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-2">Salary Estimate (Monthly)</label>
                           <div className="relative">
                              <Calculator className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                              <input 
                                placeholder="e.g. ₹25,000 - ₹35,000"
                                className="w-full h-16 rounded-2xl bg-slate-50 border-2 border-slate-100 pl-16 pr-6 font-bold text-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                value={form.salary}
                                onChange={(e) => setForm({...form, salary: e.target.value})}
                              />
                           </div>
                        </div>

                        <div className="flex gap-4">
                           <Button variant="ghost" onClick={() => setStep(1)} className="h-16 flex-1 rounded-2xl font-black border-2 border-slate-100">
                              BACK
                           </Button>
                           <Button onClick={() => setStep(3)} className="h-16 flex-[2] rounded-2xl font-black text-lg">
                              REVIEW POST
                           </Button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-6 animate-in slide-in-from-bottom-10 duration-300">
                        <div className="p-6 rounded-3xl bg-primary text-white space-y-4 shadow-xl shadow-primary/20">
                           <div className="flex justify-between items-start">
                              <div>
                                 <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Job Summary</p>
                                 <h3 className="text-2xl font-black">{form.title}</h3>
                              </div>
                              <Briefcase className="h-8 w-8 opacity-20" />
                           </div>
                           <div className="flex flex-wrap gap-2">
                               <div className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-black border border-white/20">{form.skill} REQUIRED</div>
                               <div className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-black border border-white/20">{form.salary}</div>
                               <div className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-black border border-white/20">OKHLA, DELHI</div>
                           </div>
                        </div>

                        <div className="p-6 rounded-3xl border-2 border-dashed border-slate-200 flex items-start gap-4">
                            <AlertCircle className="h-6 w-6 text-amber-500 mt-1" />
                            <p className="text-xs font-bold text-slate-500 leading-relaxed">
                               This job will be blasted to <span className="text-slate-900">420+ verified workers</span> within 5km of Okhla Hub. Only V-Trust badge holders can apply directly via video.
                            </p>
                        </div>

                        <div className="flex gap-4">
                           <Button variant="ghost" onClick={() => setStep(2)} className="h-16 flex-1 rounded-2xl font-black border-2 border-slate-100">
                              REFINE
                           </Button>
                           <Button onClick={handleSubmit} disabled={loading} className="h-16 flex-[2] rounded-2xl font-black text-lg gap-3">
                              {loading ? <Loader2 className="h-6 w-6 animate-spin" /> : <><Send className="h-5 w-5" /> BROADCAST NOW</>}
                           </Button>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-500">
                       <div className="h-24 w-24 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/20">
                          <CheckCircle2 className="h-12 w-12" />
                       </div>
                       <div>
                          <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Job is Live!</h2>
                          <p className="text-sm font-bold text-slate-500 mt-2 px-12 leading-relaxed">
                             We've alerted nearby workers. Check your dashboard for incoming high-trust applications.
                          </p>
                       </div>
                       <Button onClick={() => window.location.href = '/find-workers'} className="w-full h-16 rounded-2xl font-black text-lg">
                          VIEW DISCOVERY HUB
                       </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JobPostForm;
