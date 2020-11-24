// @ts-check
import groq from 'groq';

const QUERY_ARTICLES_FULL = (offset = 0, limit = 10) => {
  return groq`
  * [_type=="article"] {
  _id,
  title,
  subtitle,
  publishedAt,
  featured,
  "authorName": author->name,
  "authorImageURL": author->image.asset->url,
  "mainImageCaption": mainImage.caption,
  "mainImageAlt": mainImage.alt,
  "mainImageURL": mainImage.asset->url,
  "categories": categories[]->{
    "categoryName": name,
    "categoryID": _id
  },
  "slug": slug.current,
  "body": body[]{
    _key,
    _type,
    style,
    markDefs,
    level,
    listItem,
    alt,
    caption,
    "url": asset->url,
    "children": children[]{
      _key,
      _type,
      text,
      marks
    }
  }
} [${offset}...${offset + limit}]`;
};

const QUERY_ARTICLES = (offset = 0, limit = 10) => {
  return groq`
  *[_type=="article"] {
  _id,
  title,
  publishedAt,
  featured,
  "authorName": author->name,
  "mainImageURL": mainImage.asset->url,
  "categories": categories[]->{
    "categoryName": name,
    "categoryID": _id
  },
  "slug": slug.current
} [${offset}...${offset + limit}]`;
};

const QUERY_ARTICLE = groq`
  * [_type=="article"] {
  _id,
  title,
  subtitle,
  publishedAt,
  featured,
  "authorName": author->name,
  "authorImageURL": author->image.asset->url,
  "mainImageCaption": mainImage.caption,
  "mainImageAlt": mainImage.alt,
  "mainImageURL": mainImage.asset->url,
  "body": body[]{
    _key,
    _type,
    style,
    markDefs,
    level,
    listItem,
    alt,
    caption,
    "url": asset->url,
    "children": children[]{
      _key,
      _type,
      text,
      marks
    }
  }
}`;

// "categories": categories[]->{
//     "categoryName": name,
//     "categoryID": _id
//   },
//   "slug": slug.current

// const extractProperties = article => {
//   const {
//     title,
//     subtitle,
//     publishedAt,
//     featured,
//     authorName,
//     authorImageURL,
//     mainImageAlt,
//     mainImageCaption,
//     mainImageURL,
//     body,
//     categories,
//     slug,
//   } = article;
// };

export {
  QUERY_ARTICLES_FULL,
  QUERY_ARTICLES,
  QUERY_ARTICLE,
};
