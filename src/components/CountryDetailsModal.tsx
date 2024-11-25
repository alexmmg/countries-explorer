import { Spin, Modal, Row, Col } from "antd";
import { WeatherIcon } from "../components/styles";
import { IWeatherData, TCountryDetails } from "../types/types";

interface IModalProps {
  isModalVisible: boolean;
  selectedCountry: string | null;
  handleCloseModal: () => void;
  weather: IWeatherData | null;
  countryDetails?: TCountryDetails | null;
}

const CountryDetailsModal = ({
  weather,
  countryDetails,
  isModalVisible,
  selectedCountry,
  handleCloseModal,
}: IModalProps) => {
  return (
    <Modal
      title={selectedCountry}
      open={isModalVisible}
      onCancel={handleCloseModal}
      footer={null}
      width={400}
    >
      <Row gutter={16}>
        <Col span={24}>
          <h3>Weather Information</h3>
          {weather ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <WeatherIcon
                src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                alt={weather?.weather[0].description}
              />
              <div>
                <p>Temperature: {weather.main.temp}°C</p>
                <p>Weather: {weather.weather[0].description}</p>
                <p>Humidity: {weather.main.humidity}%</p>
                <p>Wind Speed: {weather.wind.speed} m/s</p>
              </div>
            </div>
          ) : (
            <Spin />
          )}
        </Col>
        <Col span={24}>
          <h3>Country Details</h3>
          <p>
            <strong>Languages:</strong>{" "}
            {countryDetails?.languages?.map(({ name }) => name).join(", ")}
          </p>
          <p>
            <strong>Currencies:</strong>{" "}
            {countryDetails?.currencies?.join(", ")}
          </p>
        </Col>
      </Row>
    </Modal>
  );
};

export default CountryDetailsModal;
