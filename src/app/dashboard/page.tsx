
"use client";

import { StatCard } from '@/components/dashboard/StatCard';
import { useTickets } from '@/hooks/useTickets';
import { Ticket, Clock, CheckCircle2, PlusCircle, MessageSquare, Settings, FileText, Users } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const { tickets, loading } = useTickets();

  const openTickets = tickets.filter(t => t.status === 'open').length;
  const inProgressTickets = tickets.filter(t => t.status === 'in_progress').length;
  const closedTickets = tickets.filter(t => t.status === 'closed').length;
  const totalTickets = tickets.length;

  const actions = [
    {
      title: "Create Ticket",
      description: "Start a new support ticket",
      icon: MessageSquare,
      href: "/tickets",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "View Reports",
      description: "Check ticket analytics",
      icon: FileText,
      href: "",
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Team Members",
      description: "Manage your team",
      icon: Users,
      href: "",
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Settings",
      description: "Configure preferences",
      icon: Settings,
      href: "",
      color: "bg-orange-50 text-orange-600",
    },
  ]

  return (
    <>
      <div className="flex items-center justify-between ">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">Dashboard</h1>
        <div className="flex items-center justify-end">
          <Link href={"/tickets"} className="flex gap-2 h-8 px-3 items-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              New Ticket
            </span>
          </Link>
        </div>
      </div>
      <div
        className="flex flex-1 rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className=" flex flex-col gap-5 flex-1 p-4 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <StatCard title="Total Tickets" value={totalTickets} icon={Ticket} loading={loading} />
            <StatCard title="Open Tickets" value={openTickets} icon={Ticket} color="text-blue-500" loading={loading} />
            <StatCard title="In Progress" value={inProgressTickets} icon={Clock} color="text-yellow-500" loading={loading} />
            <StatCard title="Closed Tickets" value={closedTickets} icon={CheckCircle2} color="text-green-500" loading={loading} />
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {actions.map((action) => {
                const Icon = action.icon
                return (
                  <Link
                    key={action.title}
                    href={action.href}
                    className="group flex flex-col items-start gap-3 rounded-lg border border-border p-4 hover:border-primary hover:bg-primary/60 transition-all"
                  >
                    <div className={`rounded-lg p-2 ${action.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{action.title}</p>
                      <p className="text-xs text-muted-foreground">{action.description}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
