import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHCMS_API_ENDPOINT,
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_API_TOKEN}`,
  },
});

export const client = new ApolloClient({
  link,
  cache,
});
