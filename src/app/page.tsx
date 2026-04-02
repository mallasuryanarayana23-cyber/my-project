import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { Camera, MapPin, ShieldCheck, Users, Briefcase, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-20 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-6 animate-fade-in">
                  <Zap className="mr-2 h-4 w-4" />
                  India's First Verified Skill Network
                </div>
                <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl mb-6">
                  Empowering MSMEs with <span className="text-primary italic">Verified</span> Local Talent.
                </h1>
                <p className="text-xl text-muted leading-relaxed mb-10 max-w-2xl">
                  SkillMap bridges the hiring gap in India's industrial heartlands. Find skilled workers verified by video and located by GPS, right in your neighborhood.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="px-10">Find Workers Now</Button>
                  <Button variant="outline" size="lg" className="px-10">Join as a Worker</Button>
                </div>
                
                <div className="mt-12 flex items-center gap-4 text-sm text-muted">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-slate-200" />
                    ))}
                  </div>
                  <p>Trusted by <span className="font-bold text-foreground">500+</span> MSMEs across industrial hubs.</p>
                </div>
              </div>
              <div className="mt-16 lg:mt-0 lg:col-span-5 relative">
                <div className="relative rounded-2xl border border-border bg-slate-50 p-4 shadow-2xl overflow-hidden aspect-square flex items-center justify-center">
                    {/* Placeholder for SkillMap App Interface Mockup */}
                    <div className="text-center">
                        <Camera className="mx-auto h-16 w-16 text-primary/40 mb-4" />
                        <p className="text-sm font-medium text-muted">Video Verification Visualization</p>
                    </div>
                </div>
                {/* Decorative blobs */}
                <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-secondary/10 blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Problem Definition Section */}
        <section className="bg-slate-50 py-24 sm:py-32 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6 italic">
                The Gap: Why Traditional Hiring Fails India's MSMEs.
              </h2>
              <p className="text-lg text-muted mb-12">
                India's 63 million MSMEs face a critical talent crunch. Unverified workers lead to security risks and poor quality work, while hyper-local talent remains invisible.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Trust Deficit", desc: "Verifying credentials for daily/monthly labor is expensive and slow.", icon: ShieldCheck },
                { title: "Discovery Friction", desc: "Finding skilled labor within a 5-10km radius is currently a game of chance.", icon: MapPin },
                { title: "Quality Mismatch", desc: "Paper resumes don't show real skill. Video evidence does.", icon: Camera }
              ].map((item, idx) => (
                <div key={idx} className="bg-background rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-all">
                  <item.icon className="h-10 w-10 text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovation Section - Unique Features */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-display text-4xl font-bold tracking-tight mb-6">Designed for the Next Billion Users.</h2>
              <p className="text-xl text-muted">We didn't just build a portal; we built a trust engine.</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="space-y-12">
                  <div className="flex gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
                      <Camera className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Video Verification (V-Trust)</h3>
                      <p className="text-muted">Workers upload a live demonstration of their skill. Admins manually verify every video to ensure only genuine talent reaches your shop floor.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-lg">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">GPS-Precision Search</h3>
                      <p className="text-muted">Optimized for hyper-local discovery. Find workers within your industrial cluster, reducing transit times and increasing reliability.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-lg">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Admin-Vouched Profiles</h3>
                      <p className="text-muted">Every worker on SkillMap is more than a profile; they are vouched for by our community of verifiers.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-100 rounded-2xl aspect-video flex items-center justify-center border-2 border-dashed border-slate-300">
                <span className="text-slate-400 font-medium italic">[ Interactive Map Preview ]</span>
              </div>
            </div>
          </div>
        </section>

        {/* User Journey Section */}
        <section className="bg-primary py-24 sm:py-32 text-primary-foreground overflow-hidden relative">
            <div className="absolute top-0 right-0 h-full w-1/3 bg-white/5 skew-x-12 transform origin-top" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="font-display text-4xl font-bold text-center mb-16">The SkillMap Journey</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { step: "01", title: "Worker Upload", desc: "Worker registers with OTP and uploads their skill intro video." },
                        { step: "02", title: "Admin Verify", desc: "Our team reviews the video and credentials within 24 hours." },
                        { step: "03", title: "Employer Hire", desc: "MSME finds the worker via GPS and hires with confidence." }
                    ].map((item, idx) => (
                        <div key={idx} className="relative p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                            <span className="absolute -top-4 left-8 bg-white text-primary font-bold px-3 py-1 rounded-full text-sm">Step {item.step}</span>
                            <h3 className="text-2xl font-bold mb-4 mt-2">{item.title}</h3>
                            <p className="text-white/80 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="font-display text-4xl font-extrabold mb-6">Ready to scale your workforce?</h2>
                <p className="text-xl text-muted mb-10 max-w-2xl mx-auto italic">Join the thousands of MSMEs building the future of India's industrial sector with verified talent.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="primary" className="px-12">Search Workers</Button>
                    <Button size="lg" variant="outline" className="px-12">Register Industry</Button>
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
