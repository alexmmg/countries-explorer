import { notification } from "antd";
import axios, { AxiosError } from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      notification.error({
        message: error?.response?.data?.message,
      });
    }
  }
};
