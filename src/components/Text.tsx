import React from "react";

export type TextSize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl";

export type TextWeight =
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold";

export type TextAlign = "left" | "center" | "right" | "justify";

export interface TextProps {
  content: string;
  color?: string;
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlign;
  italic?: boolean;
  underline?: boolean;
  uppercase?: boolean;
  lineHeight?: "tight" | "normal" | "relaxed" | "loose";
  letterSpacing?: "tight" | "normal" | "wide" | "wider" | "widest";
  className?: string;
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label";
}

function getSizeClass(size: TextSize): string {
  switch (size) {
    case "xs":
      return "text-xs";
    case "sm":
      return "text-sm";
    case "base":
      return "text-base";
    case "lg":
      return "text-lg";
    case "xl":
      return "text-xl";
    case "2xl":
      return "text-2xl";
    case "3xl":
      return "text-3xl";
    case "4xl":
      return "text-4xl";
    case "5xl":
      return "text-5xl";
    case "6xl":
      return "text-6xl";
    default:
      return "text-base";
  }
}

function getWeightClass(weight: TextWeight): string {
  switch (weight) {
    case "normal":
      return "font-normal";
    case "medium":
      return "font-medium";
    case "semibold":
      return "font-semibold";
    case "bold":
      return "font-bold";
    case "extrabold":
      return "font-extrabold";
    default:
      return "font-normal";
  }
}

function getAlignClass(align: TextAlign): string {
  switch (align) {
    case "left":
      return "text-left";
    case "center":
      return "text-center";
    case "right":
      return "text-right";
    case "justify":
      return "text-justify";
    default:
      return "text-left";
  }
}

function getLineHeightClass(lh: TextProps["lineHeight"]): string {
  switch (lh) {
    case "tight":
      return "leading-tight";
    case "normal":
      return "leading-normal";
    case "relaxed":
      return "leading-relaxed";
    case "loose":
      return "leading-loose";
    default:
      return "leading-normal";
  }
}

function getLetterSpacingClass(ls: TextProps["letterSpacing"]): string {
  switch (ls) {
    case "tight":
      return "tracking-tight";
    case "normal":
      return "tracking-normal";
    case "wide":
      return "tracking-wide";
    case "wider":
      return "tracking-wider";
    case "widest":
      return "tracking-widest";
    default:
      return "tracking-normal";
  }
}

export function Text({
  content,
  color = "#1e293b",
  size = "base",
  weight = "normal",
  align = "left",
  italic = false,
  underline = false,
  uppercase = false,
  lineHeight,
  letterSpacing,
  className = "",
  as = "p",
}: TextProps) {
  const Tag = as;
  const classes = [
    getSizeClass(size),
    getWeightClass(weight),
    getAlignClass(align),
    getLineHeightClass(lineHeight),
    getLetterSpacingClass(letterSpacing),
    italic ? "italic" : "",
    underline ? "underline" : "",
    uppercase ? "uppercase" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} style={{ color }}>
      {content}
    </Tag>
  );
}

export default Text;
