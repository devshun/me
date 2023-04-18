import type { CodegenConfig } from "@graphql-codegen/cli";

const schema = process.env.NEXT_PUBLIC_GRAPHCMS_API_ENDPOINT;

const config: CodegenConfig = {
  overwrite: true,
  documents: "src/**/*.graphql",
  schema,
  generates: {
    "src/graphql/generated/": {
      preset: "client",
      plugins: [],
      schema,
      config: { defaultScalarType: "unknown" },
    },
  },
};

export default config;
