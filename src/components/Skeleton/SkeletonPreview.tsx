import React from "react";
import { Skeleton } from "./Skeleton";

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
      <div className="flex flex-wrap gap-4 items-stretch bg-zinc-800/80 rounded-xl shadow-sm border border-zinc-700 p-6">
        {children}
      </div>
    </div>
  );
}

export function SkeletonPreview() {
  return (
    <div>
      <Section title="Skeleton — Basic Shapes">
        <Skeleton variant="rect" width="120px" height="120px" />
        <Skeleton variant="circle" width="64px" height="64px" />
        <div className="flex-1 min-w-[200px]">
          <Skeleton variant="text" width="60%" height="1.25rem" />
          <div className="mt-3">
            <Skeleton variant="text" rows={3} />
          </div>
        </div>
      </Section>

      <Section title="Skeleton — Card Placeholder">
        <div className="w-full max-w-xs rounded-xl border border-zinc-700 bg-zinc-900/60 p-5">
          <div className="flex items-center gap-3">
            <Skeleton variant="circle" width="48px" height="48px" />
            <div className="flex-1">
              <Skeleton variant="text" width="80%" height="1rem" />
              <div className="mt-2">
                <Skeleton variant="text" width="50%" height="0.75rem" />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Skeleton variant="rect" width="100%" height="140px" />
          </div>
          <div className="mt-4">
            <Skeleton variant="text" rows={2} />
          </div>
          <div className="mt-4 flex gap-2">
            <Skeleton variant="rect" width="80px" height="36px" />
            <Skeleton variant="rect" width="80px" height="36px" />
          </div>
        </div>
      </Section>

      <Section title="Skeleton — Text Lines">
        <div className="w-full max-w-md space-y-2">
          <Skeleton variant="text" width="100%" height="1rem" />
          <Skeleton variant="text" width="90%" height="1rem" />
          <Skeleton variant="text" width="95%" height="1rem" />
          <Skeleton variant="text" width="70%" height="1rem" />
        </div>
      </Section>
    </div>
  );
}

export default SkeletonPreview;
