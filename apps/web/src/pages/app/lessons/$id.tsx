import { createFileRoute } from "@tanstack/react-router";
import { Progress } from "@/components/ui/progress";
import { FullScreenPage } from "@/components/layout/full-screen-page";
import { Logo } from "@/components/misc/logo";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";

export const Route = createFileRoute("/app/lessons/$id")({
  component: () => {
    useEffect(()=>{
      axios.post("/lessons/1").then(res=>{
        console.log(res)
      })
    },[])
    const [data, setData] = useState(mock);
    return (
      <FullScreenPage className="flex justify-center">
        <div className="mx-5 grid gap-8 max-w-[600px] w-full">
          <div className="flex flex-col">
            <Logo className="mb-4" />
            <Progress className="h-4" />
          </div>
          <Lesson Lesson={""} />
          <Button className="w-full">Próxima questão</Button>
        </div>
      </FullScreenPage>
    );
  },
});

function Lesson({ Lesson }) {
  const title = "Questao 01";
  const question = "Qual desses é um elemento químico?";
  const alternatives = ["Água", "Hidrogênio", "Areia", "Madeira"];
  const correctAnswer = "Hidrogênio";

  return (
    <div className="grid gap-8">
      <div className="text-center grid gap-4">
        <h1 className="text-2xl">{title}</h1>
        <h1>{question}</h1>
      </div>
      <div className="grid gap-4">
        {alternatives.map((item) => (
          <Card className="hover:scale-105 transition-all cursor-pointer pt-2">
            <CardContent className="items-center">{item}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

const mock = {
  learningTrack: {
    id: "12345",
    name: "Introduction to Programming",
  },
  chapters: [
    {
      id: "chapter1",
      name: "Chapter 1: Basics",
      lessons: [
        {
          id: "lesson1",
          number: 1,
          completed: true,
        },
        {
          id: "lesson2",
          number: 2,
          completed: false,
        },
      ],
      totalLessonsNumber: 2,
      completedLessonsNumber: 1,
      completed: false,
    },
    {
      id: "chapter2",
      name: "Chapter 2: Advanced Topics",
      lessons: [
        {
          id: "lesson3",
          number: 1,
          completed: false,
        },
        {
          id: "lesson4",
          number: 2,
          completed: false,
        },
      ],
      totalLessonsNumber: 2,
      completedLessonsNumber: 0,
      completed: false,
    },
  ],
};
