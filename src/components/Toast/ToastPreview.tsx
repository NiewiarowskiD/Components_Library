import React from "react";
import { useToast } from "./ToastProvider";
import { Button } from "@/components/Button/Button";

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
      <div className="flex flex-wrap gap-3 items-stretch bg-zinc-800/80 rounded-xl shadow-sm border border-zinc-700 p-6">
        {children}
      </div>
    </div>
  );
}

function ToastPreviewInner() {
  const { success, error, info, warning } = useToast();

  return (
    <div>
      <Section title="Toast Notifications — Click to Trigger">
        <Button
          text="Success Toast"
          color="#10B981"
          name="toast-success"
          onClick={() => success("Your changes have been saved successfully!")}
        />
        <Button
          text="Error Toast"
          color="#EF4444"
          name="toast-error"
          onClick={() => error("Failed to save changes. Please try again.")}
        />
        <Button
          text="Warning Toast"
          color="#F59E0B"
          name="toast-warning"
          onClick={() => warning("Your session will expire in 5 minutes.")}
        />
        <Button
          text="Info Toast"
          color="#3B82F6"
          name="toast-info"
          onClick={() => info("New version available. Click to update.")}
        />
      </Section>

      <Section title="Toast — Custom Duration">
        <Button
          text="5 Second Toast"
          variant="outline"
          color="#10B981"
          name="toast-long"
          onClick={() => success("This toast stays for 5 seconds", 5000)}
        />
        <Button
          text="Quick Toast (1s)"
          variant="outline"
          color="#3B82F6"
          name="toast-quick"
          onClick={() => info("This disappears in 1 second", 1000)}
        />
      </Section>

      <Section title="Toast — Multiple at Once">
        <Button
          text="Fire All Four"
          color="#A855F7"
          name="toast-all"
          onClick={() => {
            success("Success notification");
            setTimeout(() => error("Error notification"), 200);
            setTimeout(() => warning("Warning notification"), 400);
            setTimeout(() => info("Info notification"), 600);
          }}
        />
      </Section>
    </div>
  );
}

export function ToastPreview() {
  return <ToastPreviewInner />;
}

export default ToastPreview;
