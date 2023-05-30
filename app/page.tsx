import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import CountryInput from "@/components/dom/country-input"

export default function IndexPage() {
  return (
    <section className="container flex flex-col items-center justify-center gap-16 pb-64">
      <h1 className="text-4xl font-bold">
        Which Continent <span className="text-contrast-foreground">?</span>
      </h1>
      <CountryInput />
    </section>
  )
}
