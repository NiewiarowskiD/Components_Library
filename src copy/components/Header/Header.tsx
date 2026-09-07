import React from "react";
import "./Header.scss";

export type HeaderLayout =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";

export type HeaderSticky = "none" | "top" | "bottom";
export type HeaderRounded = "none" | "sm" | "md" | "lg" | "xl" | "full";
export type HeaderShadow = "none" | "sm" | "md" | "lg" | "xl";

export interface HeaderProps {
  color?: string;
  borderColor?: string;
  layout?: HeaderLayout;
  sticky?: HeaderSticky;
  rounded?: HeaderRounded;
  shadow?: HeaderShadow;
  height?: "sm" | "md" | "lg" | "xl" | "2xl" | "auto";
  padding?: "sm" | "md" | "lg" | "xl";
  children?: React.ReactNode;
  className?: string;
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

function getLayoutClass(layout: HeaderLayout): string {
  switch (layout) {
    case "start":
      return "justify-start";
    case "center":
      return "justify-center";
    case "end":
      return "justify-end";
    case "between":
      return "justify-between";
    case "around":
      return "justify-around";
    case "evenly":
      return "justify-evenly";
    default:
      return "justify-start";
  }
}

function getStickyClass(sticky: HeaderSticky): string {
  switch (sticky) {
    case "top":
      return "sticky top-0";
    case "bottom":
      return "sticky bottom-0";
    default:
      return "";
  }
}

function getRoundedClass(rounded: HeaderRounded): string {
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
    case "full":
      return "rounded-full";
    default:
      return "rounded-none";
  }
}

function getShadowClass(shadow: HeaderShadow): string {
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
      return "shadow-none";
  }
}

function getHeightClass(height: HeaderProps["height"]): string {
  switch (height) {
    case "sm":
      return "min-h-[3rem]";
    case "md":
      return "min-h-[4rem]";
    case "lg":
      return "min-h-[5rem]";
    case "xl":
      return "min-h-[6rem]";
    case "2xl":
      return "min-h-[8rem]";
    default:
      return "";
  }
}

function getPaddingClass(padding: HeaderProps["padding"]): string {
  switch (padding) {
    case "sm":
      return "px-3 py-2";
    case "md":
      return "px-4 py-3";
    case "lg":
      return "px-6 py-4";
    case "xl":
      return "px-8 py-6";
    default:
      return "px-4 py-3";
  }
}

export function Header({
  color = "#1e293b",
  borderColor = "transparent",
  layout = "start",
  sticky = "none",
  rounded = "none",
  shadow = "none",
  height = "auto",
  padding = "md",
  children,
  className = "",
}: HeaderProps) {
  const textColor = getContrastColor(color);
  const classes = [
    "header-base",
    getLayoutClass(layout),
    getStickyClass(sticky),
    getRoundedClass(rounded),
    getShadowClass(shadow),
    getHeightClass(height),
    getPaddingClass(padding),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header
      className={classes}
      style={{ backgroundColor: color, borderColor, color: textColor }}
    >
      {children}
    </header>
  );
}

export default Header;
