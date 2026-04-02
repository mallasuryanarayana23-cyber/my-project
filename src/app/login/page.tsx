'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Phone, ArrowRight, ShieldCheck, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white p-10 rounded-3xl border border-border shadow-2xl animate-scale-in">
          <div className="text-center mb-10">
            <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight mb-2">Welcome Back</h1>
            <p className="text-muted text-sm font-medium">Verify your identity via Secure Phone OTP.</p>
          </div>

          {step === 'phone' ? (
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted uppercase tracking-wider">Phone Number</label>
                <div className="relative group">
                  <span className="absolute left-4 top-3.5 text-muted font-bold">+91</span>
                  <input 
                    type="tel" 
                    placeholder="Enter 10 digit number"
                    className="w-full pl-16 pr-4 py-4 bg-slate-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-bold text-lg"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <Phone className="absolute right-4 top-4 h-5 w-5 text-muted group-focus-within:text-primary" />
                </div>
              </div>

              <Button 
                className="w-full py-4 text-lg rounded-xl shadow-lg hover:translate-y-[-2px]" 
                onClick={() => setStep('otp')}
                disabled={phoneNumber.length !== 10}
              >
                Send Verification Code <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <div className="text-center">
                <p className="text-xs text-muted font-medium">
                  By continuing, you agree to SkillMap’s <Link href="#" className="text-primary hover:underline">Terms of Service</Link> and <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-2">
                 <p className="text-sm font-medium text-muted">Sent to <span className="font-bold text-foreground"> +91 {phoneNumber}</span></p>
                 <button onClick={() => setStep('phone')} className="text-xs font-bold text-primary hover:underline">Edit</button>
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <input 
                    key={i}
                    type="text"
                    maxLength={1}
                    className="w-full aspect-square text-center text-2xl font-bold bg-slate-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-inner"
                    defaultValue={i === 1 ? '5' : ''}
                  />
                ))}
              </div>

              <Button className="w-full py-4 text-lg rounded-xl shadow-lg hover:translate-y-[-2px]">
                Verify & Login
              </Button>

              <div className="text-center space-y-4">
                <p className="text-sm text-muted font-medium">Didn't receive the code?</p>
                <button className="flex items-center gap-2 mx-auto text-primary font-bold hover:opacity-80 transition-opacity">
                    <MessageSquare className="h-5 w-5" /> Resend via WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
