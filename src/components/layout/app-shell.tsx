import type { ReactNode } from "react";

import { Sidebar } from "@/components/layout/sidebar";
import { TopBanner } from "@/components/layout/top-banner";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 px-4 py-5 md:px-7">
        <TopBanner />
        <section className="mt-6">{children}</section>
        <footer className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          Powered by NM2TECH
        </footer>
      </main>
    </div>
  );
}
