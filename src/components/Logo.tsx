
"use client"

import Link from 'next/link';
import { Ticket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export const Logo = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  return (
    <Link href="/" className={cn("flex items-center gap-2 text-xl font-headline font-bold", className)}>
      <Ticket className={`{${pathname === "/" ? "text-white" : "text-primary"} h-6 w-6`} />
      <span>Tickety</span>
    </Link>
  );
};
