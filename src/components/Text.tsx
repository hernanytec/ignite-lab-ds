import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Text({
  size = "md",
  asChild = false,
  children,
  className,
}: TextProps) {
  const Component = asChild ? Slot : "span";

  const classes = clsx(
    "text-gray-100 font-sans",
    {
      "text-xs": size === "sm",
      "text-sm": size === "md",
      "text-md": size === "lg",
    },
    className
  );

  return <Component className={classes}>{children}</Component>;
}
