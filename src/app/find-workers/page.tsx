import DiscoveryGrid from '@/components/features/employer/DiscoveryGrid';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function FindWorkersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow">
        <DiscoveryGrid />
      </main>
      <Footer />
    </div>
  );
}
