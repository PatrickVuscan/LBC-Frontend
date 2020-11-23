// @ts-check
import groq from 'groq';

const QUERY_CTAS_FULL = (offset = 0, limit = 10) => {
  return groq`
  * [_type=="cta"] {
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

const QUERY_CTAS = (offset = 0, limit = 10) => {
  return groq`
  *[_type=="cta"] {
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

const QUERY_CTA = groq`
  * [_type=="cta"] {
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

// const extractProperties = cta => {
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
//   } = cta;
// };

export {
  QUERY_CTAS_FULL,
  QUERY_CTAS,
  QUERY_CTA,
};
