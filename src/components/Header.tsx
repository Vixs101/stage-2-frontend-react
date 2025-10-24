
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 bg-transparent py-4">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Logo className="text-primary-foreground" />
        <nav className="flex gap-2">
          <Button asChild variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};
