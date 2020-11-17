import { gql } from '@apollo/client';

const QUERY_POSTS = (limit = 0, offset = 0) => gql`
query {
  allPost(
    where:{
      _: {is_draft:false}
    },
    limit: ${limit},
    offset: ${offset}
  ) {
    _id,
    title,
    subtitle,
    featured,
    author {
      name,
      image {
        asset {
          url
        }
      }
    },
    slugContainer: slug {
      slug: current
    },
    publishedAt,
    mainImage {
      caption,
      alt,
      asset {
        url
      }
    }
  }
}
`;
//     author {
//       name,
//       slugContainer: slug {
//         slug: current
//       },
//       image {
//         asset {
//           url
//         }
//       }
//     },

const QUERY_POST = postID => gql`
query {
  Post(id: "${postID}") {
    _id,
    title,
    subtitle,
    featured,
    author {
      name,
      image {
        asset {
          url
        }
      }
    },
    slugContainer: slug {
      slug: current
    },
    publishedAt,
    mainImage {
      caption,
      alt,
      asset {
        url
      }
    },
    bodyRaw
  }
}
`;

export { QUERY_POSTS, QUERY_POST };
