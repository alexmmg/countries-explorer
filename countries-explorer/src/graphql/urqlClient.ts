import { cacheExchange, createClient, fetchExchange } from "urql";

export const client = createClient({
  url: "https://countries.trevorblades.com/",
  exchanges: [cacheExchange, fetchExchange],
});
