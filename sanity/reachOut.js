// @ts-check
import groq from 'groq';

const QUERY_CATEGORIES = groq`
  *[_type=="reachOutCategory"] {
    _id,
    name,
  }`;

const QUERY_RESOURCES_FULL = (offset = 0, limit = 10) => {
  return groq`
  * [_type=="reachOutArticle"] {
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

const QUERY_RESOURCES = (offset = 0, limit = 10) => {
  return groq`
  *[_type=="reachOutArticle"] {
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

const QUERY_RESOURCES_BY_CATEGORY = (categoryID, offset = 0, limit = 10) => {
  return groq`
  *[_type=="reachOutArticle" && category._ref=="${categoryID}"] {
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

const QUERY_RESOURCE = id => {
  return groq`
  * [_type=="reachOutArticle" && _id=="${id}"] {
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
  QUERY_RESOURCES_FULL,
  QUERY_RESOURCES,
  QUERY_RESOURCES_BY_CATEGORY,
  QUERY_RESOURCE,
};
