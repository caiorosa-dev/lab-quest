import { createFileRoute } from "@tanstack/react-router";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AppLayout } from '@/components/layout/app-layout';

export const Route = createFileRoute("/app/tracks/")({
  component: () => <TracksPage />,
});

function TracksPage() {
  const data = [
    {
      id: 1,
      name: "React",
      description: "Learn React",
      image: "https://placehold.co/600x100",
      subjects: 2,
      done: 3,
      total: 10,
    },
    {
      id: 2,
      name: "Vue",
      description: "Learn Vue",
      image: "https://placehold.co/600x100",
      subjects: 4,
      done: 6,
      total: 15,
    },
    {
      id: 3,
      name: "Angular",
      description: "Learn Angular",
      image: "https://placehold.co/600x100",
      subjects: 8,
      done: 12,
      total: 20,
    },
    {
      id: 4,
      name: "Svelte",
      description: "Learn Svelte",
      image: "https://placehold.co/600x100",
      subjects: 10,
      done: 5,
      total: 10,
    },
    {
      id: 5,
      name: "Ember",
      description: "Learn Ember",
      image: "https://placehold.co/600x100",
      subjects: 6,
      done: 3,
      total: 10,
    },
  ];

  return (
    <AppLayout className='space-y-12'>
      <h1 className="text-secondary-foreground text-center text-2xl font-bold">
        Trilhas de Aprendizado
      </h1>
      <div className='flex flex-col gap-4 justify-center'>
        {data.map((track) => (
          <Card key={track.id} className="w-full max-w-xl">
            <CardHeader className="p-0 mb-3">
              <img src={track.image} alt={track.name} className="rounded-md" />
            </CardHeader>
            <CardContent className="flex place-content-between">
              <CardTitle>{track.name}</CardTitle>
              <CardDescription>{track.subjects} unidades</CardDescription>
            </CardContent>
            <CardFooter>
              <Progress value={(track.done / track.total) * 100} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </AppLayout>
  );
}
