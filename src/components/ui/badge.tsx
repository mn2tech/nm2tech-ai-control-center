import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        default: "border-blue-400/40 bg-blue-500/20 text-blue-200",
        success: "border-emerald-400/40 bg-emerald-500/15 text-emerald-200",
        warning: "border-amber-400/40 bg-amber-500/15 text-amber-200",
        danger: "border-rose-400/40 bg-rose-500/15 text-rose-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
