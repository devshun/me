/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  'query GetArticles($zennUsername: String!, $qiitaUsername: String!) {\n  profiles {\n    id\n    firstName\n    lastName\n    image {\n      id\n      url\n    }\n  }\n  zennArticles(username: $zennUsername) @rest(type: "zennArticles", method: "GET", path: "articles?username={args.username}&order=latest", endpoint: "zenn") {\n    articles {\n      id\n      title\n      slug\n      published_at\n    }\n  }\n  qiitaArticles(username: $qiitaUsername) @rest(type: "qiitaArticles", method: "GET", path: "items?page=1&per_page=100&query=qiita+user%3A{args.username}", endpoint: "qiita") {\n    id\n    title\n    url\n    created_at\n  }\n}':
    types.GetArticlesDocument,
  "query GetPackages {\n  profiles {\n    id\n    firstName\n    lastName\n    image {\n      id\n      url\n    }\n  }\n  packages {\n    id\n    name\n    kind\n    url\n  }\n}":
    types.GetPackagesDocument,
  "query GetProfile {\n  profiles {\n    id\n    firstName\n    lastName\n    selfIntroduction\n    interests {\n      id\n      url\n    }\n    sns\n    image {\n      id\n      url\n    }\n  }\n}":
    types.GetProfileDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetArticles($zennUsername: String!, $qiitaUsername: String!) {\n  profiles {\n    id\n    firstName\n    lastName\n    image {\n      id\n      url\n    }\n  }\n  zennArticles(username: $zennUsername) @rest(type: "zennArticles", method: "GET", path: "articles?username={args.username}&order=latest", endpoint: "zenn") {\n    articles {\n      id\n      title\n      slug\n      published_at\n    }\n  }\n  qiitaArticles(username: $qiitaUsername) @rest(type: "qiitaArticles", method: "GET", path: "items?page=1&per_page=100&query=qiita+user%3A{args.username}", endpoint: "qiita") {\n    id\n    title\n    url\n    created_at\n  }\n}'
): (typeof documents)['query GetArticles($zennUsername: String!, $qiitaUsername: String!) {\n  profiles {\n    id\n    firstName\n    lastName\n    image {\n      id\n      url\n    }\n  }\n  zennArticles(username: $zennUsername) @rest(type: "zennArticles", method: "GET", path: "articles?username={args.username}&order=latest", endpoint: "zenn") {\n    articles {\n      id\n      title\n      slug\n      published_at\n    }\n  }\n  qiitaArticles(username: $qiitaUsername) @rest(type: "qiitaArticles", method: "GET", path: "items?page=1&per_page=100&query=qiita+user%3A{args.username}", endpoint: "qiita") {\n    id\n    title\n    url\n    created_at\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetPackages {\n  profiles {\n    id\n    firstName\n    lastName\n    image {\n      id\n      url\n    }\n  }\n  packages {\n    id\n    name\n    kind\n    url\n  }\n}"
): (typeof documents)["query GetPackages {\n  profiles {\n    id\n    firstName\n    lastName\n    image {\n      id\n      url\n    }\n  }\n  packages {\n    id\n    name\n    kind\n    url\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetProfile {\n  profiles {\n    id\n    firstName\n    lastName\n    selfIntroduction\n    interests {\n      id\n      url\n    }\n    sns\n    image {\n      id\n      url\n    }\n  }\n}"
): (typeof documents)["query GetProfile {\n  profiles {\n    id\n    firstName\n    lastName\n    selfIntroduction\n    interests {\n      id\n      url\n    }\n    sns\n    image {\n      id\n      url\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
