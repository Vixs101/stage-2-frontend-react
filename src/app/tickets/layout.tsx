
import { AppLayout } from '@/components/AppLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tickets | Tickety',
    description: 'Manage your support tickets.',
};

export default function TicketsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout>{children}</AppLayout>;
}
