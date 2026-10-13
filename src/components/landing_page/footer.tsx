import { Moon, Star } from "lucide-react"
import { BiLogoGmail } from "react-icons/bi"
import { IoLogoGithub } from "react-icons/io"
import { TiSocialLinkedin } from "react-icons/ti"

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/SEsoNDos",
    icon: IoLogoGithub,
    className:
      "hover:border-emerald-400 hover:bg-emerald-300 hover:text-white dark:hover:border-emerald-200 dark:hover:bg-emerald-200 dark:hover:text-emerald-950",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sondos-sofian-6374a8302",
    icon: TiSocialLinkedin,
    className:
      "hover:border-emerald-400 hover:bg-emerald-300 hover:text-white dark:hover:border-emerald-200 dark:hover:bg-emerald-200 dark:hover:text-emerald-950",
  },
  {
    label: "Email",
    href: "mailto:sondosso889@gmail.com",
    icon: BiLogoGmail,
    className:
      "hover:border-emerald-400 hover:bg-emerald-300 hover:text-white dark:hover:border-emerald-200 dark:hover:bg-emerald-200 dark:hover:text-emerald-950",
  },
]

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
          <a
            href="#hero"
            className="font-logo text-3xl font-bold leading-none text-foreground"
            aria-label="Back to home"
          >
            So
            <Moon
              className="inline-block size-2 fill-emerald-500 text-emerald-500"
              aria-hidden="true"
            />
          </a>
          <p className="text-sm text-muted-foreground">
            © 2026 All rights reserved
          </p>
        </div>
<div className="flex items-center justify-center gap-6">
    <p className="font-logo text-lg text-muted-foreground">Made with💚Love</p>
    </div>
        <div className="flex items-center justify-center gap-6">
          <nav className="flex items-center gap-3" aria-label="Social links">
            {socialLinks.map(({ label, href, icon: Icon, className }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noreferrer"}
                aria-label={label}
                className={`inline-flex size-12 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
              >
                <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
