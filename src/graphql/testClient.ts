import {
  cacheExchange,
  createClient,
  debugExchange,
  fetchExchange,
} from "urql";

export const testClient = createClient({
  url: "http://mocked-graphql-api",
  exchanges: [debugExchange, cacheExchange, fetchExchange],
});
