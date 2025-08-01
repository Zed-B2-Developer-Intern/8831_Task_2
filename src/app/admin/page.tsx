'use client';

import Chart from '@/components/Chart';
import Feedback from '@/components/Feedback';

export default function AdminPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <Chart />
      <Feedback />
    </div>
  );
}
