import { ArrowRight, Download } from "lucide-react"
import { IoMdStarOutline } from "react-icons/io"

import { buttonClassName } from "@/components/ui/button"
import { NoiseBackground } from "@/components/ui/noise-background"

function Hero() {
  
const shootingStars = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
];

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-emerald-100 dark:bg-background py-24 transition-colors sm:py-32 lg:py-40 "
    >
      
     
<div
  className="pointer-events-none absolute inset-0 -z-10"
  aria-hidden="true"
>
  {shootingStars.map((star) => (
    <span
      key={star}
      className={`shooting-star shooting-star-${star}`}
    >
      <IoMdStarOutline />
    </span>
  ))}
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
          <div className="mt-10 flex flex-row gap-2 sm:gap-3">
            <a
              href="#contact"
              className={buttonClassName(
                "default",
                "h-12 min-w-0 flex-1 gap-2 px-4 text-sm font-medium sm:flex-none sm:px-6",
              )}
            >
              Get in Touch
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <NoiseBackground
              containerClassName="min-w-0 flex-1 rounded-full p-1 sm:flex-none"
              className="rounded-full"
              gradientColors={[
                "rgb(0,255,255)",
                "rgb(100, 150, 255)",
                "rgb(2,67,172)",
              ]}
              noiseIntensity={0.12}
              speed={0.08}
            >
              <a
                href="/Sondos-Sofian-CV.pdf"
                download="Sondos-Sofian-CV.pdf"
                className={buttonClassName(
                  "outline",
                  "h-10 w-full gap-2 px-3 text-sm font-medium sm:w-auto sm:px-5",
                )}
              >
                Download CV
                <Download className="size-4" aria-hidden="true" />
              </a>
            </NoiseBackground>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
