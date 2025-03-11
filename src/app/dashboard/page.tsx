"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") return <div>Chargement…</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-4 bg-white shadow-md">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </header>
      <main className="p-4">
        <section className="mb-6">
          <h2 className="text-xl font-semibold">Développez vos composants maintenant</h2>
          <p>
            Utilisez cet espace pour tester et intégrer vos composants personnalisés. Vous pouvez y ajouter des graphiques, formulaires, ou tout autre élément de l’UI.
          </p>
        </section>
        <section>
          <h3 className="text-lg font-semibold">Exemple de composant</h3>
          <p>Testez ici un bouton stylisé avec shadcn/ui :</p>
          <Button variant="default">Cliquez ici</Button>
        </section>
      </main>
    </div>
  );
}
