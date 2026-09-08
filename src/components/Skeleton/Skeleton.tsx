import React from "react";
import "./Skeleton.scss";

export type SkeletonVariant = "text" | "rect" | "circle";

export interface SkeletonProps {
  variant?: SkeletonVariant;
  width?: string;
  height?: string;
  rows?: number;
  className?: string;
}

export function Skeleton({
  variant = "rect",
  width,
  height,
  rows = 1,
  className = "",
}: SkeletonProps) {
  if (variant === "text" && rows > 1) {
    return (
      <div className={`skeleton-rows ${className}`}>
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className="skeleton-base skeleton-text"
            style={{
              width: i === rows - 1 ? "70%" : "100%",
              height: height || "0.875rem",
            }}
          />
        ))}
      </div>
    );
  }

  const style: React.CSSProperties = {};
  if (width) style.width = width;
  if (height) style.height = height;

  return (
    <div
      className={`skeleton-base skeleton-${variant} ${className}`}
      style={style}
    />
  );
}

export default Skeleton;
