import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={cn("size-5", className)}
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("size-5", className)}
      aria-hidden="true"
    >
      <path d="M14.2 3h2.3c.2 1.9 1.4 3.5 3.5 4.1v2.3c-1.3 0-2.5-.4-3.5-1.1v6.6c0 3.4-2.7 6.1-6.1 6.1S4.3 18.3 4.3 14.9 7 8.8 10.4 8.8c.3 0 .6 0 .9.1v2.5c-.3-.1-.6-.1-.9-.1-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6V3z" />
    </svg>
  );
}

export function SpotifyIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("size-5", className)}
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.6 14.4c-.2.3-.5.4-.8.2-2.2-1.3-5-1.6-8.3-.9-.3.1-.6-.1-.7-.4-.1-.3.1-.6.4-.7 3.6-.8 6.7-.4 9.2 1 .3.2.4.5.2.8zm1.2-2.7c-.2.4-.6.5-1 .3-2.5-1.5-6.4-2-9.4-1.1-.4.1-.8-.1-.9-.5-.1-.4.1-.8.5-.9 3.4-1 7.7-.5 10.6 1.2.3.2.4.7.2 1zm.1-2.8C14.6 9 8.9 8.8 6 9.6c-.5.1-1-.1-1.1-.6-.2-.5.1-1 .6-1.1 3.4-.9 9.6-.7 13.4 1.3.4.3.6.9.3 1.3-.2.4-.8.6-1.3.3z" />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("size-5", className)}
      aria-hidden="true"
    >
      <path d="M22.5 7.2a3.1 3.1 0 0 0-2.2-2.2C18.4 4.6 12 4.6 12 4.6s-6.4 0-8.3.4A3.1 3.1 0 0 0 1.5 7.2 32 32 0 0 0 1.1 12a32 32 0 0 0 .4 4.8 3.1 3.1 0 0 0 2.2 2.2c1.9.4 8.3.4 8.3.4s6.4 0 8.3-.4a3.1 3.1 0 0 0 2.2-2.2 32 32 0 0 0 .4-4.8 32 32 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("size-5", className)}
      aria-hidden="true"
    >
      <path d="M17.6 3h2.8l-6.1 7 7.2 11H16l-4.3-6.3L6.4 21H3.6l6.5-7.5L3 3h5.6l3.9 5.8L17.6 3zm-1 16.2h1.6L7.5 4.7H5.8l10.8 14.5z" />
    </svg>
  );
}

const icons = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  spotify: SpotifyIcon,
  youtube: YoutubeIcon,
  x: XIcon,
} as const;

export type SocialId = keyof typeof icons;

export function SocialIcon({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const Icon = icons[id as SocialId];
  if (!Icon) return null;
  return <Icon className={className} />;
}
