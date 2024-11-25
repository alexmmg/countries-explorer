import { graphql } from "gql.tada";

export const GET_COUNTRIES = graphql(`
  query GetCountries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      name
      capital
      continent {
        name
        code
      }
      currencies
      emoji
      languages {
        name
      }
    }
  }
`);

export const GET_COUNTRY_DETAILS = graphql(`
  query GetCountryDetails($code: ID!) {
    country(code: $code) {
      code
      languages {
        name
      }
      currencies
    }
  }
`);
