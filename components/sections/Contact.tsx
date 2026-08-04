"use client";

import { FormEvent, useEffect, useState } from "react";
import clsx from "clsx";
import { PartyPopper } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SocialLinks from "@/components/ui/SocialLinks";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: { name: string; email: string; message: string }): FormErrors {
  const nextErrors: FormErrors = {};
  if (!values.name.trim()) nextErrors.name = "Full name is required.";
  if (!values.email.trim()) {
    nextErrors.email = "Email address is required.";
  } else if (!emailPattern.test(values.email)) {
    nextErrors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) nextErrors.message = "Message is required.";
  return nextErrors;
}

const fieldClasses = (hasError?: string) =>
  clsx(
    "mt-2 w-full rounded-lg border bg-transparent px-4 py-3 text-text-dark outline-none transition-colors",
    hasError ? "border-red-500 focus:border-red-500" : "border-text-muted/30 focus:border-accent"
  );

/** Cross-fades/slides between the form and the success panel on a mount
 * trigger (not scroll position, so ScrollReveal doesn't fit here). */
function FadeSwap({ children, id }: { children: React.ReactNode; id: string }) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    setEntered(false);
    const frame = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(frame);
  }, [id]);

  return (
    <div
      className={clsx(
        "transition-all duration-500 ease-out",
        entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      {children}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"form" | "success">("form");

  const updateField = (field: keyof typeof values, value: string) => {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    if (submitted) setErrors(validate(nextValues));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Fired in the background: a no-cors response is opaque anyway, so
    // awaiting it before showing success would only add latency (Apps
    // Script cold starts can take a few seconds) without giving us any
    // extra confidence.
    fetch(process.env.NEXT_PUBLIC_GAS_URL as string, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        message: values.message,
      }),
    }).catch((err) => console.error("Contact form submission failed:", err));

    setValues({ name: "", email: "", message: "" });
    setErrors({});
    setSubmitted(false);
    setStatus("success");
  };

  const handleBack = () => {
    setStatus("form");
  };

  // Navigating here from another page (e.g. "/services#contact") is a
  // client-side transition, but content loading further up the homepage can
  // still shift the layout after the initial scroll. Re-assert the scroll
  // position once this section has mounted so the CTA reliably lands here.
  useEffect(() => {
    if (window.location.hash === "#contact") {
      document.getElementById("contact")?.scrollIntoView();
    }
  }, []);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 bg-bg-light px-6 py-24 sm:px-12"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal className="text-center lg:text-left">
          <h2 id="contact-heading" className="text-3xl font-bold sm:text-5xl">
            Let&apos;s work together
          </h2>
          <div className="mx-auto mt-4 max-w-lg space-y-4 text-lg text-text-muted lg:mx-0">
            <p>
              Have a project in mind: a website, an AI-powered automation, or
              a full brand refresh? I&apos;d love to hear about it.
            </p>
            <p>
              Share a few details about your goals, timeline, and budget in
              the form, and I&apos;ll get back to you within a day or two to
              talk through next steps.
            </p>
          </div>
          <SocialLinks className="mt-8 flex items-center justify-center gap-1 text-text-dark lg:justify-start" />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="gradient-border overflow-hidden p-8 sm:p-10">
            {status === "form" ? (
              <FadeSwap id="form">
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-text-dark">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={fieldClasses(errors.name)}
                      suppressHydrationWarning
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="mt-1 text-sm text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-text-dark">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={fieldClasses(errors.email)}
                      suppressHydrationWarning
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-text-dark">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={fieldClasses(errors.message)}
                      suppressHydrationWarning
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="mt-1 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-text-light transition-transform hover:-translate-y-0.5"
                    suppressHydrationWarning
                  >
                    Send message
                  </button>
                </form>
              </FadeSwap>
            ) : (
              <FadeSwap id="success">
                <div className="flex flex-col items-center py-4 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <PartyPopper size={28} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold text-text-dark">
                    Message sent successfully!
                  </h3>
                  <p className="mt-3 text-text-dark/70">
                    Thank you for contacting us. We&apos;ve received your
                    message and truly appreciate you reaching out. I&apos;ll
                    review it and follow up soon with next steps.
                  </p>
                  <p className="mt-2 text-text-dark/70">Have a wonderful day!</p>
                  <button
                    type="button"
                    onClick={handleBack}
                    className="mt-7 rounded-full border border-text-dark/15 px-6 py-3 text-sm font-medium text-text-dark transition-transform hover:-translate-y-0.5"
                  >
                    Back
                  </button>
                </div>
              </FadeSwap>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
