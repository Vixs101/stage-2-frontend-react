
import { AppLayout } from '@/components/AppLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard | Tickety',
    description: 'Your ticket management dashboard.',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout>{children}</AppLayout>;
}
