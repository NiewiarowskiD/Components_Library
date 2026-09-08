import React from "react";
import "./Switch.scss";

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  color?: string;
  label?: string;
  className?: string;
}

export function Switch({
  checked,
  onChange,
  disabled = false,
  size = "md",
  color = "#10B981",
  label,
  className = "",
}: SwitchProps) {
  const sizeClass = `switch-${size}`;
  const thumbSize = size === "sm" ? 16 : size === "lg" ? 28 : 22;
  const trackWidth = size === "sm" ? 36 : size === "lg" ? 56 : 46;
  const thumbOffset = trackWidth - thumbSize - 4;

  const handleClick = () => {
    if (!disabled) onChange(!checked);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      if (!disabled) onChange(!checked);
    }
  };

  return (
    <div className={`switch-wrapper ${className}`}>
      {label && (
        <span
          className={`switch-label ${disabled ? "switch-label-disabled" : ""}`}
          onClick={handleClick}
        >
          {label}
        </span>
      )}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label || "toggle"}
        disabled={disabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={`switch-track ${sizeClass} ${checked ? "switch-on" : "switch-off"} ${disabled ? "switch-disabled" : ""}`}
        style={{
          backgroundColor: checked ? color : undefined,
          borderColor: checked ? color : undefined,
        }}
      >
        <span
          className="switch-thumb"
          style={{
            top: `calc(50% - ${thumbSize / 2}px)`,
            transform: `translateX(${checked ? thumbOffset : 2}px)`,
          }}
        />
      </button>
    </div>
  );
}

export default Switch;
