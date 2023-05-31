import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Scene from "@/components/canvas/scene"
import CountryInput from "@/components/dom/country-input"
import MainContent from "@/components/dom/main-content"

export default function IndexPage() {
  return (
    <section className="container flex flex-col items-center justify-center gap-16 pb-64">
      <MainContent />
      <div className="fixed bottom-0 right-0 h-[400px] w-[400px]">
        {/* <Scene /> */}
      </div>
    </section>
  )
}
