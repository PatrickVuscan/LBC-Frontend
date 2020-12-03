import React from 'react';
import Span from './Span';

// * This is used for rendering text blocks from Sanity *
// This wonderful hunk of code takes a block from the body array, and loops
// through the children, rendering the inner spans
const Block = ({
  blockChildren: children, markDefs, style, level, listItem,
}) => {
  const components = [];
  const links = {};

  // Go through markDefs and map each link
  markDefs && markDefs.forEach(v => {
    links[v._key] = { type: v._type, url: v.href };
  });

  children.forEach(v => {
    if (v._type === 'span') {
      components.push(
        <Span
          key={v._key}
          span={v}
          blockStyle={style}
          links={links}
          level={level}
          listItem={listItem}
        />,
      );
    } else {
      // This is an error, shouldn't happen. If you see this popup, copy and paste the string,
      // and show it to Patrick
      console.log(`encountered type other than span in blockRenderer, type: ${v._type}`);
    }
  });

  return (
    <>
      {components}
    </>
  );
};

export default Block;
