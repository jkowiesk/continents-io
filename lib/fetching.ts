import { off } from "process"
import request, { gql } from "graphql-request"

import { formatNumber } from "./utils"

const GRAPHQL_URL = "https://countries.trevorblades.com/graphql"
const API_URL = "https://restcountries.com/v3.1/name"

const notFoundMsg = "No information found!"

type Continent = { continent: { countries: { name: string }[] } }

export type Country = {
  official: string
  population: string
  flag: string
  currencies: { name: string; symbol: string }[]
  subregion: string
  capital: string
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
      capital,
    } = randomInfo

    countriesInfo.push({
      official: official || notFoundMsg,
      population: population ? formatNumber(population) : notFoundMsg,
      flag: flag || notFoundMsg,
      capital: capital || notFoundMsg,
      currencies: currencies
        ? Object.values(currencies)
        : [{ name: notFoundMsg, symbol: "" }],
      subregion: subregion || notFoundMsg,
      languages: languages ? Object.values(languages) : [notFoundMsg],
    })
  }

  // return sorted slicedCountries alphabetically
  return countriesInfo
}
