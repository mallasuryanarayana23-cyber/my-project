import VerificationTable from '@/components/features/admin/VerificationTable';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow p-8">
        <VerificationTable />
      </main>
      <Footer />
    </div>
  );
}
