
import Link from 'next/link';
import { Ticket } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-xl font-headline font-bold", className)}>
      <Ticket className="h-6 w-6 text-primary" />
      <span>Tickety</span>
    </Link>
  );
};
