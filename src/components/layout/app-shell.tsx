import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { Sidebar } from "@/components/layout/sidebar";
import { TopBanner } from "@/components/layout/top-banner";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 px-4 py-5 md:px-7">
        <TopBanner />
        <section className="mt-6">{children}</section>
        <footer className="mt-10 border-t border-white/10 pt-6">
          <div className="mx-auto flex max-w-lg flex-col items-center justify-center gap-2 text-sm text-slate-400">
            <Link
              href="https://nm2web-redesign.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit NM2TECH website"
              className="transition-opacity hover:opacity-90"
            >
              <Image
                src="/nm2tech-logo.png"
                alt="NM2TECH logo"
                width={260}
                height={170}
                className="h-auto w-52 object-contain md:w-64"
              />
            </Link>
            <span>Powered by NM2TECH</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
