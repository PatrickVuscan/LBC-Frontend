// @ts-check
import groq from 'groq';

const QUERY_ARTICLES_FULL = (limit = 0, offset = 0) => {
  return groq`
  *[_type=="article"] {
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
  body,
  "categories": categories[]->{
    "categoryName": name,
    "categoryID": _id
  },
  "slug": slug.current
}`;
};

const QUERY_ARTICLES = (limit = 0, offset = 0) => {
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
}`;
};

const extractProperties = article => {
  const {
    title,
    subtitle,
    publishedAt,
    featured,
    authorName,
    authorImageURL,
    mainImageAlt,
    mainImageCaption,
    mainImageURL,
    body,
    categories,
    slug,
  } = article;
};

export {
  extractProperties,
  QUERY_ARTICLES_FULL,
  QUERY_ARTICLES,
};
