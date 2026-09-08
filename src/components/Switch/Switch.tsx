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
  const dotSize = size === "sm" ? "1rem" : size === "lg" ? "1.75rem" : "1.375rem";

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
            transform: checked
              ? `translateX(calc(100% - ${dotSize} + 2px))`
              : "translateX(2px)",
          }}
        />
      </button>
    </div>
  );
}

export default Switch;
