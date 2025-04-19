// frontend/app/dashboard/page.tsx
import ThisWeeksChores from "@/app/chore/components/ThisWeeksChores";
import WeeklyChorePlanner from "@/app/chore/components/WeeklyChorePlanner";
import DashboardCard from '@/components/ui/DashboardCard';

export default function DashboardPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">HomeIQ Dashboard</h1>
      <div className="grid grid-cols-12 gap-4">
          <ThisWeeksChores />
          <WeeklyChorePlanner />
        {/* Placeholder for other widgets */}
        <DashboardCard className="col-span-12 md:col-span-6 bg-gray-100">
        <div>
          More dashboard widgets...
        </div>
        </DashboardCard>
      </div>
    </main>
  );
}
