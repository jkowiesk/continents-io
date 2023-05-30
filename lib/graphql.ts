import request, { gql } from "graphql-request"

const URL = "https://countries.trevorblades.com/graphql"

type Continent = { continent: { countries: { code: string }[] } }

export const fetchCountries = async (continent: string, limit: number) => {
  const countryQuery = gql`
    query countriesQuery {
      continent(code: "${continent}") {
        countries {
          code
        }
      }
    }
  `

  const continents = await request<Continent>(URL, countryQuery)
  const countries = continents.continent.countries.map(
    (country) => country.code
  )
  const slicedCountries = countries
    .sort(() => 0.5 - Math.random())
    .slice(0, limit)

  return slicedCountries
}
