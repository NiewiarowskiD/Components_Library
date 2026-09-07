import React, { useState } from "react";
import { X } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import "./Card.scss";

export type CardRounded = "none" | "sm" | "md" | "lg" | "xl";
export type CardShadow = "none" | "sm" | "md" | "lg" | "xl";

export interface CardProps {
  title?: string;
  titleIcon?: LucideIcon;
  color?: string;
  borderColor?: string;
  rounded?: CardRounded;
  shadow?: CardShadow;
  closable?: boolean;
  onClose?: () => void;
  image?: string;
  imageAlt?: string;
  imageHeight?: string;
  children?: React.ReactNode;
  className?: string;
}

function getRoundedClass(rounded: CardRounded): string {
  switch (rounded) {
    case "none":
      return "rounded-none";
    case "sm":
      return "rounded-sm";
    case "md":
      return "rounded-md";
    case "lg":
      return "rounded-lg";
    case "xl":
      return "rounded-xl";
    default:
      return "rounded-lg";
  }
}

function getShadowClass(shadow: CardShadow): string {
  switch (shadow) {
    case "none":
      return "shadow-none";
    case "sm":
      return "shadow-sm";
    case "md":
      return "shadow-md";
    case "lg":
      return "shadow-lg";
    case "xl":
      return "shadow-xl";
    default:
      return "shadow-md";
  }
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

function getContrastColor(hex: string): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return "#1e293b";
  const [r, g, b] = rgb;
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.55 ? "#1e293b" : "#ffffff";
}

export function Card({
  title = "Title",
  titleIcon: TitleIcon,
  color = "#ffffff",
  borderColor = "#e2e8f0",
  rounded = "lg",
  shadow = "md",
  closable = true,
  onClose,
  image,
  imageAlt = "",
  imageHeight = "h-40",
  children,
  className = "",
}: CardProps) {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  const textColor = getContrastColor(color);
  const roundedClass = getRoundedClass(rounded);
  const shadowClass = getShadowClass(shadow);
  const isLightBg = textColor === "#1e293b";
  const subtitleColor = isLightBg ? "opacity-60" : "opacity-80";
  const closeHover = isLightBg ? "hover:bg-slate-200" : "hover:bg-white/20";

  const handleClose = () => {
    setClosed(true);
    if (onClose) onClose();
  };

  return (
    <div
      className={`card-base ${roundedClass} ${shadowClass} ${className}`}
      style={{
        backgroundColor: color,
        borderColor: borderColor,
        color: textColor,
      }}
    >
      <div className="card-header">
        <div className="card-title-row">
          {TitleIcon && (
            <TitleIcon
              size={20}
              strokeWidth={2}
              className="flex-shrink-0"
            />
          )}
          <h3 className="font-bold text-lg leading-tight">{title}</h3>
        </div>
        {closable && (
          <button
            type="button"
            onClick={handleClose}
            className={`card-close-btn ${closeHover}`}
            style={{ color: textColor }}
            aria-label="Close card"
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        )}
      </div>

      {image && (
        <div className="card-image-wrapper">
          <div className={`overflow-hidden ${roundedClass} ${imageHeight}`}>
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {children && (
        <div className={`card-content ${subtitleColor}`}>{children}</div>
      )}
    </div>
  );
}

export default Card;
