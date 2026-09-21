"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { focusRing } from "@/lib/focus";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const field =
  "w-full border-b border-border bg-transparent py-3 text-base text-foreground " +
  "placeholder:text-foreground/35 transition-colors hover:border-foreground/40 " +
  "focus:border-foreground focus:outline-none";

const label = "block text-[13px] uppercase tracking-[0.12em] text-foreground/55";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({ mailto }: { mailto: string }) {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const configured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

  // Without keys the form would fail silently, so fall back to the mail client.
  if (!configured) {
    return (
      <p className="mt-12 max-w-[62ch] text-base text-foreground/70">
        <a href={mailto} className={`underline underline-offset-4 ${focusRing}`}>
          {mailto.replace("mailto:", "")}
        </a>
        <span className="mt-2 block text-[13px] text-foreground/45">
          Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, _TEMPLATE_ID and _PUBLIC_KEY to enable
          the form.
        </span>
      </p>
    );
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID!, TEMPLATE_ID!, form.current, {
        publicKey: PUBLIC_KEY!,
      });
      form.current.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form ref={form} onSubmit={onSubmit} className="mt-12 max-w-[42rem]">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <label htmlFor="from_name" className={label}>
            Name
          </label>
          <input
            id="from_name"
            name="from_name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={`mt-2 ${field}`}
          />
        </div>
        <div>
          <label htmlFor="reply_to" className={label}>
            Email
          </label>
          <input
            id="reply_to"
            name="reply_to"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={`mt-2 ${field}`}
          />
        </div>
      </div>

      <div className="mt-8">
        <label htmlFor="message" className={label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="What are you building?"
          className={`mt-2 resize-y ${field}`}
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === "sending"}
          className={`border border-foreground px-6 py-3 text-[13px] uppercase tracking-[0.12em] transition-colors hover:bg-foreground hover:text-background disabled:opacity-50 ${focusRing}`}
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        <p aria-live="polite" className="text-[13px] text-foreground/60">
          {status === "sent" && "Thanks — I'll get back to you."}
          {status === "error" && (
            <>
              Something went wrong.{" "}
              <a href={mailto} className={`underline underline-offset-4 ${focusRing}`}>
                Email me instead
              </a>
              .
            </>
          )}
        </p>
      </div>
    </form>
  );
}
