'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Phone, ArrowRight, ShieldCheck, MessageSquare, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendOTP = async () => {
    setLoading(true);
    setError(null);
    try {
      // For local development, prepend +91 if not present
      const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber : `+91${phoneNumber}`;
      
      const res = await fetch('/api/auth/otp/send', {
        method: 'POST',
        body: JSON.stringify({ phoneNumber: formattedPhone })
      });
      const data = await res.json();
      
      if (data.success) {
        setStep('otp');
      } else {
        setError(data.error?.message || 'Failed to send OTP');
      }
    } catch (err) {
      setError('Connection refused. Is the server running?');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    setLoading(true);
    setError(null);
    try {
      const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber : `+91${phoneNumber}`;
      const otpValue = otp.join('');

      const res = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ phoneNumber: formattedPhone, otp: otpValue })
      });
      const data = await res.json();

      if (data.success) {
        // Store user in local storage for session (or use cookies)
        localStorage.setItem('skillmap_user', JSON.stringify(data.data.user));
        localStorage.setItem('skillmap_token', data.data.token);

        // Redirect based on role
        const role = data.data.user.role;
        if (role === 'ADMIN') router.push('/admin/verify');
        else if (role === 'EMPLOYER') router.push('/find-workers');
        else router.push('/worker/dashboard');
      } else {
        setError(data.error?.message || 'Invalid code. Try 1234.');
      }
    } catch (err) {
      setError('Verification failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-focus next
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

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

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-bold flex items-center">
              ⚠️ {error}
            </div>
          )}

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
                onClick={handleSendOTP}
                disabled={phoneNumber.length !== 10 || loading}
              >
                {loading ? <Loader2 className="animate-spin h-5 w-5" /> : <>Send Verification Code <ArrowRight className="ml-2 h-5 w-5" /></>}
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
                {otp.map((value, i) => (
                  <input 
                    key={i}
                    id={`otp-${i}`}
                    type="text"
                    maxLength={1}
                    className="w-full aspect-square text-center text-2xl font-bold bg-slate-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-inner"
                    value={value}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                  />
                ))}
              </div>

              <div className="text-center text-xs font-bold text-emerald-600 bg-emerald-50 py-2 rounded-lg">
                HINT: Use '1234' for this preview
              </div>

              <Button 
                className="w-full py-4 text-lg rounded-xl shadow-lg hover:translate-y-[-2px]"
                onClick={handleVerifyOTP}
                disabled={loading || otp.some(v => !v)}
              >
                {loading ? <Loader2 className="animate-spin h-5 w-5" /> : 'Verify & Login'}
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
