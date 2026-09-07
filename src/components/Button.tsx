import React from "react";
import type { LucideIcon } from "lucide-react";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVariant = "solid" | "outline";
export type ButtonRounded = "none" | "sm" | "md" | "lg" | "full";
export type IconPosition = "left" | "right";

export interface ButtonClickData {
  name?: string;
  timestamp: number;
  event: React.MouseEvent<HTMLButtonElement>;
}

export interface ButtonProps {
  text?: string;
  icon?: LucideIcon;
  iconPosition?: IconPosition;
  color?: string;
  outlineColor?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: ButtonRounded;
  disabled?: boolean;
  name?: string;
  onClick?: (data: ButtonClickData) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

function hexToRgb(hex: string): [number, number, number] | null {
  const cleaned = hex.replace("#", "");
  if (cleaned.length === 3) {
    const r = parseInt(cleaned[0] + cleaned[0], 16);
    const g = parseInt(cleaned[1] + cleaned[1], 16);
    const b = parseInt(cleaned[2] + cleaned[2], 16);
    return [r, g, b];
  }
  if (cleaned.length === 6) {
    const r = parseInt(cleaned.slice(0, 2), 16);
    const g = parseInt(cleaned.slice(2, 4), 16);
    const b = parseInt(cleaned.slice(4, 6), 16);
    return [r, g, b];
  }
  return null;
}

function darken(hex: string, amount: number): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  const [r, g, b] = rgb.map((c) => Math.max(0, Math.round(c * (1 - amount))));
  return `rgb(${r}, ${g}, ${b})`;
}

function getContrastColor(hex: string): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return "#ffffff";
  const [r, g, b] = rgb;
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.55 ? "#1a1a1a" : "#ffffff";
}

interface ButtonStyles {
  backgroundColor: string;
  color: string;
  borderColor: string;
  hoverBg: string;
}

function getStyles(
  color: string,
  outlineColor: string | undefined,
  variant: ButtonVariant
): ButtonStyles {
  const isOutline = variant === "outline";
  const borderColor = outlineColor || color;
  const textColor = getContrastColor(color);

  if (isOutline) {
    return {
      backgroundColor: "transparent",
      color: borderColor,
      borderColor: borderColor,
      hoverBg: `${borderColor}1a`,
    };
  }

  return {
    backgroundColor: color,
    color: textColor,
    borderColor: color,
    hoverBg: darken(color, 0.12),
  };
}

function getSizeClasses(size: ButtonSize): {
  padding: string;
  textSize: string;
  iconSize: number;
} {
  switch (size) {
    case "sm":
      return { padding: "px-3 py-1.5", textSize: "text-sm", iconSize: 16 };
    case "lg":
      return { padding: "px-7 py-3.5", textSize: "text-lg", iconSize: 22 };
    default:
      return { padding: "px-5 py-2.5", textSize: "text-base", iconSize: 18 };
  }
}

function getRoundedClass(rounded: ButtonRounded): string {
  switch (rounded) {
    case "none":
      return "rounded-none";
    case "sm":
      return "rounded-sm";
    case "md":
      return "rounded-md";
    case "lg":
      return "rounded-lg";
    case "full":
      return "rounded-full";
    default:
      return "rounded-md";
  }
}

export function Button({
  text,
  icon: Icon,
  iconPosition = "left",
  color = "#3b82f6",
  outlineColor,
  variant = "solid",
  size = "md",
  rounded = "md",
  disabled = false,
  name,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const styles = getStyles(color, outlineColor, variant);
  const sizeClasses = getSizeClasses(size);
  const roundedClass = getRoundedClass(rounded);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick({ name, timestamp: Date.now(), event });
    }
  };

  const iconEl = Icon ? (
    <Icon
      size={sizeClasses.iconSize}
      strokeWidth={2}
      className={text ? (iconPosition === "left" ? "mr-2" : "ml-2") : ""}
    />
  ) : null;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={`inline-flex items-center justify-center font-semibold transition-all duration-200 border-2 select-none ${sizeClasses.padding} ${sizeClasses.textSize} ${roundedClass} ${disabled ? "opacity-50 cursor-not-allowed" : "hover:brightness-110 active:scale-95 cursor-pointer"} ${className}`}
      style={{
        backgroundColor: styles.backgroundColor,
        color: styles.color,
        borderColor: styles.borderColor,
      }}
    >
      {iconPosition === "left" && iconEl}
      {text}
      {iconPosition === "right" && iconEl}
    </button>
  );
}

export default Button;
