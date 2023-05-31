import { off } from "process"
import request, { gql } from "graphql-request"

const GRAPHQL_URL = "https://countries.trevorblades.com/graphql"
const API_URL = "https://restcountries.com/v3.1/name"

type Continent = { continent: { countries: { name: string }[] } }

export type Country = {
  official: string
  population: number
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
  const countries = continents.continent.countries.map(
    (country) => country.name
  )
  const slicedCountries = countries
    .sort(() => 0.5 - Math.random())
    .slice(0, limit)

  let countriesInfo: Array<Country> = new Array()
  for (let country of slicedCountries) {
    const info: any[] = await fetchCountry(country)
    // get random element of info list
    const randomInfo = info.sort(() => 0.5 - Math.random())[0]
    console.log(randomInfo.currencies)
    const {
      name: { official },
      population,
      currencies,
      subregion,
      languages,
      flag,
    } = randomInfo

    countriesInfo.push({
      official,
      population,
      flag,
      currencies: Object.values(currencies),
      subregion,
      languages: Object.values(languages),
    })
  }

  // return sorted slicedCountries alphabetically
  return countriesInfo
}
