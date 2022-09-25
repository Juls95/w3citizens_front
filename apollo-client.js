import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/juls95/w3citizens",
  cache: new InMemoryCache(),
});

export default client;