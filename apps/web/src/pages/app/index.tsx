import { AppLayout } from '@/components/layout/app-layout';
import { Button } from '@/components/ui/button';
import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRightLeftIcon, LeafIcon } from 'lucide-react';

export const Route = createFileRoute('/app/')({
  component: () => <HomePage />,
});

function HomePage() {
  return (
    <AppLayout
      containerHeader={
        <div className="bg-secondary w-full fixed top-0 left-0 z-50">
          <div className="max-w-xl mx-auto px-8 py-2 flex justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-600 rounded-full h-12 w-12 flex items-center justify-center">
                <LeafIcon className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground font-bold">
                  TRILHA
                </span>
                <span className="font-bold text-emerald-500">
                  Química Orgânica
                </span>
              </div>
            </div>
            <Link to="/app/tracks">
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 hover:bg-primary hover:text-primary-foreground"
              >
                <ArrowRightLeftIcon className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      }
      className="items-start"
    >
      <section className="space-y-4">
        <div className="flex justify-between items-center gap-4">
          <div className="w-16 h-[1px] bg-border" />
          <p className='text-sm font-medium'>1. Introdução à Química Orgânica</p>
          <div className="w-16 h-[1px] bg-border" />
        </div>
      </section>
    </AppLayout>
  );
}
