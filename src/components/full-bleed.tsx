import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Overlay = "left" | "bottom" | "full" | "split";

const overlayClass: Record<Overlay, string> = {
  left: "bg-linear-to-r from-bg/90 via-bg/55 to-bg/10",
  bottom: "bg-linear-to-t from-bg via-bg/55 to-bg/10",
  full: "bg-bg/55",
  split: "bg-linear-to-r from-bg/92 via-bg/70 to-bg/25",
};

export function FullBleed({
  id,
  image,
  alt,
  overlay = "bottom",
  objectPosition = "object-center",
  priority = false,
  children,
  className,
}: {
  id: string;
  image: string;
  alt: string;
  overlay?: Overlay;
  objectPosition?: string;
  priority?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex min-h-dvh snap-start flex-col justify-end overflow-hidden",
        className,
      )}
    >
      <img
        src={image}
        alt={alt}
        className={cn(
          "absolute inset-0 size-full object-cover",
          objectPosition,
        )}
        width={1792}
        height={1008}
        decoding={priority ? "sync" : "async"}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "low"}
      />
      <div className={cn("absolute inset-0", overlayClass[overlay])} />
      <div className="relative z-10 flex min-h-dvh w-full flex-col">
        {children}
      </div>
    </section>
  );
}
