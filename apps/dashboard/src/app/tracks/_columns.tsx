import { ColumnDef } from "@tanstack/react-table";

export type LearningTrack = {
  id: string;
  name: string;
  activeUsers: number;
  createdAt: Date;
  updateAt: Date;
};

export const columns: ColumnDef<LearningTrack>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "createdAt",
    header: "Criado Em",
  },
  {
    accessorKey: "updateAt",
    header: "Atualizado Em",
  },
  {
    accessorKey: "activeUsers",
    header: "Usuários Ativos",
  },
];
