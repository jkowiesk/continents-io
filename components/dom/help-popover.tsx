import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Button } from "../ui/button"

export async function HelpPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild className="fixed bottom-8 left-[8vw]">
        <Button variant="outline" className="w-10 rounded-full p-0">
          ?
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mb-2 ml-2 md:ml-0">
        Please specify the continent you would like to search within and
        indicate the number of countries you wish to view from that continent
      </PopoverContent>
    </Popover>
  )
}
