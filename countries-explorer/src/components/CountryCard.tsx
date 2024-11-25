import { TCountry } from "../types/types";
import { StyledCard } from "./styles";

interface ICountryDetailsProps {
  country: TCountry;
  handleCountryClick: (
    countryName: string,
    countryCode: string
  ) => Promise<void>;
}

const CountryCard = ({ country, handleCountryClick }: ICountryDetailsProps) => {
  const onCountryClick = () => {
    handleCountryClick(country.name, country.code);
  };

  return (
    <StyledCard
      title={`${country.emoji} ${country.name}`}
      key={country.code}
      onClick={onCountryClick}
      hoverable
    >
      <p>Region: {country.continent.name}</p>
      <p>Capital: {country.capital || "N/A"}</p>
    </StyledCard>
  );
};

export default CountryCard;
