import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

export interface WebsiteCopy {
  title: string;
  description: string;
}

interface WebsitePreviewProps {
  isDark: boolean;
  pageLabel: string;
  previewUnavailable: string;
  visitLabel: string;
  websiteCopies: WebsiteCopy[];
}

interface WebsiteCardProps {
  isDark: boolean;
  pageLabel: string;
  previewUnavailable: string;
  visitLabel: string;
  website: Website;
  copy: WebsiteCopy;
}

interface Website {
  key: string;
  pages: string[];
  tone: string;
}

const websites: Website[] = [
  {
    key: "adamus",
    pages: [
      "https://www.radcaprawnylegnica.com.pl/",
      "https://www.radcaprawnylegnica.com.pl/o-kancelarii",
      "https://www.radcaprawnylegnica.com.pl/specjalizacje",
    ],
    tone: "from-sky-500 to-blue-700",
  },
  {
    key: "martyna",
    pages: [
      "https://kancelaria-martyna.vercel.app/",
      "https://kancelaria-martyna.vercel.app/specjalizacje",
      "https://kancelaria-martyna.vercel.app/porady-online",
    ],
    tone: "from-amber-500 to-orange-700",
  },
  {
    key: "remonty",
    pages: [
      "https://remonty-theta.vercel.app/",
      "https://remonty-theta.vercel.app/uslugi",
    ],
    tone: "from-emerald-500 to-teal-700",
  },
];

function WebsiteCard({ isDark, pageLabel, previewUnavailable, visitLabel, website, copy }: WebsiteCardProps) {
  const [activePage, setActivePage] = useState(0);
  const pageUrl = website.pages[activePage];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePage((page) => (page + 1) % website.pages.length);
    }, 10000);

    return () => window.clearInterval(timer);
  }, [website.pages.length]);

  return (
    <article
      className={`group overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isDark ? "border-zinc-700 bg-zinc-900" : "border-zinc-200 bg-white"}`}
    >
      <div className={`relative overflow-hidden bg-gradient-to-br ${website.tone}`}>
        <div className="website-preview-window">
          <img
            key={pageUrl}
            src={`https://image.thum.io/get/fullpage/${pageUrl}`}
            alt={`${copy.title} website preview`}
            loading="lazy"
            referrerPolicy="no-referrer"
            onLoad={(event) => {
              event.currentTarget.style.display = "block";
              event.currentTarget.parentElement?.classList.remove("preview-unavailable");
            }}
            onError={(event) => {
              event.currentTarget.style.display = "none";
              event.currentTarget.parentElement?.classList.add("preview-unavailable");
            }}
          />
          <span className="website-preview-fallback">{previewUnavailable}</span>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/25 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
          {pageLabel} {activePage + 1} / {website.pages.length}
        </span>
      </div>

      <div className="p-5">
        <h3 className={`text-lg font-bold ${isDark ? "text-zinc-100" : "text-zinc-900"}`}>{copy.title}</h3>
        <p className={`mt-2 text-sm leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>{copy.description}</p>
        <div className="mt-4 flex items-center gap-1.5" aria-label={`${pageLabel} ${activePage + 1} of ${website.pages.length}`}>
          {website.pages.map((page, index) => (
            <span
              key={page}
              className={`h-1.5 rounded-full transition-all duration-300 ${index === activePage ? "w-6 bg-blue-500" : "w-1.5 bg-zinc-300 dark:bg-zinc-700"}`}
            />
          ))}
        </div>
        <a
          href={pageUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-500 transition-colors hover:text-blue-600"
        >
          {visitLabel}
          <ExternalLink size={16} />
        </a>
      </div>
    </article>
  );
}

export function WebsitePreview({ isDark, pageLabel, previewUnavailable, visitLabel, websiteCopies }: WebsitePreviewProps) {
  return (
    <div className="space-y-8">
      {websites.map((website, index) => (
        <WebsiteCard
          key={website.key}
          isDark={isDark}
          pageLabel={pageLabel}
          previewUnavailable={previewUnavailable}
          visitLabel={visitLabel}
          website={website}
          copy={websiteCopies[index]}
        />
      ))}
    </div>
  );
}

export default WebsitePreview;
