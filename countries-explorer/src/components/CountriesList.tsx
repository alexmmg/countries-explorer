import { TCountry } from "../types/types";
import CountryCard from "./CountryCard";
import { CountryList } from "./styles";

interface CountriesListProps {
  countries: TCountry[];
  handleCountryClick: (
    countryName: string,
    countryCode: string
  ) => Promise<void>;
}

const CountriesList = ({
  countries,
  handleCountryClick,
}: CountriesListProps) => (
  <CountryList>
    {countries.map((country) => (
      <CountryCard
        country={country}
        key={country.code}
        handleCountryClick={handleCountryClick}
      />
    ))}
  </CountryList>
);

export default CountriesList;
