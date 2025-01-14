import { createFileRoute } from "@tanstack/react-router";

import { FullScreenPage } from "@/components/layout/full-screen-page";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";

import { LearningTrack, columns } from "./_columns";

export const Route = createFileRoute("/tracks/")({
  component: () => <TracksPage />,
});

function TracksPage() {
  const data: LearningTrack[] = [
    {
      id: "1",
      name: "Vue",
      activeUsers: 20,
      createdAt: new Date("12-20-2024"),
      updateAt: new Date("12-10-2024"),
    },
    {
      id: "2",
      name: "Next",
      activeUsers: 100,
      createdAt: new Date("12-20-2024"),
      updateAt: new Date("12-10-2024"),
    },
    {
      id: "3",
      name: "Express",
      activeUsers: 10,
      createdAt: new Date("12-20-2024"),
      updateAt: new Date("12-10-2024"),
    },
    // ...
  ];

  return (
    <FullScreenPage>
      <div className="flex justify-between m-4">
        <h1 className="text-4xl font-bold">Trilhas</h1>
        <Button className="rounded-xl">Cadastrar nova trilha</Button>
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </FullScreenPage>
  );
}
