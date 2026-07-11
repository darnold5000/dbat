import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-display text-sm tracking-wide uppercase transition-colors disabled:pointer-events-none disabled:opacity-50 min-h-11 px-5 py-2.5",
  {
    variants: {
      variant: {
        primary: "bg-brand text-white hover:bg-brand-hover",
        secondary:
          "border border-border bg-transparent text-white hover:bg-surface-elevated",
        ghost: "bg-transparent text-muted hover:text-white hover:bg-surface",
        outline:
          "border border-brand text-brand hover:bg-brand hover:text-white",
      },
      size: {
        default: "min-h-11 px-5",
        sm: "min-h-10 px-4 text-xs",
        lg: "min-h-12 px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { buttonVariants };
