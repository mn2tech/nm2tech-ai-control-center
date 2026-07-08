"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Bot,
  BrainCircuit,
  CheckCheck,
  ClipboardList,
  Database,
  Gauge,
  Logs,
  Menu,
  Settings,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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

function SidebarBrand() {
  return (
    <div className="mb-8">
      <h1 className="text-lg font-semibold tracking-tight text-slate-100">
        NM2TECH AI Control Center
      </h1>
      <p className="mt-1 text-xs text-slate-400">Enterprise AI Orchestration</p>
    </div>
  );
}

function SidebarContent({
  onNavigate,
  layoutIdPrefix = "desktop",
}: {
  onNavigate?: () => void;
  layoutIdPrefix?: string;
}) {
  const pathname = usePathname();

  return (
    <nav className="space-y-1">
      {sidebarItems.map((item) => {
        const Icon = iconMap[item.label as keyof typeof iconMap];
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
              active
                ? "text-blue-100"
                : "text-slate-300 hover:bg-white/5 hover:text-slate-100",
            )}
          >
            {active ? (
              <motion.span
                layoutId={`${layoutIdPrefix}-active-nav`}
                className="absolute inset-0 -z-10 rounded-lg border border-blue-300/30 bg-blue-500/20"
              />
            ) : null}
            <Icon className="h-4 w-4" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-72 flex-col border-r border-white/10 bg-slate-950/70 p-5 backdrop-blur lg:flex">
      <SidebarBrand />
      <SidebarContent layoutIdPrefix="desktop" />
    </aside>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-30 -mx-4 mb-4 flex items-center gap-3 border-b border-white/10 bg-[#0B1220]/95 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-md md:-mx-7 md:px-7 lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={open}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-blue-400/40 bg-blue-500/20 px-3 py-2 text-sm font-medium text-blue-100 transition-colors hover:bg-blue-500/30"
        >
          <Menu className="h-5 w-5" />
          <span>Menu</span>
        </button>
        <p className="truncate text-sm font-semibold text-slate-100">
          NM2TECH AI Control Center
        </p>
      </header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-white/10 bg-slate-950/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden"
            >
              <div className="mb-6 flex items-start justify-between gap-3">
                <SidebarBrand />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-slate-100 transition-colors hover:bg-white/10"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <SidebarContent
                layoutIdPrefix="mobile"
                onNavigate={() => setOpen(false)}
              />
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
