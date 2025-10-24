
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { WavyBackground } from '@/components/WavyBackground';
import { Ticket } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <WavyBackground />
          <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-primary-foreground">
            <Ticket className="h-16 w-16 mx-auto mb-4 text-accent" />
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tighter">
              Welcome to Tickety
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90 mb-8">
              The simple, intuitive, and powerful way to manage your support tickets. Streamline your workflow and deliver exceptional customer service.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="font-bold bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="font-bold">
                <Link href="/login">Log In</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-3">
              <div className="text-center">
                <h3 className="text-2xl font-headline font-semibold mb-2">Create & Assign</h3>
                <p className="text-muted-foreground">
                  Quickly create new tickets and assign them to the right team members. No fuss, no delays.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-headline font-semibold mb-2">Track & Update</h3>
                <p className="text-muted-foreground">
                  Monitor the status of every ticket in real-time. Keep everyone in the loop with status updates.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-headline font-semibold mb-2">Resolve & Close</h3>
                <p className="text-muted-foreground">
                  Efficiently manage tickets through to resolution, ensuring customer satisfaction and a clear history.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 border-t">
        <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Tickety. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
