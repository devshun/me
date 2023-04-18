import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  documents: "src/**/*.graphql",
  schema: process.env.NEXT_PUBLIC_GRAPHCMS_API_ENDPOINT,
  generates: {
    "src/graphql/generated/": {
      preset: "client",
      plugins: [],
      schema: process.env.NEXT_PUBLIC_GRAPHCMS_API_ENDPOINT,
    },
  },
};

export default config;
