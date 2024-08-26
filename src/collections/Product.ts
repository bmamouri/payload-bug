import { CollectionConfig, CollectionSlug } from 'payload'

export const Product: CollectionConfig = {
  slug: 'product',
  admin: {
    group: 'Products',
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'variants',
      type: 'array',
      fields: [
        {
          name: 'code',
          type: 'text',
        },
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'gallery',
          type: 'upload',
          relationTo: 'media',
          hasMany: true,
          required: true,
          maxDepth: 2,
        },
      ],
    },
  ],
}
