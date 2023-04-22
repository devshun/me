import type { CodegenConfig } from "@graphql-codegen/cli";

const schemas = [
  process.env.NEXT_PUBLIC_GRAPHCMS_API_ENDPOINT as string,
  "src/graphql/rest/schema.graphql",
  "src/graphql/rest/types/ZennArticles.graphql",
  "src/graphql/rest/types/QiitaArticles.graphql",
];

const config: CodegenConfig = {
  overwrite: true,
  documents: "src/**/*.graphql",
  schema: schemas,
  generates: {
    "src/graphql/generated/": {
      preset: "client",
      plugins: [],
      schema: schemas,
      config: { defaultScalarType: "unknown" },
    },
  },
};

export default config;
