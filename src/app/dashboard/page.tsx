
"use client";

import { StatCard } from '@/components/dashboard/StatCard';
import { useTickets } from '@/hooks/useTickets';
import { Ticket, Clock, CheckCircle2 } from 'lucide-react';

export default function DashboardPage() {
  const { tickets, loading } = useTickets();

  const openTickets = tickets.filter(t => t.status === 'open').length;
  const inProgressTickets = tickets.filter(t => t.status === 'in_progress').length;
  const closedTickets = tickets.filter(t => t.status === 'closed').length;
  const totalTickets = tickets.length;

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">Dashboard</h1>
      </div>
      <div
        className="flex flex-1 rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex-1 p-4 md:p-8">
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                <StatCard title="Total Tickets" value={totalTickets} icon={Ticket} loading={loading} />
                <StatCard title="Open Tickets" value={openTickets} icon={Ticket} color="text-blue-500" loading={loading} />
                <StatCard title="In Progress" value={inProgressTickets} icon={Clock} color="text-yellow-500" loading={loading} />
                <StatCard title="Closed Tickets" value={closedTickets} icon={CheckCircle2} color="text-green-500" loading={loading} />
            </div>
        </div>
      </div>
    </>
  );
}
