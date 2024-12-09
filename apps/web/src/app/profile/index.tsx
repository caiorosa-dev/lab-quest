import { usePublicRoute } from "@/hooks/auth/use-public-route";
import { createFileRoute } from "@tanstack/react-router";

import { FullScreenPage } from "@/components/full-screen-page";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Route = createFileRoute("/profile/")({
  component: () => <ProfilePage />,
});

function ProfilePage() {
  usePublicRoute(); // mudar para usePrivateRoute

  const stats = [
    {
      title: "Niveís Completos",
      stat: 30,
    },
    {
      title: "Dias Seguidos Máximos",
      stat: 11,
    },
    {
      title: "Niveis Sem Errar Questões",
      stat: 7,
    },
    {
      title: "Trilhas Completas",
      stat: 2,
    },
    {
      title: "Questões Respondidas",
      stat: 100,
    },
  ];

  return (
    <FullScreenPage className="flex justify-start items-center flex-col">
      <div className="w-full max-w-xl">
        <h1 className="text-primary text-3xl font-bold mt-3">Perfil</h1>
        <div className="flex justify-center gap-5 w-full max-w-sm mt-4">
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
        <h1 className="text-primary text-3xl font-bold mt-4">Estatisticas</h1>
        <div className="mt-4 gap-3 grid grid-cols-2">
          {stats.map((stat) => (
            <p className="">
              {stat.title}: {stat.stat}
            </p>
          ))}
        </div>
      </div>
    </FullScreenPage>
  );
}
