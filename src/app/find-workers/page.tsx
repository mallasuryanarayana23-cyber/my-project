import DiscoveryGrid from '@/components/features/employer/DiscoveryGrid';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function FindWorkersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-12 mb-12">
          <div className="max-w-3xl">
             <div className="inline-flex items-center gap-2 rounded-full bg-success/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-success mb-6">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                Live Verification Hub
             </div>
             <h1 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-foreground mb-6">
                Discover <span className="text-primary italic">Verified</span> <br className="hidden md:block" /> Workforce Near You.
             </h1>
             <p className="text-lg font-bold text-muted-foreground leading-relaxed">
                Connect with skilled workers who have been audited via video and GPS. Proximity search tuned for India's industrial heartlands.
             </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <DiscoveryGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}

