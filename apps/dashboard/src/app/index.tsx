import { createFileRoute } from '@tanstack/react-router';
import { useProtectedRoute } from '@/hooks/auth/use-protected-route';
import { FullScreenPage } from '@/components/full-screen-page';

export const Route = createFileRoute('/')({
  component: IndexPage,
});

function IndexPage() {
  useProtectedRoute();

  return (
    <FullScreenPage>
      <div className="max-w-7xl w-full mx-auto p-8 space-y-8 font-bold text-2xl">
        <h1>Boa noite</h1>
      </div>
    </FullScreenPage>
  );
}
