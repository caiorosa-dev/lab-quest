import { useState } from "react";

import { createFileRoute } from "@tanstack/react-router";

import { FullScreenPage } from "@/components/layout/full-screen-page";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { LearningTrack, columns } from "./_columns";
// import { TracksForm } from "./_trackForm";

export const Route = createFileRoute("/tracks/")({
  component: () => <TracksPage />,
});

function TracksPage() {
  const [data, setData] = useState<LearningTrack[]>([
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
  ]);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<LearningTrack>();

  function handleDelete(item: LearningTrack) {
    console.log("Deleting: ", item);
    setData((prevState) =>
      prevState.filter((dataItem) => dataItem.id !== item.id)
    );
  }

  function handleEdit(item: LearningTrack) {
    console.log("Editing: ", item);
    setOpen(true);
    setEditItem(item);
    // setData(
    //   (prevState) =>
    //     prevState.filter((dataItem) => dataItem.id !== item.id) + item
    // );
  }

  return (
    <FullScreenPage>
      <div className="flex container justify-between my-4">
        <h1 className="text-4xl font-bold">Trilhas</h1>
        <Button className="rounded-xl">Cadastrar nova trilha</Button>
      </div>

      <div className="container">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Trilhas de Aprendizado</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="container mx-auto py-10">
        <DataTable
          columns={columns}
          data={data}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>

      {isOpen && (
        <Dialog open={isOpen} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Editando Item</DialogTitle>
              <DialogDescription>
                Faça alterações ao seu item aqui. Clique em guardar quando tiver
                terminado.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex items-center gap-4">
                {/* <TracksForm name={editItem.name} onSubmit={handleEdit} /> */}
                <Label htmlFor="name" className="text-right">
                  Nome
                </Label>
                <Input
                  id="name"
                  defaultValue={editItem.name}
                  placeholder="Nome"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Salve mudanças</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </FullScreenPage>
  );
}
