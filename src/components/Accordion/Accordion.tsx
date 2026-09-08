import React, { useState, useId } from "react";
import { ChevronDown } from "lucide-react";
import "./Accordion.scss";

export interface AccordionItemData {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItemData[];
  defaultOpen?: string | string[];
  multiple?: boolean;
  className?: string;
}

export function Accordion({
  items,
  defaultOpen,
  multiple = false,
  className = "",
}: AccordionProps) {
  const initial: string[] = defaultOpen
    ? Array.isArray(defaultOpen)
      ? defaultOpen
      : [defaultOpen]
    : [];

  const [openIds, setOpenIds] = useState<string[]>(initial);

  const isOpen = (id: string) => openIds.includes(id);

  const toggle = (id: string) => {
    if (isOpen(id)) {
      setOpenIds(openIds.filter((openId) => openId !== id));
    } else {
      if (multiple) {
        setOpenIds([...openIds, id]);
      } else {
        setOpenIds([id]);
      }
    }
  };

  return (
    <div className={`accordion-wrapper ${className}`}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          open={isOpen(item.id)}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  );
}

function AccordionItem({
  item,
  open,
  onToggle,
}: {
  item: AccordionItemData;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className={`accordion-item ${open ? "accordion-item-open" : ""}`}>
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="accordion-header"
      >
        <span className="accordion-title">{item.title}</span>
        <ChevronDown
          size={20}
          className={`accordion-chevron ${open ? "accordion-chevron-open" : ""}`}
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="accordion-panel"
      >
        <div className="accordion-content">{item.content}</div>
      </div>
    </div>
  );
}

export default Accordion;
