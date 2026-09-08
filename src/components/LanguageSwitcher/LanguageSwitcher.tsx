import React, { useState, useRef } from "react";
import { Globe, Check } from "lucide-react";
import { useClickOutside } from "@/hooks/useClickOutside";
import type { Language } from "@/i18n/translations";
import "./LanguageSwitcher.scss";

interface LanguageSwitcherProps {
  language: Language;
  onChange: (lang: Language) => void;
}

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "ENG", label: "English", flag: "EN" },
  { code: "PL", label: "Polski", flag: "PL" },
  { code: "DE", label: "Deutsch", flag: "DE" },
];

export function LanguageSwitcher({ language, onChange }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => setOpen(false), open);

  const current = languages.find((l) => l.code === language) || languages[0];

  return (
    <div className="lang-switcher" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="lang-trigger"
        aria-label="Change language"
        aria-expanded={open}
      >
        <Globe size={18} />
        <span className="lang-code">{current.flag}</span>
      </button>

      {open && (
        <ul className="lang-dropdown">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                onClick={() => {
                  onChange(lang.code);
                  setOpen(false);
                }}
                className={`lang-option ${lang.code === language ? "lang-option-active" : ""}`}
              >
                <span className="lang-option-flag">{lang.flag}</span>
                <span className="lang-option-label">{lang.label}</span>
                {lang.code === language && <Check size={14} className="lang-check" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitcher;
