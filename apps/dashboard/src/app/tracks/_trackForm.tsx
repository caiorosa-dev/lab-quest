"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "O nome precisa de no minimo 2 caracters.",
  }),
});

export function TracksForm({ name }: { name: string }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder={name} {...field} />
              </FormControl>
              <FormDescription>Esse é o nome da trilha</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-4" type="submit">
          Salvar
        </Button>
      </form>
    </Form>
  );
}
