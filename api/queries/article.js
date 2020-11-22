// @ts-check
import { gql } from '@apollo/client';

const QUERY_ARTICLES = (limit = 0, offset = 0) => {
  return gql`
query {
  allArticle(
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
};
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

// const extractArticlesInfo = article => {
//   const {
//     title,
//     subtitle,
//     author: {
//       name: authorName,
//       image: {
//         asset: {
//           url: authorImageURL,
//         },
//       },
//     },
//     mainImage: {
//       caption: mainImageCaption,
//       alt: mainImageAlt,
//       asset: {
//         url: mainImageURL,
//       },
//     },
//     slugContainer: { slug },
//     bodyRaw,
//   } = article;

//   return {
//     title,
//     subtitle,
//     authorName,
//     authorImageURL,
//     mainImageCaption,
//     mainImageAlt,
//     mainImageURL,
//     slug,
//     bodyRaw,
//   };
// };

const QUERY_ARTICLE = articleID => {
  return gql`
query {
  Article(id: "${articleID}") {
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
};

const extractArticleInfo = article => {
  const {
    title,
    subtitle,
    author: {
      name: authorName,
      image: {
        asset: {
          url: authorImageURL,
        },
      },
    },
    mainImage: {
      caption: mainImageCaption,
      alt: mainImageAlt,
      asset: {
        url: mainImageURL,
      },
    },
    slugContainer: { slug },
    bodyRaw,
    publishedAt: publishDate,
  } = article;

  return {
    title,
    subtitle,
    authorName,
    authorImageURL,
    mainImageCaption,
    mainImageAlt,
    mainImageURL,
    slug,
    bodyRaw,
    publishDate,
  };
};

export {
  // extractArticlesInfo,
  extractArticleInfo,
  QUERY_ARTICLES,
  QUERY_ARTICLE,
};
