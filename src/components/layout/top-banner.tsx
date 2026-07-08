import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export function TopBanner() {
  return (
    <header className="flex flex-col gap-4 rounded-xl border border-white/15 bg-white/6 p-5 shadow-lg shadow-black/25 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
      <div>
        <p className="flex items-center gap-2 text-sm font-medium text-blue-200">
          <Sparkles className="h-4 w-4" />
          Enterprise AI Platform
        </p>
        <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-100">
          Secure • Governed • Human-in-the-Loop • Production Ready
        </h2>
      </div>
      <Button size="lg">Request Demo</Button>
    </header>
  );
}
