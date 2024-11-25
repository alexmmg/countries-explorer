import { TCountry } from "../types/types";
import { StyledCard } from "./styles";

interface ICountryDetailsProps {
  country: TCountry;
  handleCountryClick: (
    countryName: string,
    countryCode: string,
    capital: string | null
  ) => Promise<void>;
}

const CountryCard = ({ country, handleCountryClick }: ICountryDetailsProps) => {
  const onCountryClick = () => {
    handleCountryClick(country.name, country.code, country.capital);
  };

  return (
    <StyledCard
      title={`${country.emoji} ${country.name}`}
      key={country.code}
      onClick={onCountryClick}
      hoverable
    >
      <p>Continent: {country.continent.name}</p>
      <p>Capital: {country.capital || "N/A"}</p>
    </StyledCard>
  );
};

export default CountryCard;
