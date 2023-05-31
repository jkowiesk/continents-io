"use client"

import { useState } from "react"

import CountriesDialog from "./countries-dialog"
import CountryInput from "./country-input"

export default function MainContent() {
  const [countries, setCountries] = useState(null)
  return (
    <>
      <h1 className="text-4xl font-bold">
        Which Continent <span className="text-contrast">?</span>
      </h1>
      <CountryInput setCountries={setCountries} />
      {countries && (
        <CountriesDialog setCountries={setCountries} countries={countries} />
      )}
    </>
  )
}
