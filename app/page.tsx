import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import CountryInput from "@/components/dom/country-input"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1>Get Countries from Continent !!!</h1>
      <CountryInput />
    </section>
  )
}
