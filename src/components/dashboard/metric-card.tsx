"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
}

export function MetricCard({ label, value, change }: MetricCardProps) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm text-slate-300">{label}</CardTitle>
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
