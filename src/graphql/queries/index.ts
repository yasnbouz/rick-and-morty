import { gql } from 'graphql-request';

export const GET_ALL_CHARACTERS = gql`
  query getAllCharacters($page: Int = 1) {
    characters(page: $page) {
      results {
        id
        name
        status
        gender
        image
        species
        origin {
          name
        }
        episode {
          name
        }
      }
    }
  }
`;
