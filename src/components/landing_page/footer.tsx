import type { SVGProps } from "react"
import { BriefcaseBusiness, Mail, Star } from "lucide-react"

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 19 19" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844"
        clipRule="evenodd"
      />
    </svg>
  )
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/SEsoNDos",
    icon: GithubIcon,
    className:
      "hover:border-emerald-500 hover:bg-emerald-500 hover:text-white dark:hover:border-emerald-400 dark:hover:bg-emerald-400 dark:hover:text-emerald-950",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sondos-sofian-6374a8302",
    icon: BriefcaseBusiness,
    className:
      "hover:border-emerald-500 hover:bg-emerald-500 hover:text-white dark:hover:border-emerald-400 dark:hover:bg-emerald-400 dark:hover:text-emerald-950",
  },
  {
    label: "Email",
    href: "mailto:sondosso889@gmail.com",
    icon: Mail,
    className:
      "hover:border-emerald-500 hover:bg-emerald-500 hover:text-white dark:hover:border-emerald-400 dark:hover:bg-emerald-400 dark:hover:text-emerald-950",
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
            <Star
              className="inline-block size-2 fill-emerald-500 text-emerald-500"
              aria-hidden="true"
            />
          </a>
          <p className="text-sm text-muted-foreground">
            © 2026 All rights reserved
          </p>
        </div>

        <div className="flex items-center justify-center gap-6">
          <p className="text-sm text-muted-foreground">Made with soul ☾</p>
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
