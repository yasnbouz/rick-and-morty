import { GraphQLClient } from 'graphql-request';

export const endpoint = `https://rickandmortyapi.com/graphql`;
export const client = new GraphQLClient(endpoint);
