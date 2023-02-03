import type { CodegenConfig } from '@graphql-codegen/cli'

// set up a codegen config file that uses the graphql-request plugin
// and the typescript-operations plugin
const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  documents: ['src/**/*.graphql', 'src/hooks/**/*.ts', 'src/**/*.tsx'],
  generates: {
    'src/graphql/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        skipTypename: true,
        scalars: {
          DateTime: 'string',
          Date: 'string',
          Decimal: 'string', //
        },
        avoidOptionals: true,
      },
    },
  },
}

export default config
