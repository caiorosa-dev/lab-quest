import { createFileRoute } from '@tanstack/react-router';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AppLayout } from '@/components/layout/app-layout';

export const Route = createFileRoute('/app/profile/')({
  component: () => <ProfilePage />,
});

function ProfilePage() {
  const stats = [
    {
      title: 'Niveís Completos',
      stat: 30,
    },
    {
      title: 'Dias Seguidos Máximos',
      stat: 11,
    },
    {
      title: 'Niveis Sem Errar Questões',
      stat: 7,
    },
    {
      title: 'Trilhas Completas',
      stat: 2,
    },
    {
      title: 'Questões Respondidas',
      stat: 100,
    },
  ];

  return (
    <AppLayout>
      <section className="flex flex-col items-center gap-8 justify-center">
        <h1 className="text-primary text-3xl font-bold mt-3">Perfil</h1>
        <div className="flex justify-center gap-5 w-full max-w-sm">
          <Avatar className="rounded h-20 w-20">
            <AvatarImage src="https://placehold.co/100x100" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-primary text-xl font-semibold">André</h2>
            <p className="text-white text-sm font-normal">
              Olá. Meu nome é André, sou um estudante de ciências da computação
              na UNIVALI.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-8 justify-center">
        <h1 className="text-primary text-3xl font-bold">Estatisticas</h1>
        <div className="mt-4 gap-3 grid grid-cols-2">
          {stats.map((stat) => (
            <p className="">
              {stat.title}: {stat.stat}
            </p>
          ))}
        </div>
      </section>
    </AppLayout>
  );
}
