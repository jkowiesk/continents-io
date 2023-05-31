import Scene from "@/components/canvas/scene"
import { HelpPopover } from "@/components/dom/help-popover"
import MainContent from "@/components/dom/main-content"

export default function IndexPage() {
  return (
    <section className="container flex flex-col items-center justify-center gap-8 pb-64">
      <MainContent />
      <div className="fixed bottom-0 right-0 h-[400px] w-[400px]">
        <Scene />
      </div>
      {/* @ts-expect-error SC */}
      <HelpPopover />
    </section>
  )
}
