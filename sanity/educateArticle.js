// @ts-check
import groq from 'groq';

const QUERY_ARTICLES_FULL = (offset = 0, limit = 10) => {
  return groq`
  * [_type=="educateArticle"] {
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

const QUERY_ARTICLES = (offset = 0, limit = 10) => {
  return groq`
  *[_type=="educateArticle"] {
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

const QUERY_ARTICLE = id => {
  return groq`
  * [_type=="educateArticle" && _id=="${id}"] {
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
  QUERY_ARTICLES_FULL,
  QUERY_ARTICLES,
  QUERY_ARTICLE,
};
