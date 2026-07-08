import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
}

export function Progress({ value, className, ...props }: ProgressProps) {
  return (
    <div
      className={cn("h-2 w-full overflow-hidden rounded-full bg-slate-700/60", className)}
      {...props}
    >
      <div
        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}
