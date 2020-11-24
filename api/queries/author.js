import { gql } from '@apollo/client';

const QUERY_ALL_AUTHORS = gql`
query {
  allAuthor {
    _id,
    name,
    image {
      asset {
        url
      },
      caption,
      alt
    },
    bioRaw,
    slugContainer: slug {
      slug: current
    }
  }
}
`;

const QUERY_AUTHOR = authorID => {
  return gql`
query {
  Author(id: "${authorID}") {
    _id,
    name,
    image {
      asset {
        url
      },
      caption,
      alt
    },
    bioRaw,
    slugContainer: slug {
      slug: current
    }
  }
}
`;
};

export { QUERY_AUTHOR, QUERY_ALL_AUTHORS };
