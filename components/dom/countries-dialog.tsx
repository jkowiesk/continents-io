"use client"

import { Country } from "@/lib/fetching"
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
        <div className="flex h-[32rem] flex-col gap-8 overflow-auto md:px-8">
          {countries.map((country: Country) => (
            <Card className="border- relative grid w-full grid-cols-[4rem_1fr] border-2 border-contrast p-2">
              <h1 className="justify-self-center text-4xl">{country.flag}</h1>
              <CardContent className="align-center flex  h-full w-full flex-1 justify-between p-2 px-4 sm:px-0">
                <div className="flex w-full flex-col gap-4 ">
                  <p className="flex flex-col text-sm">
                    <span className="opacity-50">Official Name </span>
                    <span>{country.official}</span>
                  </p>
                  <p className="flex flex-col text-sm">
                    <span className="opacity-50">Subregion </span>
                    <span>{country.subregion}</span>
                  </p>
                  <p className="flex flex-col  text-sm">
                    <span className="opacity-50">Languages </span>
                    {/* map on languages */}
                    {country.languages.map((language: string) => (
                      <span>{language}</span>
                    ))}
                  </p>
                </div>
                <div className="w-[2px] border-l-2 border-dotted border-contrast opacity-30"></div>
                <div className="flex w-full flex-col gap-4 pl-8 ">
                  <p className="flex flex-col  text-sm">
                    <span className="opacity-50">Capital </span>
                    <span>{country.capital}</span>
                  </p>
                  <p className="flex flex-col  text-sm">
                    <span className="opacity-50">Population </span>
                    <span>{country.population}</span>
                  </p>
                  <p className="flex flex-col  text-sm">
                    <span className="opacity-50">Currencies </span>
                    {/* map on currencies */}
                    {country.currencies.map(
                      ({ name, symbol }: { name: string; symbol: string }) => (
                        <p>
                          <span>{`${name} `}</span>
                          <span>{symbol.length ? `(${symbol})` : ""}</span>
                        </p>
                      )
                    )}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
