import { createFileRoute } from "@tanstack/react-router";
import { Progress } from "@/components/ui/progress";
import { FullScreenPage } from "@/components/layout/full-screen-page";
import { Logo } from "@/components/misc/logo";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/app/lessons/$id")({
  component: () => {
    useEffect(() => {
      axios.post("/lessons/1").then((res) => {
        console.log(res);
      });
    }, []);
    const [data, setData] = useState(mock);
    return (
      <FullScreenPage className="flex justify-center">
        <div className="mx-5 grid gap-8 max-w-[600px] w-full">
          <div className="flex flex-col">
            <Logo className="mb-4" />
            <Progress className="h-4" />
          </div>
          <div className="h-96">
            <SingleOptionLesson Lesson={""} />
            {/* <FillInQuestion Lesson={""} /> */}
          </div>
          <Button className="w-full">Próxima questão</Button>
        </div>
      </FullScreenPage>
    );
  },
});

function SingleOptionLesson({ Lesson }) {
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

function FillInQuestion({Lesson}) {
  const title = "Questao 01";
  const question =
    "O elemento que é o principal responsável pela cor verde nas plantas é o ___________";
  const correctAnswer = "Hidrogênio";
  return (
    <div className="grid gap-8">
      <div className="text-center grid gap-4">
        <h1 className="text-2xl">{title}</h1>
        <h1>{question}</h1>
      </div>
      <div className="grid gap-4">
        <Input />
      </div>
    </div>
  );
}

const mock = {
  exercises: [
    {
      id: "1",
      lessonId: "100",
      type: "unique_answer",
      data: {
        question: "What is the capital of France?",
        answers: [
          { id: "1", label: "Paris", correct: true },
          { id: "2", label: "London", correct: false },
          { id: "3", label: "Berlin", correct: false },
        ],
      },
    },
    {
      id: "2",
      lessonId: "100",
      type: "multiple_choice",
      data: {
        question: "Which of the following are fruits?",
        answers: [
          { id: "1", label: "Apple", correct: true },
          { id: "2", label: "Carrot", correct: false },
          { id: "3", label: "Banana", correct: true },
          { id: "4", label: "Potato", correct: false },
        ],
      },
    },
    {
      id: "3",
      lessonId: "100",
      type: "true_false",
      data: {
        question: "The sky is blue.",
        correctAnswer: true,
      },
    },
    {
      id: "4",
      lessonId: "100",
      type: "fill_in",
      data: {
        question: "The chemical symbol for water is [ANSWER].",
        correctAnswer: "H2O",
      },
    },
    {
      id: "5",
      lessonId: "100",
      type: "matching",
      data: {
        question: "Match the countries with their capitals.",
        pairs: [
          { item: "France", match: "Paris" },
          { item: "Germany", match: "Berlin" },
          { item: "Italy", match: "Rome" },
        ],
      },
    },
  ],
  answer: {
    id: "answer1",
    userId: "user1",
    lessonId: "100",
    initializedAt: "2023-03-15T12:00:00Z",
    totalAmountOfAnswers: 5,
  },
};
