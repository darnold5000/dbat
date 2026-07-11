import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
};

export function PrimaryCTA({
  href,
  children,
  className,
  variant = "primary",
  size = "default",
}: Props) {
  return (
    <Link href={href} className={cn(buttonVariants({ variant, size }), className)}>
      {children}
    </Link>
  );
}

export function SecondaryCTA(props: Props) {
  return <PrimaryCTA {...props} variant={props.variant ?? "secondary"} />;
}
