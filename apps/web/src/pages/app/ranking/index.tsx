import { FullScreenPage } from "@/components/full-screen-page";
import { usePublicRoute } from "@/hooks/auth/use-public-route";
import { createFileRoute } from "@tanstack/react-router";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/app/ranking/")({
  component: () => <RankingPage />,
});

function RankingPage() {
  usePublicRoute(); // change to usePrivateRoute

  const global_ranking = [
    {
      name: "João",
      points: 100,
    },
    {
      name: "Maria",
      points: 90,
    },
    {
      name: "José",
      points: 80,
    },
  ];

  const friends_ranking = [
    {
      name: "Amigo 1",
      points: 70,
    },
    {
      name: "Amigo 2",
      points: 60,
    },
    {
      name: "Amigo 3",
      points: 50,
    },
  ];

  return (
    <FullScreenPage className="flex justify-center items-center flex-col">
      <Tabs defaultValue="global" className="w-full max-w-lg">
        <div className="flex place-content-between items-end">
          <h1 className="text-primary text-3xl font-bold mt-3">Ranking</h1>
          <TabsList>
            <TabsTrigger value="global">Global</TabsTrigger>
            <TabsTrigger value="amigos">Amigos</TabsTrigger>
          </TabsList>
        </div>
        <span>De quem completou mais niveis</span>
        <TabsContent value="global" className="mt-3">
          {global_ranking.map((user, index) => (
            <div
              key={index}
              className="flex justify-between items-center w-full p-3 border-b border-neutral-200"
            >
              <span className="text-lg">
                {index + 1}. {user.name}
              </span>
              <span className="text-lg">{user.points}</span>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="amigos" className="mt-3">
          {friends_ranking.map((user, index) => (
            <div
              key={index}
              className="flex justify-between items-center w-full p-3 border-b border-neutral-200"
            >
              <span className="text-lg">
                {index + 1}. {user.name}
              </span>
              <span className="text-lg">{user.points}</span>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </FullScreenPage>
  );
}
