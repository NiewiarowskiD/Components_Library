import React from "react";
import { Card } from "./Card";
import {
  Download,
  Bell,
  Star,
  TrendingUp,
  ImageIcon,
  FileText,
} from "lucide-react";
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

export function CardPreview() {
  return (
    <div>
      <Section title="Cards — Basic with Title & Close">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <Card title="My First Card" color="#18181B" borderColor="#27272A">
            <p className="text-sm">You can put any content here — text, images, or other components.</p>
          </Card>
          <Card title="Dark Card" color="#09090B" borderColor="#27272A">
            <p className="text-sm">This card has a dark background with automatically contrasting text.</p>
          </Card>
        </div>
      </Section>

      <Section title="Cards — Custom HEX Colors">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <Card title="Emerald" color="#10B981" borderColor="#059669" shadow="lg">
            <p className="text-sm">Shadow set to large for a more elevated feel.</p>
          </Card>
          <Card title="Green" color="#22c55e" borderColor="#16a34a" shadow="sm">
            <p className="text-sm">Shadow set to small for a subtle look.</p>
          </Card>
          <Card title="Amber" color="#f59e0b" borderColor="#d97706" shadow="xl">
            <p className="text-sm">Shadow set to extra large for maximum depth.</p>
          </Card>
        </div>
      </Section>

      <Section title="Cards — Title Icons">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <Card title="Trending" titleIcon={TrendingUp} color="#18181B" borderColor="#27272A">
            <p className="text-sm">Add an icon next to the title for extra context.</p>
          </Card>
          <Card title="Starred" titleIcon={Star} color="#27272A" borderColor="#3F3F46">
            <p className="text-sm">Any lucide-react icon can be used as the title icon.</p>
          </Card>
          <Card title="Document" titleIcon={FileText} color="#09090B" borderColor="#27272A">
            <p className="text-sm">Text color auto-adjusts to the background.</p>
          </Card>
        </div>
      </Section>

      <Section title="Cards — With Images">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <Card
            title="Mountain View"
            titleIcon={ImageIcon}
            color="#18181B"
            borderColor="#27272A"
            image="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600"
            imageAlt="Mountain landscape"
            imageHeight="h-44"
          >
            <p className="text-sm">Add an image at the top of the card. The image height is adjustable.</p>
          </Card>
          <Card
            title="Ocean Sunset"
            titleIcon={ImageIcon}
            color="#18181B"
            borderColor="#27272A"
            image="https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=600"
            imageAlt="Ocean sunset"
            imageHeight="h-44"
            shadow="lg"
          >
            <p className="text-sm">Images are cropped to fit and use rounded corners matching the card.</p>
          </Card>
        </div>
      </Section>

      <Section title="Cards — Roundness Levels">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          <Card title="No Round" rounded="none" color="#18181B" borderColor="#27272A">
            <p className="text-sm">Sharp corners.</p>
          </Card>
          <Card title="Medium" rounded="md" color="#18181B" borderColor="#27272A">
            <p className="text-sm">Medium rounding.</p>
          </Card>
          <Card title="Extra Large" rounded="xl" color="#18181B" borderColor="#27272A">
            <p className="text-sm">Very rounded corners.</p>
          </Card>
        </div>
      </Section>

      <Section title="Cards — With Buttons Inside">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <Card title="Action Card" titleIcon={Bell} color="#18181B" borderColor="#27272A" shadow="lg">
            <p className="text-sm mb-3">You can place buttons or any other content inside a card.</p>
            <Button text="Subscribe" icon={Bell} color="#10B981" size="sm" name="subscribe" />
          </Card>
          <Card title="Download Center" titleIcon={Download} color="#0891b2" borderColor="#0e7490" shadow="lg">
            <p className="text-sm mb-3">Buttons inside cards work just like they do anywhere else.</p>
            <Button text="Download" icon={Download} color="#ffffff" size="sm" name="card-download" />
          </Card>
        </div>
      </Section>

      <Section title="Cards — Non-Closable">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <Card title="Persistent" closable={false} color="#18181B" borderColor="#27272A">
            <p className="text-sm">This card has no close button — it stays visible permanently.</p>
          </Card>
          <Card title="Always Visible" closable={false} color="#10B981" borderColor="#059669">
            <p className="text-sm">Set closable to false to hide the X button.</p>
          </Card>
        </div>
      </Section>
    </div>
  );
}

export default CardPreview;
