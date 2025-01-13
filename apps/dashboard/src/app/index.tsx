import { createFileRoute } from "@tanstack/react-router";
// import { useProtectedRoute } from "@/hooks/auth/use-protected-route";
import { FullScreenPage } from "@/components/full-screen-page";
import { usePublicRoute } from "@/hooks/auth/use-public-route";

import { MyPieChart } from "./__piechart";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function Greeting({ username }) {
  function getGreeting(hours: number) {
    if (hours <= 12) {
      return "Bom Dia";
    } else if (hours <= 18) {
      return "Boa Tarde";
    } else {
      return "Boa Noite";
    }
  }

  function getHour() {
    const date = new Date();
    return date.getHours();
  }

  return (
    <h1>
      {getGreeting(getHour())}, {username}
    </h1>
  );
}

function IndexPage() {
  usePublicRoute(); // TODO: Trocar para em produção useProtectedRoute();

  const user = {
    name: "André",
  };

  return (
    <FullScreenPage>
      <div className="max-w-7xl w-full mx-auto p-8 space-y-8 font-bold text-2xl">
        <Greeting username={user.name} />
        <section>
          <MyPieChart />
        </section>
      </div>
    </FullScreenPage>
  );
}
