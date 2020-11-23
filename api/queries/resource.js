// @ts-check
import groq from 'groq';

const QUERY_RESOURCES_FULL = (offset = 0, limit = 10) => {
  return groq`
  * [_type=="resource"] {
  _id,
  name,
  "subname": subtitle,
  featured,
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
  },
  email,
  phoneNumber,
  slug,
  "categories": resourceCategories[]->{
    "categoryName": name,
    "categoryID": _id
  },
} [${offset}...${offset + limit}]`;
};

const QUERY_RESOURCES = (offset = 0, limit = 10) => {
  return groq`
  * [_type=="resource"] {
  _id,
  name,
  "subname": subtitle,
  featured,
  "mainImageCaption": mainImage.caption,
  "mainImageAlt": mainImage.alt,
  "mainImageURL": mainImage.asset->url,
  email,
  phoneNumber,
  slug,
  "categories": resourceCategories[]->{
    "categoryName": name,
    "categoryID": _id
  },
} [${offset}...${offset + limit}]`;
};

const QUERY_RESOURCE = groq`
  * [_type=="resource"] {
  _id,
  name,
  "subname": subtitle,
  featured,
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
  },
  email,
  phoneNumber
}
`;

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
  QUERY_RESOURCES_FULL,
  QUERY_RESOURCES,
  QUERY_RESOURCE,
};
