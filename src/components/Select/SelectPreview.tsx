import React, { useState } from "react";
import { Select } from "./Select";
import type { SelectOption } from "./Select";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
        {title}
      </h2>
      <div className="flex flex-wrap gap-5 items-start bg-white dark:bg-zinc-800/80 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700 p-6">
        {children}
      </div>
    </div>
  );
}

const frameworkOptions: SelectOption[] = [
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "solid", label: "Solid" },
];

const countryOptions: SelectOption[] = [
  { value: "ch", label: "Switzerland" },
  { value: "de", label: "Germany" },
  { value: "pl", label: "Poland" },
  { value: "fr", label: "France" },
  { value: "us", label: "United States" },
  { value: "jp", label: "Japan" },
];

export function SelectPreview() {
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [country, setCountry] = useState<string>("ch");

  return (
    <div>
      <Section title="Select — Basic Dropdown">
        <div className="w-full max-w-xs">
          <Select
            label="Favorite Framework"
            placeholder="Choose a framework"
            options={frameworkOptions}
            value={selected}
            onChange={setSelected}
          />
        </div>
        <div className="w-full max-w-xs">
          <Select
            label="Country"
            options={countryOptions}
            value={country}
            onChange={setCountry}
          />
        </div>
      </Section>

      <Section title="Select — With Preselected Value">
        <div className="w-full max-w-xs">
          <Select
            label="Country"
            options={countryOptions}
            value="pl"
          />
        </div>
      </Section>

      <Section title="Select — Error State">
        <div className="w-full max-w-xs">
          <Select
            label="Framework"
            placeholder="Choose a framework"
            options={frameworkOptions}
            error="Please select a framework"
          />
        </div>
      </Section>

      <Section title="Select — Disabled">
        <div className="w-full max-w-xs">
          <Select
            label="Disabled Select"
            placeholder="Cannot interact"
            options={frameworkOptions}
            disabled
          />
        </div>
      </Section>
    </div>
  );
}

export default SelectPreview;
