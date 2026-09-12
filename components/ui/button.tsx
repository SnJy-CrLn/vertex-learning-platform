import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "text";
export type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-1.5 h-11 rounded-md font-medium text-body transition-colors disabled:cursor-not-allowed disabled:opacity-40";

const sizes: Record<ButtonSize, string> = {
  md: "px-3",
  lg: "px-4",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-400 disabled:hover:bg-primary-500",
  secondary:
    "border border-primary-500 text-primary-500 bg-transparent hover:bg-primary-100 disabled:hover:bg-transparent",
  tertiary:
    "border border-neutral-200 text-neutral-900 bg-white hover:bg-neutral-100 disabled:hover:bg-white",
  text: "text-neutral-900 bg-transparent hover:text-primary-500 disabled:hover:text-neutral-900 h-auto px-0",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  variant = "primary",
  size = "lg",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variant !== "text" && sizes[size], variants[variant], className)}
      {...props}
    />
  );
}
