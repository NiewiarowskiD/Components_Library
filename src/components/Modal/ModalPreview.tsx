import React, { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { AlertTriangle, Info, Mail, Trash2 } from "lucide-react";

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
      <div className="flex flex-wrap gap-3 items-stretch bg-white dark:bg-zinc-800/80 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700 p-6">
        {children}
      </div>
    </div>
  );
}

export function ModalPreview() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [largeOpen, setLargeOpen] = useState(false);

  return (
    <div>
      <Section title="Modals — Basic Sizes">
        <Button text="Small Modal" color="#10B981" name="modal-sm" onClick={() => setBasicOpen(true)} />
        <Button text="Confirm Dialog" color="#EF4444" name="modal-confirm" onClick={() => setConfirmOpen(true)} />
        <Button text="Form Modal" color="#3B82F6" name="modal-form" onClick={() => setFormOpen(true)} />
        <Button text="Large Modal" variant="outline" color="#E4E4E7" name="modal-lg" onClick={() => setLargeOpen(true)} />
      </Section>

      {/* Small basic modal */}
      <Modal
        open={basicOpen}
        onClose={() => setBasicOpen(false)}
        title="Information"
        size="sm"
      >
        <div className="flex items-start gap-3">
          <Info size={24} className="text-emerald-400 flex-shrink-0 mt-0.5" />
          <p>
            This is a small modal dialog. It uses React Portals to render outside
            the main DOM tree, blocks background scrolling, and traps focus
            inside the dialog while open.
          </p>
        </div>
      </Modal>

      {/* Confirmation dialog */}
      <Modal
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title="Delete Account?"
        size="sm"
        footer={
          <>
            <Button text="Cancel" variant="outline" color="#E4E4E7" size="sm" onClick={() => setConfirmOpen(false)} />
            <Button text="Delete" color="#EF4444" size="sm" onClick={() => setConfirmOpen(false)} />
          </>
        }
      >
        <div className="flex items-start gap-3">
          <AlertTriangle size={24} className="text-red-400 flex-shrink-0 mt-0.5" />
          <p>
            Are you sure you want to delete your account? This action cannot be
            undone and all your data will be permanently removed.
          </p>
        </div>
      </Modal>

      {/* Form modal */}
      <Modal
        open={formOpen}
        onClose={() => setFormOpen(false)}
        title="Subscribe to Newsletter"
        size="md"
        footer={
          <>
            <Button text="Cancel" variant="outline" color="#E4E4E7" size="sm" onClick={() => setFormOpen(false)} />
            <Button text="Subscribe" color="#10B981" size="sm" onClick={() => setFormOpen(false)} />
          </>
        }
      >
        <div className="space-y-4">
          <Input label="Your Name" placeholder="John Doe" leftIcon={Mail} />
          <Input label="Email Address" type="email" placeholder="john@example.com" leftIcon={Mail} />
          <p className="text-xs text-zinc-500">
            We will never share your email with anyone. Unsubscribe at any time.
          </p>
        </div>
      </Modal>

      {/* Large modal */}
      <Modal
        open={largeOpen}
        onClose={() => setLargeOpen(false)}
        title="Terms and Conditions"
        size="lg"
        footer={
          <Button text="I Agree" color="#10B981" size="sm" onClick={() => setLargeOpen(false)} />
        }
      >
        <div className="space-y-4">
          <p>
            Welcome to our service. By using this application, you agree to the
            following terms and conditions. Please read them carefully before
            proceeding.
          </p>
          <p>
            <strong className="text-zinc-200">1. Acceptance of Terms:</strong> By
            accessing and using this service, you accept and agree to be bound by
            these terms. If you do not agree, please do not use our service.
          </p>
          <p>
            <strong className="text-zinc-200">2. Use of Service:</strong> You
            agree to use this service only for lawful purposes and in accordance
            with all applicable laws and regulations.
          </p>
          <p>
            <strong className="text-zinc-200">3. Privacy:</strong> Your privacy
            is important to us. Our privacy policy explains how we collect, use,
            and protect your information.
          </p>
          <p>
            <strong className="text-zinc-200">4. Limitation of Liability:</strong>{" "}
            We are not liable for any indirect, incidental, or consequential
            damages arising from your use of this service.
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default ModalPreview;
