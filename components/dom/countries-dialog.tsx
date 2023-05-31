"use client"

import { Country } from "@/lib/graphql"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Card, CardContent } from "../ui/card"

type Props = {
  setCountries: (countries: any) => void
  countries: Country[]
}

export default function CountriesDialog({ countries, setCountries }: Props) {
  const onChange = (open: boolean) => {
    if (!open) {
      setCountries(null)
    }
  }

  return (
    <Dialog open={true} onOpenChange={onChange}>
      <DialogContent className="lg:w-[50vw] lg:max-w-[50vw]">
        <DialogHeader>
          <DialogTitle>Countries </DialogTitle>
          <DialogDescription>
            All found countries from chosen continent
          </DialogDescription>
        </DialogHeader>
        <div className="flex h-[32rem] flex-col gap-4 overflow-auto px-12">
          {countries.map((country: Country) => (
            <Card className="relative grid h-64 w-full grid-cols-[4rem_1fr] border-2 border-dashed border-accent">
              <h1 className="justify-self-center text-4xl">{country.flag}</h1>
              <CardContent className="align-center flex h-full w-full flex-1 justify-between">
                <div className="flex flex-col border-b-2 border-accent text-sm">
                  <span className="text-">Official Name </span>
                  <span>{country.official}</span>
                </div>
                <div className="w-[2px] border-l-2 border-contrast opacity-50"></div>
                <div></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
