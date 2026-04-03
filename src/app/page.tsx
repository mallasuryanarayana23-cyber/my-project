import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { Camera, MapPin, ShieldCheck, Users, Briefcase, Zap, Star, ArrowRight, PlayCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        {/* Advanced Hero Section */}
        <section className="relative pt-32 pb-24 sm:pt-48 sm:pb-32 overflow-hidden">
          {/* Dynamic Background Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] animate-pulse" />
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-success/5 blur-[100px] animate-pulse delay-700" />
          </div>

          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-primary mb-8 animate-in fade-in slide-in-from-left-4 duration-500">
                  <Zap className="h-3.5 w-3.5 fill-primary" />
                  India's First Verified Skill Network
                </div>
                
                <h1 className="font-display text-5xl font-black tracking-tight text-foreground sm:text-7xl mb-8 leading-[1.05] animate-in fade-in slide-in-from-left-6 duration-700 delay-100">
                  Fueling MSMEs with <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-success italic">Verified</span> Local Talent.
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
                  SkillMap is the trust bridge for India's industrial sector. Find verified workers within 5km, audit their skills via video, and hire with absolute confidence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-left-10 duration-700 delay-300">
                  <Link href="/find-workers">
                    <Button size="lg" className="rounded-full px-10 h-16 text-base font-black tracking-tight shadow-2xl shadow-primary/30 group">
                      FIND WORKERS NOW
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/worker/onboarding">
                    <Button variant="outline" size="lg" className="rounded-full px-10 h-16 text-base font-black tracking-tight border-border/50 bg-white/50 backdrop-blur-sm hover:bg-white transition-all">
                      JOIN AS A WORKER
                    </Button>
                  </Link>
                </div>
                
                <div className="mt-16 flex items-center gap-6 animate-in fade-in duration-1000 delay-500">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-12 w-12 rounded-full border-4 border-background overflow-hidden ring-1 ring-border/20">
                        <img src={`https://i.pravatar.cc/150?u=sk${i}`} alt="User" className="h-full w-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-3.5 w-3.5 fill-warning text-warning" />)}
                    </div>
                    <p className="text-sm font-bold text-muted-foreground">
                      Trusted by <span className="text-foreground font-black">500+</span> MSMEs in industrial hubs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative animate-in fade-in zoom-in duration-1000 delay-300 hidden lg:block">
                <div className="relative group">
                  {/* Decorative Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-success rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                  
                  {/* Glassmorphic Mockup Container */}
                  <div className="relative glass-card rounded-[2.5rem] p-4 aspect-[4/5] flex flex-col items-center justify-center overflow-hidden border-white/40 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                    
                    <div className="z-10 flex flex-col items-center text-center px-8">
                       <div className="bg-white/90 p-6 rounded-3xl shadow-xl mb-8 transform group-hover:scale-110 transition-transform duration-500">
                         <PlayCircle className="h-16 w-16 text-primary fill-primary/10" />
                       </div>
                       <h3 className="font-display text-2xl font-black mb-4">Real Skill, Real Videos.</h3>
                       <p className="text-sm font-bold text-muted-foreground leading-relaxed">
                         Our V-Trust system captures 30-second skill demos, manually verified by our team.
                       </p>
                    </div>

                    {/* Floating UI Elements */}
                    <div className="absolute top-12 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-border/50 animate-bounce delay-700">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-success/20 flex items-center justify-center">
                          <ShieldCheck className="h-4 w-4 text-success" />
                        </div>
                        <span className="text-xs font-black uppercase text-foreground">Verified Worker</span>
                      </div>
                    </div>

                    <div className="absolute bottom-12 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-border/50 animate-bounce">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <MapPin className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-xs font-black uppercase text-foreground">2.4km Near You</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Impact Grid */}
        <section className="py-24 bg-slate-50 border-y border-border/50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-20">
               <h2 className="font-display text-4xl font-black text-foreground mb-6 leading-tight italic">
                 The Skill Gap: Resolving India's <br className="hidden md:block" /> Hiring Crisis for MSMEs.
               </h2>
               <div className="h-1.5 w-24 bg-primary rounded-full mb-8" />
               <p className="text-xl font-medium text-muted-foreground">
                 Traditional job boards serve the white-collar 1%. SkillMap is built for the backbone of India — our workers and small factory owners.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                { title: "Trust-as-a-Service", desc: "No more fake credentials. We verify technical skills through physical and video auditing.", icon: ShieldCheck, color: "primary" },
                { title: "Hyper-Local Precision", desc: "Our PostGIS-powered discovery finds workers within your industrial cluster, cutting transit times.", icon: MapPin, color: "success" },
                { title: "Video Moat", desc: "Paper resumes lie. Videos don't. See the quality of work before the first interview.", icon: Camera, color: "warning" }
              ].map((item, idx) => (
                <div key={idx} className="group relative p-10 bg-white rounded-3xl border border-border/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 right-0 h-32 w-32 -mr-16 -mt-16 rounded-full bg-${item.color}/5 group-hover:scale-150 transition-transform duration-700`} />
                  <div className={`h-14 w-14 rounded-2xl bg-${item.color}/10 flex items-center justify-center mb-8`}>
                    <item.icon className={`h-7 w-7 text-${item.color}`} />
                  </div>
                  <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                  <p className="text-muted-foreground font-bold leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey - Visual Process */}
        <section className="py-32 bg-foreground text-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-24">
               <h2 className="font-display text-4xl sm:text-6xl font-black mb-8 italic">The SkillMap Pipeline</h2>
               <p className="text-xl text-background/60 font-bold">Bridging the gap in 3 high-trust steps.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
               {[
                 { step: "01", title: "Capture & Vouch", desc: "Worker records their best work. Our AI and Team verify the authenticity." },
                 { step: "02", title: "Geo-Map Sync", desc: "Profiles are indexed with precise GPS coordinates for instant local visibility." },
                 { step: "03", title: "Instant Connect", desc: "MSMEs browse, audit videos, and hire directly via SkillMap's secure portal." }
               ].map((item, idx) => (
                 <div key={idx} className="relative p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-8xl font-black text-white/5 absolute top-4 right-8">{item.step}</span>
                    <h3 className="text-3xl font-black text-white mb-6 relative z-10">{item.title}</h3>
                    <p className="text-lg text-white/60 font-bold leading-relaxed relative z-10">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 relative overflow-hidden">
           <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
              <h2 className="font-display text-5xl sm:text-7xl font-black mb-10 leading-tight tracking-tighter">
                Scale Your Industry with <br className="hidden md:block"/> <span className="text-primary italic">Verified</span> Talent.
              </h2>
              <p className="text-xl font-bold text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
                SkillMap is already empowering 500+ MSMEs across North & South India. Don't let your shop floor wait anymore.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link href="/find-workers">
                   <Button size="lg" className="rounded-full px-16 h-20 text-lg font-black tracking-tight shadow-[0_20px_50px_rgba(79,70,229,0.3)]">
                     ACCESS WORKFORCE
                   </Button>
                 </Link>
                 <Link href="/login">
                   <Button variant="outline" size="lg" className="rounded-full px-16 h-20 text-lg font-black tracking-tight border-border/60 hover:bg-slate-50">
                     REGISTER INDUSTRY
                   </Button>
                 </Link>
              </div>
           </div>
           
           {/* Decorative Grid */}
           <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '24px 24px'}}></div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

