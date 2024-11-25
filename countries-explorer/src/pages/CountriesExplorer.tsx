import CountryDetailsModal from "../components/CountryDetailsModal";
import CountriesList from "../components/CountriesList";
import { ChangeEvent, useState } from "react";
import { useQuery } from "urql";
import { Spin, Select, Input } from "antd";
import { GET_COUNTRIES, GET_COUNTRY_DETAILS } from "../graphql/queries";
import { fetchWeather } from "../api/weather";
import { IWeatherData, TCountry } from "../types/types";
import { InputsWrapper, MainContainer, PageCenter } from "../components/styles";
import { debounce } from "../utils/helpers";

const { Option } = Select;

const continentCodes: Record<string, string> = {
  "North America": "NA",
  "South America": "SA",
  Europe: "EU",
  Asia: "AS",
  Africa: "AF",
  Oceania: "OC",
  Antarctica: "AN",
};

const CountriesExplorer = () => {
  // States for filters, sorting, and modal
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState<string | null>(null);
  const [filterLanguage, setFilterLanguage] = useState<string | null>(null);
  const [sortKey, setSortKey] = useState<"name" | "continent">("name");
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [weather, setWeather] = useState<IWeatherData | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>(
    null
  );

  // GraphQL query for countries with filtering
  const [countriesResult] = useQuery({
    query: GET_COUNTRIES,
    variables: {
      filter: filterRegion ? { continent: { eq: filterRegion } } : undefined,
    },
  });

  const { data, error, fetching } = countriesResult;

  // Query for country details
  const [countryDetailsResult, reexecuteQuery] = useQuery({
    query: GET_COUNTRY_DETAILS,
    variables: { code: selectedCountryCode as string },
    pause: !selectedCountryCode,
  });

  const { country: countryDetails } = countryDetailsResult.data ?? {};

  // Client-side filtering
  let filteredCountries = data?.countries.filter((country: TCountry) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filterLanguage) {
    filteredCountries = filteredCountries?.filter((country) =>
      country.languages.some(({ name }) => name === filterLanguage)
    );
  }

  // Client-side sorting
  const sortedCountries = filteredCountries?.sort((a, b) => {
    if (sortKey === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortKey === "continent") {
      return a.continent.name.localeCompare(b.continent.name);
    }
    return 0;
  });

  const handleCountryClick = async (
    countryName: string,
    countryCode: string
  ) => {
    setSelectedCountry(countryName);
    setSelectedCountryCode(countryCode);
    reexecuteQuery();

    try {
      const weatherData = await fetchWeather(countryName);
      setWeather(weatherData);
      setIsModalVisible(true);
    } catch {
      setWeather(null);
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedCountry(null);
    setWeather(null);
    setSelectedCountryCode(null);
  };

  const handleRegionChange = (region: string | null) => {
    setFilterRegion(region ? continentCodes[region] : null);
  };

  const handleCountrySearch = debounce(
    (e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value),
    150
  );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <MainContainer>
      <h1>Countries Explorer</h1>
      <InputsWrapper>
        {/* Search input */}
        <Input
          style={{ height: 32 }}
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={handleCountrySearch}
        />

        {/* Filter by region */}
        <Select
          onChange={handleRegionChange}
          allowClear
          style={{ width: "100%" }}
          placeholder="Filter by region"
        >
          {Object.keys(continentCodes).map((region) => (
            <Option key={region} value={region}>
              {region}
            </Option>
          ))}
        </Select>

        {/* Filter by language */}
        <Select
          placeholder="Filter by Language"
          allowClear
          onChange={(value) => setFilterLanguage(value)}
          style={{ width: "100%" }}
        >
          {Array.from(
            new Set(
              data?.countries.flatMap((country: TCountry) =>
                country.languages.map((lang) => lang.name)
              )
            )
          ).map((language) => (
            <Option key={language} value={language}>
              {language}
            </Option>
          ))}
        </Select>

        {/* Sorting options */}
        <Select
          value={sortKey}
          onChange={(value) => setSortKey(value)}
          style={{ marginBottom: "20px", width: "100%" }}
        >
          <Option value="name">Sort by Name</Option>
          <Option value="continent">Sort by Continent</Option>
        </Select>
      </InputsWrapper>

      {/* Country list */}
      {fetching ? (
        <PageCenter>
          <Spin />
          <p>Loading countries...</p>
        </PageCenter>
      ) : (
        <CountriesList
          countries={sortedCountries || []}
          handleCountryClick={handleCountryClick}
        />
      )}

      {/* Modal for country details */}
      <CountryDetailsModal
        weather={weather}
        isModalVisible={isModalVisible}
        countryDetails={countryDetails}
        selectedCountry={selectedCountry}
        handleCloseModal={handleCloseModal}
      />
    </MainContainer>
  );
};

export default CountriesExplorer;
