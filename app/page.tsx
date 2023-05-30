import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import CountryInput from "@/components/dom/country-input"

export default function IndexPage() {
  return (
    <section className="grid h-screen w-screen place-items-center pt-6 md:py-10">
      <main>
        <h1 className="text-lg">
          Which Continent <span className="text-accent ">?</span>
        </h1>
        <CountryInput />
      </main>
    </section>
  )
}
