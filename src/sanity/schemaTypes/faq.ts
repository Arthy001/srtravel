import { defineField, defineType } from 'sanity'

export const faqType = defineType({
  name: 'faq',
  title: 'คำถามที่พบบ่อย (FAQs)',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'คำถาม (Question)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'คำตอบ (Answer)',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'ลำดับการแสดงผล (Display Order)',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'ลำดับการแสดงผล',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
