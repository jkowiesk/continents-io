"use client"

import { useEffect, useState } from "react"
import lookup from "country-code-lookup"

import { getCountriesByContinent } from "@/lib/graphql"
import { CONTINENTS_CODES } from "@/lib/utils"

import { Button } from "../ui/button"
import { Input } from "../ui/input"

export default function CountryInput() {
  const [continent, setContinent] = useState("Europe")
  const [limit, setLimit] = useState(10)
  const onClick = async (e: any) => {
    e.preventDefault()
    const continentCode = CONTINENTS_CODES.get(continent.toLowerCase())
    console.log(continentCode)
    if (!continentCode) return
    const countries = await getCountriesByContinent(continentCode, limit)
    console.log(countries)
  }

  return (
    <form onSubmit={onClick} className="flex flex-1 gap-4">
      <Input value={continent} onChange={(e) => setContinent(e.target.value)} />
      {/* number input with range 2 to 10 */}
      <Input
        type="number"
        value={limit}
        min={2}
        max={10}
        className=""
        onChange={(e) => setLimit(parseInt(e.target.value))}
      />
      <Button type="submit">Get Countries</Button>
    </form>
  )
}
