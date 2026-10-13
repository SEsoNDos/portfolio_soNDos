import { ArrowRight, Download } from "lucide-react"
import { IoMdStarOutline } from "react-icons/io"

import { buttonClassName } from "@/components/ui/button"

function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-emerald-100 dark:bg-background py-24 transition-colors sm:py-32 lg:py-40 "
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,oklch(0.696_0.17_162_/_16%),transparent_42%)] dark:bg-[radial-gradient(circle_at_top_right,oklch(0.765_0.16_162_/_20%),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <span className="shooting-star shooting-star-one">
          <IoMdStarOutline />
        </span>
        <span className="shooting-star shooting-star-two">
          <IoMdStarOutline />
        </span>
        <span className="shooting-star shooting-star-three">
          <IoMdStarOutline />
        </span>
        <span className="shooting-star shooting-star-four">
          <IoMdStarOutline />
        </span>
        <span className="shooting-star shooting-star-five">
          <IoMdStarOutline />
        </span>
        <span className="shooting-star shooting-star-six">
          <IoMdStarOutline />
        </span>
      </div>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Software Engineer · Creative Builder
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
            Building digital experiences with purpose and soul.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            I&apos;m Sondos Sofian, a software engineer who turns thoughtful
            ideas into useful, beautiful products.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className={buttonClassName("default", "h-12 gap-2 px-6 text-sm font-medium")}
            >
              Get in Touch
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="/Sondos-Sofian-CV.pdf"
              download="Sondos-Sofian-CV.pdf"
              className={buttonClassName("outline", "h-12 gap-2 px-6 text-sm font-medium")}
            >
              Download CV
              <Download className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
