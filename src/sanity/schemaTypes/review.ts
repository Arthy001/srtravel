import { defineField, defineType } from 'sanity'

export const reviewType = defineType({
  name: 'review',
  title: 'ภาพผลงาน & รีวิวลูกค้า (Showcase & Reviews)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'หัวข้อ / เส้นทางการเดินทาง (Trip Title)',
      type: 'string',
      description: 'เช่น รับ-ส่งสนามบินสุวรรณภูมิ, ทริปครอบครัวเที่ยวเขาใหญ่, ลูกค้าองค์กรสัมมนาพัทยา',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'รูปถ่ายผลงานจริง (Photo)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'ประเภทบริการ (Category Tag)',
      type: 'string',
      options: {
        list: [
          { title: 'รับ-ส่งสนามบิน (Airport Transfer)', value: 'Airport Transfer' },
          { title: 'ท่องเที่ยว / ครอบครัว (Tour & Family)', value: 'ครอบครัว / กรุ๊ปทัวร์' },
          { title: 'ลูกค้าธุรกิจ / องค์กร (Corporate & Business)', value: 'Corporate & Business' },
          { title: 'รถตู้ VIP / Alphard (VIP Service)', value: 'VIP Service' },
          { title: 'เดินทางต่างจังหวัด (Provincial Trip)', value: 'เดินทางต่างจังหวัด' },
        ],
      },
      initialValue: 'Airport Transfer',
    }),
    defineField({
      name: 'tripDate',
      title: 'วันที่ให้บริการ (Service Date)',
      type: 'date',
      description: 'วันที่ส่งลูกค้าจริง (ระบบจะจัดเรียงงานล่าสุดขึ้นก่อนให้อัตโนมัติ)',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'คำบรรยายความประทับใจสั้นๆ (Caption - ไม่บังคับ)',
      type: 'text',
      rows: 2,
      description: 'เช่น "ขอบคุณคุณลูกค้าที่ไว้วางใจใช้บริการ SR Travel เดินทางถึงจุดหมายอย่างปลอดภัยครับ"',
    }),
  ],
  orderings: [
    {
      title: 'วันที่ให้บริการล่าสุด (ใหม่ -> เก่า)',
      name: 'tripDateDesc',
      by: [{ field: 'tripDate', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tripDate',
      media: 'image',
    },
  },
})
