/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default {
  name: 'resourceCategory',
  title: 'Resource Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare({ title }) {
      const EMOJIS = {
        Police: '🚓',
        'Police Services': '🚓',
        'Mental Health': '🧠',
        default: 'ℹ️',
      };
      return {
        title,
        media: (
          <span style={{ fontSize: '1.5rem' }}>
            {title ? EMOJIS[title] : EMOJIS.default}
          </span>
        ),
      };
    },
  },
};
