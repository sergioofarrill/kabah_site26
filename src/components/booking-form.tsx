import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { band, showTypes, type ShowType } from "@/lib/band";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email."),
  venue: z.string().min(2, "Venue or organization is required."),
  city: z.string().min(2, "City is required."),
  date: z.string().min(1, "Pick a preferred date."),
  showType: z.enum(showTypes),
  message: z.string().min(10, "Tell us a little more (at least 10 characters)."),
});

type FormValues = z.infer<typeof schema>;

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      venue: "",
      city: "",
      date: "",
      showType: "Club",
      message: "",
    },
  });

  const showType = watch("showType");

  function onSubmit(_values: FormValues) {
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-80 flex-col justify-center gap-4 rounded-xl border border-line bg-panel p-6 sm:p-8">
        <span className="flex size-11 items-center justify-center rounded-md bg-fg text-bg">
          <Check className="size-5" strokeWidth={2.2} />
        </span>
        <h3 className="font-display text-3xl font-medium uppercase leading-tight tracking-display">
          Request received
        </h3>
        <p className="max-w-md text-sm leading-normal text-muted">
          Thanks — {band.agent.name} at {band.agent.company} will follow up at
          the email you left. For anything urgent, write{" "}
          <a
            className="text-fg underline decoration-line underline-offset-4"
            href={`mailto:${band.emails.booking}`}
          >
            {band.emails.booking}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl border border-line bg-panel p-5 sm:p-6"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name?.message}>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Your name"
            {...register("name")}
          />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@venue.com"
            {...register("email")}
          />
        </Field>
        <Field label="Venue" htmlFor="venue" error={errors.venue?.message}>
          <Input
            id="venue"
            placeholder="The Fonda, Coachella…"
            {...register("venue")}
          />
        </Field>
        <Field label="City" htmlFor="city" error={errors.city?.message}>
          <Input id="city" placeholder="Los Angeles" {...register("city")} />
        </Field>
        <Field label="Preferred date" htmlFor="date" error={errors.date?.message}>
          <Input id="date" type="date" {...register("date")} />
        </Field>
        <div className="flex flex-col gap-2">
          <Label>Show type</Label>
          <div className="flex flex-wrap gap-2">
            {showTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() =>
                  setValue("showType", type as ShowType, { shouldValidate: true })
                }
                className={cn(
                  "h-11 rounded-sm border px-3 text-sm transition-[background-color,border-color,color] duration-150",
                  showType === type
                    ? "border-fg bg-fg text-bg"
                    : "border-line bg-transparent text-muted hover:border-fg hover:text-fg",
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <Field
          label="Message"
          htmlFor="message"
          error={errors.message?.message}
          className="sm:col-span-2"
        >
          <Textarea
            id="message"
            placeholder="Capacity, holds, support, and anything else we should know."
            {...register("message")}
          />
        </Field>
      </div>
      <Button type="submit" size="lg" className="mt-5 w-full sm:w-auto" disabled={isSubmitting}>
        Send booking request
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  className,
  children,
}: {
  label: string;
  htmlFor?: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error ? <p className="text-xs text-muted">{error}</p> : null}
    </div>
  );
}
