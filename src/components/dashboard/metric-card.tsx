"use client";

import { motion } from "framer-motion";
import { CircleHelp, TrendingUp } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  description?: string;
}

export function MetricCard({ label, value, change, description }: MetricCardProps) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm text-slate-300">
            {label}
            {description ? (
              <span className="group relative inline-flex">
                <CircleHelp className="h-3.5 w-3.5 cursor-help text-slate-400 transition-colors group-hover:text-blue-300" />
                <span className="pointer-events-none absolute left-1/2 top-6 z-10 w-64 -translate-x-1/2 rounded-md border border-white/15 bg-slate-950/95 p-2 text-xs font-normal text-slate-200 opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
                  {description}
                </span>
              </span>
            ) : null}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-semibold text-slate-100">{value}</p>
          <p className="mt-2 flex items-center gap-1 text-xs text-emerald-300">
            <TrendingUp className="h-3 w-3" />
            {change} vs yesterday
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
