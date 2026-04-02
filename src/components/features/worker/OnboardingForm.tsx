'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { Camera, MapPin, CheckCircle, Video, Info, ShieldCheck } from 'lucide-react';

const steps = [
  { id: 1, name: 'Basic Info', icon: Info },
  { id: 2, name: 'Skill Details', icon: Camera },
  { id: 3, name: 'Video Intro', icon: Video },
  { id: 4, name: 'Verification', icon: CheckCircle },
];

const OnboardingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    skillSet: [],
    videoFile: null,
  });

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex items-center justify-between">
          {steps.map(step => (
            <div key={step.id} className="flex flex-col items-center">
              <div 
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${
                  currentStep >= step.id ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-background text-muted'
                }`}
              >
                <step.icon className="h-5 w-5" />
              </div>
              <span className={`mt-2 text-xs font-semibold ${currentStep >= step.id ? 'text-primary' : 'text-muted'}`}>
                {step.name}
              </span>
            </div>
          ))}
        </div>
        <div className="relative mt-4 h-1 w-full bg-border">
          <div 
            className="absolute h-full bg-primary transition-all duration-300" 
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl font-bold mb-2">Tell us about yourself</h2>
              <p className="text-muted text-sm">We'll use this to match you with nearby MSMEs.</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full rounded-xl border border-border p-3 focus:outline-none focus:ring-2 focus:ring-primary/20" 
                  placeholder="e.g. Rahul Sharma"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Phone Number (Verified via OTP)</label>
                <input 
                  type="tel" 
                  className="w-full rounded-xl border border-border p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-slate-50" 
                  value="+91 97813 XXXXX" 
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Service Area</label>
                <div className="relative">
                  <input 
                    type="text" 
                    className="w-full rounded-xl border border-border p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-primary/20" 
                    placeholder="e.g. Okhla Industrial Area"
                  />
                  <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-muted" />
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6 animate-in slide-in-from-right duration-300">
            <div>
              <h2 className="text-2xl font-bold mb-2">What skills do you have?</h2>
              <p className="text-muted text-sm">Select your primary and secondary trades.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['Welder', 'Electrician', 'CNC Operator', 'Plumber', 'Fabricator', 'Mechanic'].map(skill => (
                <button 
                  key={skill} 
                  className="rounded-xl border border-border p-4 text-left hover:border-primary hover:bg-primary/5 transition-all focus:ring-2 focus:ring-primary/20"
                >
                  <span className="font-semibold">{skill}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6 animate-in slide-in-from-right duration-300">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-primary flex items-center gap-2">
                <Video className="h-6 w-6" />
                The Verification Magic
              </h2>
              <p className="text-muted text-sm">Upload a 30-60 second video showing your skill in action or introducing your professional background.</p>
            </div>
            <div className="group relative flex aspect-video cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border transition-all hover:border-primary hover:bg-slate-50">
              <Camera className="h-12 w-12 text-muted group-hover:text-primary transition-colors" />
              <p className="mt-4 text-sm font-bold text-muted group-hover:text-primary">Click to Record or Upload</p>
              <p className="mt-1 text-xs text-muted">Max size: 50MB (MP4, MOV)</p>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-emerald-50 p-3 text-emerald-700 text-sm border border-emerald-100">
              <ShieldCheck className="h-5 w-5" />
              Verified workers get 10x more job requests from MSMEs.
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-6 animate-in zoom-in duration-300 text-center py-8">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle className="h-12 w-12" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Everything looks ready!</h2>
              <p className="text-muted text-sm max-w-xs mx-auto">Once you submit, our admin team will review your video and verify your profile within 1 business day.</p>
            </div>
          </div>
        )}

        <div className="mt-10 flex justify-between gap-4">
          <Button 
            variant="ghost" 
            onClick={prevStep} 
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          <Button 
            className="flex-1" 
            onClick={currentStep === steps.length ? () => alert('Submitted!') : nextStep}
          >
            {currentStep === steps.length ? 'Submit Application' : 'Next Step'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingForm;
