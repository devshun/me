import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  ApolloLink,
} from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const cache = new InMemoryCache();

const authLink = new ApolloLink((operation, forward) => {
  console.log("operation", operation.variables);

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
    },
  }));
  return forward(operation);
});

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
    zenn: "https://zenn.dev/api",
    qiita: "api.com/v2",
  },
});

export const client = new ApolloClient({
  link: from([authLink, restLink, httpLink]),
  cache,
});
