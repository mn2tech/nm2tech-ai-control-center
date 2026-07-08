"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bot,
  BrainCircuit,
  CheckCheck,
  ClipboardList,
  Database,
  Gauge,
  Logs,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { sidebarItems } from "@/data/mock-data";

const iconMap = {
  Dashboard: Gauge,
  "AI Agents": Bot,
  "Human Approval": CheckCheck,
  Evaluations: BrainCircuit,
  "Knowledge Base": Database,
  "Model Gateway": ClipboardList,
  "Audit Logs": Logs,
  Settings,
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-72 flex-col border-r border-white/10 bg-slate-950/70 p-5 backdrop-blur lg:flex">
      <div className="mb-8">
        <h1 className="text-lg font-semibold tracking-tight text-slate-100">
          NM2TECH AI Control Center
        </h1>
        <p className="mt-1 text-xs text-slate-400">Enterprise AI Orchestration</p>
      </div>
      <nav className="space-y-1">
        {sidebarItems.map((item) => {
          const Icon = iconMap[item.label as keyof typeof iconMap];
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                active
                  ? "text-blue-100"
                  : "text-slate-300 hover:bg-white/5 hover:text-slate-100",
              )}
            >
              {active ? (
                <motion.span
                  layoutId="active-nav"
                  className="absolute inset-0 -z-10 rounded-lg border border-blue-300/30 bg-blue-500/20"
                />
              ) : null}
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
