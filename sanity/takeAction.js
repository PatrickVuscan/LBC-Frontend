// @ts-check
import groq from 'groq';

// Note that TAA stands for Take Action Article

const QUERY_CATEGORIES = groq`
  *[_type=="takeActionCategory"] {
    _id,
    name,
  }`;

const QUERY_TAAS_FULL = (offset = 0, limit = 10) => {
  return groq`
  * [_type=="takeActionArticle"] {
    _id,
    title,
    subtitle,
    publishDateTime,
    featured,
    email,
    phoneNumber,
    "authorName": author->name,
    "authorImageURL": author->image.asset->url,
    "mainImageCaption": mainImage.caption,
    "mainImageAlt": mainImage.alt,
    "mainImageURL": mainImage.asset->url,
    "category": category->name,
    "categoryId": category->_id,
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

const QUERY_TAAS = (offset = 0, limit = 10) => {
  return groq`
  *[_type=="takeActionArticle"] {
    _id,
    title,
    subtitle,
    publishDateTime,
    featured,
    email,
    phoneNumber,
    "authorName": author->name,
    "mainImageURL": mainImage.asset->url,
    "category": category->name,
    "categoryId": category->_id,
    "slug": slug.current
  } [${offset}...${offset + limit}]`;
};

const QUERY_TAAS_BY_CATEGORY = (categoryID, offset = 0, limit = 10) => {
  return groq`
  *[_type=="takeActionArticle" && category._ref=="${categoryID}"] {
    _id,
    title,
    subtitle,
    publishDateTime,
    featured,
    email,
    phoneNumber,
    "authorName": author->name,
    "mainImageURL": mainImage.asset->url,
    "category": category->name,
    "categoryId": category->_id,
    "slug": slug.current
  } [${offset}...${offset + limit}]`;
};

const QUERY_TAA = id => {
  return groq`
  * [_type=="takeActionArticle" && _id=="${id}"] {
    _id,
    title,
    subtitle,
    publishDateTime,
    featured,
    email,
    phoneNumber,
    "authorName": author->name,
    "authorImageURL": author->image.asset->url,
    "mainImageCaption": mainImage.caption,
    "mainImageAlt": mainImage.alt,
    "mainImageURL": mainImage.asset->url,
    "category": category->name,
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
  }`;
};

export {
  QUERY_CATEGORIES,
  QUERY_TAAS_FULL,
  QUERY_TAAS,
  QUERY_TAAS_BY_CATEGORY,
  QUERY_TAA,
};
