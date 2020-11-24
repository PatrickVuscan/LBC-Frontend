export default {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  initialValue: {
    featured: false,
  },
  fields: [
    {
      name: 'name',
      title: 'Resource',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },

    {
      name: 'slug',
      title: 'Slug',
      description: 'Unique Resource ID',
      type: 'slug',
      options: {
        source: doc => `${new Date().toISOString().slice(0, 10)}-${doc.name}`,
        maxLength: 96,
      },
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    },
    {
      name: 'resourceCategories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'resourceCategory' } }],
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      description: 'The primary phone number to display',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email Address',
      description: 'The primary email address to display',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      description: "You can add an image if you'd like it to look extra pretty!",
      type: 'figure',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
    },
  },
};
