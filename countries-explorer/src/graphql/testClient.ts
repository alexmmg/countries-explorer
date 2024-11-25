import {
  cacheExchange,
  createClient,
  debugExchange,
  fetchExchange,
} from "urql";

export const testClient = createClient({
  url: "http://mocked-graphql-api", // Условный URL для тестов
  exchanges: [debugExchange, cacheExchange, fetchExchange],
});
