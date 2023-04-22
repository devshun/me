import { QIITA_API_URL, ZENN_API_URL } from "@/constants/urls";
import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const cache = new InMemoryCache();

// http link
const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHCMS_API_ENDPOINT,
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_API_TOKEN}`,
  },
});

// rest link
const restLink = new RestLink({
  endpoints: {
    zenn: ZENN_API_URL,
    qiita: QIITA_API_URL,
  },
});

export const client = new ApolloClient({
  link: from([restLink, httpLink]),
  cache,
});
