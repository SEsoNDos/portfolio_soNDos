import type { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline"
}

export function buttonClassName(
  variant: "default" | "outline" = "default",
  className = "",
) {
  const variantClassName =
    variant === "outline"
      ? "border border-emerald-400/70 bg-background text-emerald-700 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-200"
      : "bg-emerald-500 text-white shadow-sm shadow-emerald-500/20 hover:bg-emerald-600 dark:bg-emerald-400 dark:text-emerald-950 dark:hover:bg-emerald-300"

  return `inline-flex items-center justify-center rounded-full transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:hover:translate-y-0 ${variantClassName} ${className}`
}

export function Button({
  className = "",
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClassName(variant, className)}
      {...props}
    />
  )
}

export function ButtonOutline() {
  return <Button variant="outline">Outline</Button>
}
