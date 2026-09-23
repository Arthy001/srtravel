import { defineField, defineType } from 'sanity'

export const carType = defineType({
  name: 'car',
  title: 'รถยนต์ให้บริการ (Fleet Cars)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'ชื่อรุ่นรถ (Car Name)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'brand',
      title: 'ยี่ห้อ (Brand)',
      type: 'string',
      options: {
        list: ['Toyota', 'Isuzu', 'Honda', 'Mercedes-Benz', 'BMW', 'Other'],
      },
      initialValue: 'Toyota',
    }),
    defineField({
      name: 'category',
      title: 'ประเภทรถ (Category)',
      type: 'string',
      options: {
        list: [
          { title: 'รถเก๋ง (Sedan)', value: 'Sedan' },
          { title: 'รถ SUV (SUV)', value: 'SUV' },
          { title: 'รถตู้ VIP (Van)', value: 'Van' },
        ],
      },
    }),
    defineField({
      name: 'seats',
      title: 'จำนวนที่นั่ง (Seats)',
      type: 'number',
    }),
    defineField({
      name: 'mileage',
      title: 'ข้อความความจุผู้โดยสาร (Capacity Tag)',
      type: 'string',
      description: 'เช่น นั่งได้ 1-4 ท่าน หรือ นั่งได้ 5-10 ท่าน',
    }),
    defineField({
      name: 'image',
      title: 'รูปรถยนต์ (Main Car Image)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'condition',
      title: 'ประเภทบริการ / ป้ายสถานะ',
      type: 'string',
      description: 'เช่น รถเช่าพร้อมคนขับ, VIP Executive, First Class VIP',
    }),
    defineField({
      name: 'features',
      title: 'จุดเด่นของรถ (Features)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'description',
      title: 'รายละเอียดเพิ่มเติม (Description)',
      type: 'text',
      rows: 4,
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
