import { gql } from 'graphql-request';

export const GET_ALL_CHARACTERS = gql`
  query getAllCharacters($page: Int = 1) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
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

export const GET_ALL_EPISODES = gql`
  query getAllEpisodes($page: Int = 1) {
    episodes(page: $page) {
      info {
        next
      }
      results {
        id
        name
        episode
      }
    }
  }
`;
