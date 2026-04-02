import OnboardingForm from '@/components/features/worker/OnboardingForm';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function WorkerOnboardingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <OnboardingForm />
      </main>
      <Footer />
    </div>
  );
}
