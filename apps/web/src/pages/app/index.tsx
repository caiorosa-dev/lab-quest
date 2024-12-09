import { AppLayout } from '@/components/layout/app-layout';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/app/')({
  component: () => <HomePage />,
});

function HomePage() {
  return (
    <AppLayout>
      <h1>Ola mundo</h1>
    </AppLayout>
  );
}
