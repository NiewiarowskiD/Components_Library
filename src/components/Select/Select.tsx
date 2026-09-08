import React, { useRef, useState, useId } from "react";
import { ChevronDown, Check } from "lucide-react";
import { useClickOutside } from "@/hooks/useClickOutside";
import "./Select.scss";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  error?: string;
  onChange?: (value: string) => void;
  className?: string;
  id?: string;
}

export function Select({
  options,
  value,
  placeholder = "Select an option",
  label,
  disabled = false,
  error,
  onChange,
  className = "",
  id,
}: SelectProps) {
  const [internalValue, setInternalValue] = useState<string | undefined>(value);
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectId = id || `select-${useId()}`;
  const hasError = Boolean(error);

  const currentValue = value !== undefined ? value : internalValue;
  const selectedOption = options.find((opt) => opt.value === currentValue);

  useClickOutside(containerRef, () => setOpen(false), open);

  const handleToggle = () => {
    if (!disabled) setOpen(!open);
  };

  const handleSelect = (val: string) => {
    if (value === undefined) setInternalValue(val);
    if (onChange) onChange(val);
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        if (!open) {
          setOpen(true);
          setFocusedIndex(0);
        } else if (focusedIndex >= 0) {
          handleSelect(options[focusedIndex].value);
        }
        break;
      case "Escape":
        setOpen(false);
        break;
      case "ArrowDown":
        e.preventDefault();
        if (!open) {
          setOpen(true);
          setFocusedIndex(0);
        } else {
          setFocusedIndex((prev) => Math.min(prev + 1, options.length - 1));
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (open) {
          setFocusedIndex((prev) => Math.max(prev - 1, 0));
        }
        break;
    }
  };

  const triggerClasses = [
    "select-trigger",
    hasError ? "select-error" : "",
    disabled ? "select-disabled" : "",
    open ? "select-open" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="select-wrapper" ref={containerRef}>
      {label && (
        <label htmlFor={selectId} className="select-label">
          {label}
        </label>
      )}
      <button
        id={selectId}
        type="button"
        disabled={disabled}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className={triggerClasses}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={selectedOption ? "select-value" : "select-placeholder"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          size={18}
          className={`select-chevron ${open ? "select-chevron-up" : ""}`}
        />
      </button>

      {open && (
        <ul className="select-dropdown" role="listbox">
          {options.map((opt, i) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === currentValue}
              onClick={() => handleSelect(opt.value)}
              className={`select-option ${
                opt.value === currentValue ? "select-option-selected" : ""
              } ${i === focusedIndex ? "select-option-focused" : ""}`}
            >
              <span>{opt.label}</span>
              {opt.value === currentValue && <Check size={16} />}
            </li>
          ))}
        </ul>
      )}

      {hasError && <span className="select-error-text">{error}</span>}
    </div>
  );
}

export default Select;
