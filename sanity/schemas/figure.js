export default {
  name: 'figure',
  type: 'image',
  options: {
    hotspot: true,
  },
  styles: [{ title: 'Normal', value: 'normal' }],
  lists: [],
  fields: [
    {
      name: 'caption',
      title: 'Caption Text',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
  ],
};
