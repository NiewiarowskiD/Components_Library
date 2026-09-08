import React, { useState } from "react";
import { Input } from "./Input";
import { Mail, Lock, Search, Eye, EyeOff, User, AlertCircle } from "lucide-react";

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

export function InputPreview() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("invalid-email");

  return (
    <div>
      <Section title="Inputs — Basic Text">
        <div className="w-full max-w-xs">
          <Input label="Full Name" placeholder="John Doe" leftIcon={User} value={text} onChange={setText} />
        </div>
        <div className="w-full max-w-xs">
          <Input label="Email" type="email" placeholder="john@example.com" leftIcon={Mail} />
        </div>
      </Section>

      <Section title="Inputs — Search">
        <div className="w-full max-w-sm">
          <Input
            label="Search"
            type="search"
            placeholder="Search components..."
            leftIcon={Search}
            value={search}
            onChange={setSearch}
          />
        </div>
      </Section>

      <Section title="Inputs — Password with Toggle">
        <div className="w-full max-w-xs">
          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            leftIcon={Lock}
            rightIcon={showPassword ? EyeOff : Eye}
            onChange={() => {}}
            onFocus={() => {}}
            onBlur={() => {}}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="mt-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
          >
            Toggle visibility
          </button>
        </div>
      </Section>

      <Section title="Inputs — Validation Error">
        <div className="w-full max-w-xs">
          <Input
            label="Email"
            type="email"
            placeholder="john@example.com"
            leftIcon={Mail}
            value={email}
            onChange={setEmail}
            error="Please enter a valid email address"
          />
        </div>
        <div className="w-full max-w-xs">
          <Input
            label="Username"
            placeholder="Choose a username"
            leftIcon={User}
            rightIcon={AlertCircle}
            error="This username is already taken"
          />
        </div>
      </Section>

      <Section title="Inputs — States">
        <div className="w-full max-w-xs">
          <Input label="Disabled" placeholder="Cannot edit" disabled />
        </div>
        <div className="w-full max-w-xs">
          <Input label="Read Only" defaultValue="Read-only value" readOnly />
        </div>
        <div className="w-full max-w-xs">
          <Input label="Focused Style" placeholder="Click to focus" />
        </div>
      </Section>
    </div>
  );
}

export default InputPreview;
