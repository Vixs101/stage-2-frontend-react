
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { WavyBackground } from '@/components/WavyBackground';
import { Frown } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex-1">
        <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden border border-b-transparent">
          <WavyBackground />
          <div className="relative z-10 container px-4 md:px-6 text-center text-primary-foreground max-w-[1440px] mx-auto">
            <Frown className="h-16 w-16 mx-auto mb-4 text-accent" />
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tighter">
              404 - Page Not Found
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90 mb-8">
              Oops! The page you are looking for does not exist.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="font-bold bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/">Go to Homepage</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 border-t bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center text-white">
          <p>&copy; {new Date().getFullYear()} Tickety. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
