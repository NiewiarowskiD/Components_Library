import React from "react";
import type { LucideIcon } from "lucide-react";
import "./Input.scss";

export type InputType = "text" | "password" | "search" | "email";

export interface InputProps {
  type?: InputType;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  readOnly?: boolean;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
  id?: string;
}

export function Input({
  type = "text",
  value,
  defaultValue,
  placeholder,
  label,
  error,
  disabled = false,
  readOnly = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onChange,
  onFocus,
  onBlur,
  className = "",
  id,
}: InputProps) {
  const inputId = id || `input-${React.useId()}`;
  const hasError = Boolean(error);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.value);
  };

  const inputClasses = [
    "input-field",
    hasError ? "input-error" : "",
    disabled ? "input-disabled" : "",
    readOnly ? "input-readonly" : "",
    LeftIcon ? "input-has-left-icon" : "",
    RightIcon ? "input-has-right-icon" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}
      <div className="input-container">
        {LeftIcon && (
          <span className="input-icon input-icon-left">
            <LeftIcon size={18} />
          </span>
        )}
        <input
          id={inputId}
          type={type}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className={inputClasses}
        />
        {RightIcon && (
          <span className="input-icon input-icon-right">
            <RightIcon size={18} />
          </span>
        )}
      </div>
      {hasError && <span className="input-error-text">{error}</span>}
    </div>
  );
}

export default Input;
