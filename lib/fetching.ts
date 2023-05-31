import { off } from "process"
import request, { gql } from "graphql-request"

import { formatNumber } from "./utils"

const GRAPHQL_URL = "https://countries.trevorblades.com/graphql"
const API_URL = "https://restcountries.com/v3.1/name"

type Continent = { continent: { countries: { name: string }[] } }

export type Country = {
  official: string
  population: string
  flag: string
  currencies: { name: string; symbol: string }[]
  subregion: string
  languages: string[]
}

const fetchCountry = async (country: string) => {
  let res = await fetch(`${API_URL}/${country}`)
  return res.json()
}

export const getCountriesByContinent = async (
  continent: string,
  limit: number
) => {
  const countryQuery = gql`
    query countriesQuery {
      continent(code: "${continent}") {
        countries {
          name
        }
      }
    }
  `

  const continents = await request<Continent>(GRAPHQL_URL, countryQuery)
  // if continents empty return empty list
  if (!continents.continent) return []
  const countries = continents.continent.countries.map(
    (country) => country.name
  )
  console.log(continents)
  const slicedCountries = countries
    .sort(() => 0.5 - Math.random())
    .slice(0, limit)

  let countriesInfo: Array<Country> = new Array()
  for (let country of slicedCountries) {
    const info: any = await fetchCountry(country)
    if (info?.status === 404) continue
    // get random element of info list
    const randomInfo = info.sort(() => 0.5 - Math.random())[0]
    const {
      name: { official },
      population,
      currencies,
      subregion,
      languages,
      flag,
    } = randomInfo

    countriesInfo.push({
      official: official || "unknown",
      population: population ? formatNumber(population) : "unknown",
      flag: flag || "unknown",
      currencies: currencies
        ? Object.values(currencies)
        : [{ name: "unknown", symbol: "" }],
      subregion: subregion || "unknown",
      languages: languages ? Object.values(languages) : ["unknown"],
    })
  }

  // return sorted slicedCountries alphabetically
  return countriesInfo
}