import React from "react";
import "./Badge.scss";

export type BadgeVariant =
  | "emerald"
  | "blue"
  | "amber"
  | "red"
  | "zinc"
  | "violet";

export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

function getVariantClass(variant: BadgeVariant): string {
  return `badge-${variant}`;
}

function getSizeClass(size: BadgeSize): string {
  switch (size) {
    case "sm":
      return "badge-sm";
    case "lg":
      return "badge-lg";
    default:
      return "badge-md";
  }
}

export function Badge({
  label,
  variant = "zinc",
  size = "md",
  dot = false,
  icon,
  className = "",
}: BadgeProps) {
  const dotColor =
    variant === "emerald"
      ? "#10B981"
      : variant === "blue"
        ? "#3B82F6"
        : variant === "amber"
          ? "#F59E0B"
          : variant === "red"
            ? "#EF4444"
            : variant === "violet"
              ? "#A855F7"
              : "#A1A1AA";

  return (
    <span
      className={`badge-base ${getVariantClass(variant)} ${getSizeClass(size)} ${className}`}
    >
      {dot && (
        <span
          className="badge-dot"
          style={{ backgroundColor: dotColor }}
        />
      )}
      {icon}
      {label}
    </span>
  );
}

export default Badge;
