import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const APIURL = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3";

export const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
});
