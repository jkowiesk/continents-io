"use client"

import { useEffect, useState } from "react"
import lookup from "country-code-lookup"

import { fetchCountries } from "@/lib/graphql"
import { CONTINENTS_CODES } from "@/lib/utils"

export default function CountryInput() {
  const [continent, setContinent] = useState("Europe")
  const [limit, setLimit] = useState(10)
  const onClick = async () => {
    const continentCode = CONTINENTS_CODES.get(continent.toLowerCase())
    console.log(continentCode)
    if (!continentCode) return
    const countries = await fetchCountries(continentCode, limit)
    console.log(countries)
  }

  return (
    <div>
      <input value={continent} onChange={(e) => setContinent(e.target.value)} />
      {/* number input with range 2 to 10 */}
      <input
        type="number"
        value={limit}
        min={2}
        max={10}
        onChange={(e) => setLimit(parseInt(e.target.value))}
      />
      <button onClick={onClick}>Get Countries</button>
    </div>
  )
}
