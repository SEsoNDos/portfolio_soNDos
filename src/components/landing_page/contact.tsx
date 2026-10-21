import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"
import { useState } from "react"
import type { FormEvent } from "react"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "sondosso889@gmail.com",
    href: "mailto:sondosso889@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+962 788782055",
    href: "tel:+962788782055",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Jordan · Amman",
  },
]

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{
    type: "success" | "error"
    message: string
  } | null>(null)

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  if (isSubmitting) return

  setIsSubmitting(true)
  setStatus(null)

  const form = event.currentTarget
  const formData = new FormData(form)

  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const subject = String(formData.get("subject") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()

  try {
    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error("Supabase configuration is missing")
    }

    const response = await fetch(
      `${supabaseUrl}/rest/v1/contact_messages`,
      {
        method: "POST",
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ name, email, subject, message }),
      },
    )

    if (!response.ok) throw new Error("Contact message submission failed")

    const { data: notificationData, error: notificationError } =
      await supabase.functions.invoke("contact-notification", {
        body: {
          name,
          email,
          subject,
          message,
        },
      })

    form.reset()

    if (notificationError || !notificationData?.success) {
      console.error(
        "Contact notification failed:",
        notificationError ?? notificationData,
      )
      setStatus({
        type: "success",
        message:
          "Your message was saved, but the email notification failed.",
      })
      toast.success("Your message was saved, but the email notification failed.")
    } else {
      setStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      })
      toast.success("Your message has been sent successfully!")
    }
  } catch (error) {
    console.error("Contact form submission failed:", error)

    setStatus({
      type: "error",
      message: "Unable to send your message. Please try again.",
    })
    toast.error("Unable to send your message. Please try again.")
  } finally {
    setIsSubmitting(false)
  }
}
  return (
    <section id="contact" className="border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
        <div className="flex flex-col justify-between gap-10">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Contact
            </p>
            <h2 className="max-w-lg text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {"Let's build something "}
              <span className="text-emerald-400">magnificent.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
              Have a project in mind, or just want to say hello? Send a message
              and I&apos;ll get back to you soon.
            </p>
          </div>

          <div className="grid gap-5 text-sm">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium text-foreground">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <form   onSubmit={handleSubmit}
         className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-card-foreground">
              Name
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                placeholder="Your name"
                className="h-11 rounded-md border border-input bg-background px-3 text-sm font-normal outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-card-foreground">
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="h-11 rounded-md border border-input bg-background px-3 text-sm font-normal outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </label>
          </div>
          <label className="mt-6 grid gap-2 text-sm font-medium text-card-foreground">
            Subject
            <input
              type="text"
              name="subject"
              required
              placeholder="How can I help?"
              className="h-11 rounded-md border border-input bg-background px-3 text-sm font-normal outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
            />
          </label>
          <label className="mt-6 grid gap-2 text-sm font-medium text-card-foreground">
            Message
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me a little about your project..."
              className="resize-y rounded-md border border-input bg-background px-3 py-3 text-sm font-normal outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
            />
          </label>
          <Button
  type="submit"
  disabled={isSubmitting}
  className="mt-6 h-11 w-full px-5 text-sm font-medium focus:ring-2 focus:ring-ring/50 focus:ring-offset-2 focus:ring-offset-card"
>
  <Send className="ml-3 size-4" aria-hidden="true" />
  {isSubmitting ? "Sending..." : "Send message"}
</Button>
</form>
      </div>
    </section>
  )
}   

export default Contact
