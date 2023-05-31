"use client"

import { useEffect, useState } from "react"

import { getCountriesByContinent } from "@/lib/graphql"
import { CONTINENTS_CODES } from "@/lib/utils"

import { Button } from "../ui/button"
import { Input } from "../ui/input"

type Props = {
  setCountries: (countries: any) => void
}

export default function CountryInput({ setCountries }: Props) {
  const [continent, setContinent] = useState("Europe")
  const [isLoading, setIsLoading] = useState(false)
  const [limit, setLimit] = useState(10)
  const onClick = async (e: any) => {
    setIsLoading(true)
    e.preventDefault()
    const continentCode = CONTINENTS_CODES.get(continent.toLowerCase())
    console.log(continentCode)
    if (!continentCode) return
    const countries = await getCountriesByContinent(continentCode, limit)
    setCountries(countries)
    console.log(countries)
    setIsLoading(false)
  }

  if (isLoading) return <h1>Loading...</h1>

  return (
    <form onSubmit={onClick} className="row grid grid-cols-2 grid-rows-2 gap-8">
      <Input value={continent} onChange={(e) => setContinent(e.target.value)} />
      {/* number input with range 2 to 10 */}
      <Input
        type="number"
        value={limit}
        min={2}
        max={10}
        className="invalid:border-red-800"
        onChange={(e) => setLimit(parseInt(e.target.value))}
      />
      <Button className="col-span-2" type="submit">
        Get Countries
      </Button>
    </form>
  )
}
