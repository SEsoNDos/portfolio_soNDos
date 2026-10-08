import {
  BriefcaseBusiness,
  House,
  Menu,
  Mail,
  Star,
  UserRound,
  X,
} from "lucide-react"
import { useState } from "react"

import { ThemeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

const navigation = [
  { label: "Home", href: "#hero", icon: House },
  { label: "About", href: "#about", icon: UserRound },
  { label: "Projects", href: "#projects", icon: BriefcaseBusiness },
  { label: "Contact", href: "#contact", icon: Mail },
]

export default function Header4() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
   <header className="absolute top-0 left-0 z-50 w-full px-4 pt-3 sm:px-6">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between rounded-full border border-border/70 bg-background/90 px-4 shadow-sm backdrop-blur sm:px-6">
        <a
          href="#hero"
          className="font-logo text-3xl font-bold leading-none text-foreground transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
          onClick={closeMenu}
        >
          So
          <Star
            className="inline-block size-2 fill-emerald-400 text-emerald-500 transition-transform duration-200 hover:scale-150 hover:fill-emerald-300"
            aria-hidden="true"
          />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navigation.map(({ label, href, icon: Icon }, index) => (
            <a
              key={href}
              href={href}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition-colors ${
                index === 0
                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300"
                  : "text-muted-foreground hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300"
              }`}
            >
              <Icon className="size-4" aria-hidden="true" />
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            type="button"
            variant="outline"
            className="h-10 w-10 rounded-xl border border-input"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-border/60 px-6 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {navigation.map(({ label, href, icon: Icon }, index) => (
              <a
                key={href}
                href={href}
                className={`inline-flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300"
                    : "text-muted-foreground hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300"
                }`}
                onClick={closeMenu}
              >
                <Icon className="size-4" aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
