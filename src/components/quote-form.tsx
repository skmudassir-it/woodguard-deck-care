"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICE_NAMES } from "@/lib/services";
import { cn } from "@/lib/utils";

const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please choose a service"),
  message: z.string().min(10, "Please share a few more details (10+ characters)"),
});

type QuoteValues = z.infer<typeof quoteSchema>;

export function QuoteForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { service: "" },
  });
  const [serverError, setServerError] = useState<string | null>(null);

  const service = watch("service");

  const onSubmit = async (data: QuoteValues) => {
    setServerError(null);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { success?: boolean; error?: string; message?: string };
      if (!res.ok || !json.success) {
        setServerError(json.error ?? "Something went wrong. Please try again.");
        toast.error(json.error ?? "Something went wrong. Please try again.");
        return;
      }
      toast.success(json.message ?? "Quote request sent — we will be in touch!");
      reset();
    } catch {
      setServerError("Network error — please try again.");
      toast.error("Network error — please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            placeholder="Jordan Miller"
            autoComplete="name"
            aria-invalid={!!errors.name}
            className={cn(errors.name && "border-destructive")}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            className={cn(errors.email && "border-destructive")}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(555) 123-4567"
            autoComplete="tel"
            {...register("phone")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Service needed</Label>
          <Select
            value={service || null}
            onValueChange={(v) =>
              setValue("service", (v ?? "") as string, { shouldValidate: true })
            }
          >
            <SelectTrigger
              id="service"
              className={cn(errors.service && "border-destructive")}
            >
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              {SERVICE_NAMES.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service && (
            <p className="text-sm text-destructive">{errors.service.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Tell us about your deck</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Deck size, age, current condition, and what you would like to achieve…"
          aria-invalid={!!errors.message}
          className={cn(errors.message && "border-destructive")}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {serverError && (
        <p className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {serverError}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          "Request My Free Quote"
        )}
      </Button>
    </form>
  );
}
