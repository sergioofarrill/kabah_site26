import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { BookingForm } from "@/components/booking-form";
import { FullBleed } from "@/components/full-bleed";
import { SiteNav } from "@/components/site-nav";
import { SocialIcon } from "@/components/social-icons";
import { Button } from "@/components/ui/button";
import { band } from "@/lib/band";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const spotify = band.socials.find((s) => s.id === "spotify")?.href ?? "#";

  return (
    <div id="top" className="bg-bg text-fg">
      <SiteNav />
      <main id="content">
        <FullBleed
          id="hero"
          image="/images/hero.jpg"
          alt="Kabah studio shoot"
          overlay="bottom"
          objectPosition="object-bottom"
          priority
        >
          <div className="flex flex-1 flex-col justify-end px-5 pb-10 pt-24 sm:px-8 sm:pb-14 lg:px-12">
            <p className="rise text-xs font-medium uppercase tracking-wider text-muted">
              {band.city} · Est. {band.formed}
            </p>
            <h1 className="rise rise-delay-1 mt-3 font-display text-hero font-medium uppercase leading-tight tracking-display">
              KABAH
              <br />
            </h1>
            <p className="rise rise-delay-2 mt-4 max-w-md text-base text-muted sm:text-lg">
              {band.tagline} Featured album <em className="text-fg">{band.album.title}</em>
            </p>
            <div className="rise rise-delay-3 mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#music">Escuchar</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#booking">Booking</a>
              </Button>
            </div>
          </div>
        </FullBleed>

        <FullBleed
          id="band"
          image="/images/about.jpg"
          alt="Kabah by Wesootmuch 2018"
          overlay="left"
          objectPosition="object-center"
        >
          <div className="flex flex-1 flex-col justify-end gap-10 px-5 py-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-20">
            <div className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-wider text-muted">El Grupo</p>
              <h2 className="mt-3 font-display text-section font-medium uppercase leading-tight tracking-display">
                Un sueño
                <br />
                que continua.
              </h2>
              <p className="mt-5 max-w-prose text-sm leading-normal text-muted sm:text-base">
                {band.bio}
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-5 sm:grid-cols-4 lg:grid-cols-1 lg:gap-y-4">
              {band.members.map((member) => (
                <li key={member.name}>
                  <p className="font-display text-xl font-medium uppercase tracking-display sm:text-2xl">
                    {member.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted">{member.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </FullBleed>

        <FullBleed
          id="music"
          image="/images/live.jpg"
          alt="Kabah performing live at 90s Pop Tour"
          overlay="bottom"
          objectPosition="object-center"
        >
          <div className="flex flex-1 flex-col justify-end px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
            <div className="flex max-w-3xl flex-col gap-8 sm:flex-row sm:items-end">
              <img
                src="/images/album.jpg"
                alt="Glass Heart album artwork"
                width={288}
                height={288}
                className="size-32 rounded-md object-cover sm:size-40"
              />
              <div className="flex-1">
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  Featured Album · {band.album.year}
                </p>
                <h2 className="mt-2 font-display text-section font-medium uppercase leading-tight tracking-display">
                  {band.album.title}
                </h2>
                <p className="mt-3 max-w-md text-sm text-muted">{band.album.note}</p>
                <Button asChild size="lg" className="mt-5">
                  <a href={spotify} target="_blank" rel="noopener noreferrer">
                    Escucha en Spotify
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </div>
            </div>
            <ol className="mt-10 grid max-w-3xl grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2">
              {band.album.tracks.map((track, i) => (
                <li
                  key={track}
                  className="flex items-baseline justify-between border-b border-line py-2 text-sm"
                >
                  <span className="text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 px-4 text-fg">{track}</span>
                </li>
              ))}
            </ol>
          </div>
        </FullBleed>

        <FullBleed
          id="booking"
          image="/images/studio.jpg"
          alt="Kabah studio Photo"
          overlay="split"
          objectPosition="object-center"
        >
          <div className="flex flex-1 flex-col justify-start px-5 pb-16 pt-24 sm:px-8 lg:px-12 lg:pb-20">
            <p className="text-xs font-medium uppercase tracking-wider text-muted">Booking</p>
            <h2 className="mt-3 max-w-xl font-display text-section font-medium uppercase leading-tight tracking-display">
              Quieres bookear a Kabah?
            </h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start">
              <div className="flex flex-col gap-6">
                <p className="max-w-md text-sm leading-normal text-muted sm:text-base">
                  Worldwide representation through {band.agent.company}.
                </p>
                <dl className="grid gap-4 text-sm">
                  <Info
                    icon={<MapPin className="size-4" />}
                    label="Territory"
                    value={band.agent.territory}
                  />
                  <Info
                    icon={<Mail className="size-4" />}
                    label="Booking"
                    value={band.emails.booking}
                    href={`mailto:${band.emails.booking}`}
                  />
                  <Info
                    icon={<Phone className="size-4" />}
                    label={band.agent.name}
                    value={band.agent.phone}
                    href={`tel:${band.agent.phone.replace(/[^\d+]/g, "")}`}
                  />
                  <Info
                    icon={<Mail className="size-4" />}
                    label="Press"
                    value={band.emails.press}
                    href={`mailto:${band.emails.press}`}
                  />
                </dl>
              </div>
              {/* <BookingForm />*/}
            </div>
          </div>
        </FullBleed>

        <FullBleed
          id="connect"
          image="/images/street.jpg"
          alt="Kabah posing on a wet city street at night"
          overlay="bottom"
          objectPosition="object-center"
        >
          <div className="flex flex-1 flex-col justify-end px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
            <p className="text-xs font-medium uppercase tracking-wider text-muted">Social</p>
            <h2 className="mt-3 font-display text-section font-medium uppercase leading-tight tracking-display">
              Conecta
            </h2>
            <ul className="mt-8 flex max-w-xl flex-col">
              {band.socials.map((social) => (
                <li key={social.id} className="border-t border-line last:border-b">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-14 items-center justify-between text-fg transition-colors duration-150 hover:text-accent sm:h-16"
                  >
                    <span className="flex items-center gap-3">
                      <SocialIcon id={social.id} />
                      <span className="font-display text-xl font-medium uppercase tracking-display sm:text-2xl">
                        {social.label}
                      </span>
                    </span>
                    <ArrowUpRight className="size-5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
            <footer className="mt-12 flex flex-col gap-2 text-xs uppercase tracking-wide text-muted sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {band.current} {band.name} · {band.city}
              </p>
              <p>
                Management{" "}
                <a
                  className="text-fg underline decoration-line underline-offset-4"
                  href={`mailto:${band.emails.management}`}
                >
                  {band.emails.management}
                </a>
              </p>
            </footer>
          </div>
        </FullBleed>
      </main>
    </div>
  );
}

function Info({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = href ? (
    <a href={href} className="text-fg underline decoration-line underline-offset-4">
      {value}
    </a>
  ) : (
    <span className="text-fg">{value}</span>
  );

  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-muted" aria-hidden="true">
        {icon}
      </span>
      <div>
        <dt className="text-xs uppercase tracking-wide text-muted">{label}</dt>
        <dd className="mt-1">{content}</dd>
      </div>
    </div>
  );
}
