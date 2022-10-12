import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface HeadingProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Heading({
  size = "md",
  asChild = false,
  children,
  className,
}: HeadingProps) {
  const Component = asChild ? Slot : "h2";

  const classes = clsx(
    "text-gray-100 font-bold font-sans",
    {
      "text-lg": size === "sm",
      "text-xl": size === "md",
      "text-2xl": size === "lg",
    },
    className
  );

  return <Component className={classes}>{children}</Component>;
}
