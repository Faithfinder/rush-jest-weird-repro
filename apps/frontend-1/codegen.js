module.exports = {
    overwrite: true,
    schema: 'http://localhost:4000',
    documents: 'src/**/*.graphql',
    generates: {
        'src/generated/graphql.types.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
                'fragment-matcher',
                'named-operations-object',
            ],
        },
        'src/generated/apolloHelpers.ts': {
            plugins: ['typescript-apollo-client-helpers'],
        },
        'src/generated/graphql.introspection.schema.json': {
            plugins: ['introspection'],
        },
        'src/generated/schema.graphql': {
            plugins: ['schema-ast'],
        },
    },
    config: {
        namingConvention: 'keep',
        nonOptionalTypename: true,
        avoidOptionals: {
            field: true,
        },
        preResolveTypes: true,
    },
};
