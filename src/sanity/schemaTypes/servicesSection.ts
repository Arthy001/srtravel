import { defineField, defineType } from 'sanity'

export const servicesSectionType = defineType({
  name: 'servicesSection',
  title: 'จัดการส่วนบริการของเรา (Services Section)',
  type: 'document',
  fieldsets: [
    { name: 'header', title: '1. หัวข้อและสโลแกน (Header & Slogan)' },
    { name: 'banner', title: '2. รูปภาพแบนเนอร์บริการ (Services Banner)' },
    { name: 'highlights', title: '3. จุดเด่นบริการและเส้นทางยอดนิยม (Service Highlights & Routes)' },
    { name: 'rate', title: '4. รูปภาพตารางอัตราค่าบริการ (Rate Card)' },
    { name: 'guarantee', title: '5. แถบรับประกันและข้อมูลติดต่อ (Guarantee & Contact)' },
  ],
  fields: [
    // 1. Header & Slogan
    defineField({
      name: 'badge',
      title: 'ข้อความป้ายกำกับด้านบน (Badge Text)',
      type: 'string',
      description: 'เช่น บริการของเรา • Service Type',
      fieldset: 'header',
    }),
    defineField({
      name: 'title',
      title: 'หัวข้อหลัก (Main Title)',
      type: 'string',
      description: 'เช่น SR Travel and Transfer',
      fieldset: 'header',
    }),
    defineField({
      name: 'subtitle',
      title: 'หัวข้อย่อยเน้นสี (Subtitle)',
      type: 'string',
      description: 'เช่น บริการรถเช่าพร้อมคนขับโคราช ทั่วไทย 24 ชั่วโมง / หารถรับส่งด่วน',
      fieldset: 'header',
    }),
    defineField({
      name: 'slogan',
      title: 'สโลแกน (Slogan / Quote)',
      type: 'text',
      rows: 2,
      description: 'เช่น “ทุกเส้นทางของคุณ เราพร้อมดูแล”',
      fieldset: 'header',
    }),

    // 2. Banner Image
    defineField({
      name: 'bannerImage',
      title: 'รูปภาพแบนเนอร์บริการ (Services Banner Image)',
      type: 'image',
      description: 'อัปโหลดรูปภาพบริการ (หากไม่ใส่จะแสดง /services.png เริ่มต้น)',
      options: {
        hotspot: true,
      },
      fieldset: 'banner',
    }),

    // 3. Service Highlights & Routes
    defineField({
      name: 'highlightsBadge',
      title: 'ป้ายกำกับหัวข้อจุดเด่น (Highlights Badge)',
      type: 'string',
      description: 'เช่น บริการหลักและเส้นทางยอดนิยม / Service Offerings & Top Routes',
      fieldset: 'highlights',
    }),
    defineField({
      name: 'highlightsTitle',
      title: 'หัวข้อจุดเด่นบริการ (Highlights Title)',
      type: 'string',
      description: 'เช่น ตอบโจทย์ทุกรูปแบบการเดินทางทั่วไทย',
      fieldset: 'highlights',
    }),
    defineField({
      name: 'highlightsList',
      title: 'รายการบริการและจุดหมายปลายทาง (Service Cards & Destinations)',
      type: 'array',
      description: 'สามารถเพิ่ม แก้ไข จัดเรียง หรือลบการ์ดบริการและเส้นทางได้ตามต้องการ',
      fieldset: 'highlights',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'emoji',
              title: 'อีโมจิ / สัญลักษณ์ (Emoji)',
              type: 'string',
              description: 'เช่น 🚖, 🚘, 🚐, 🏝️, ✈️, 🚗',
              initialValue: '🚖',
            }),
            defineField({
              name: 'title',
              title: 'ชื่อบริการภาษาอังกฤษ (Service Title EN)',
              type: 'string',
              description: 'เช่น Airport Transfer, Private Car with Driver, Intercity Transfer',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'titleTh',
              title: 'ชื่อบริการภาษาไทย (Service Title TH)',
              type: 'string',
              description: 'เช่น บริการรับ-ส่งสนามบิน, รถยนต์ส่วนตัวพร้อมคนขับ, เดินทางข้ามจังหวัดยอดนิยม',
            }),
            defineField({
              name: 'desc',
              title: 'คำอธิบายบริการ (Description)',
              type: 'text',
              rows: 2,
              description: 'เช่น บริการรถรับส่งสนามบิน และรถเช่าพร้อมคนขับทั่วไทย ตรงเวลา ปลอดภัย ไม่ตกเครื่อง',
            }),
            defineField({
              name: 'tags',
              title: 'แท็กสถานที่ / จุดเด่น (Tags & Destinations)',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'เช่น Suvarnabhumi, Don Mueang หรือ Bangkok, Pattaya, Hua Hin, Korat, Trat ฯลฯ',
            }),
            defineField({
              name: 'isDestinations',
              title: 'เป็นการ์ดแสดงจุดหมายปลายทาง (Is Destination Cloud?)',
              type: 'boolean',
              description: 'ติ๊กถูกหากต้องการให้แสดงเป็นแท็กจุดหมายปลายทางพร้อมหมุดแผนที่',
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'titleTh',
              emoji: 'emoji',
            },
            prepare(selection) {
              const { title, subtitle, emoji } = selection
              return {
                title: `${emoji || '🚗'} ${title || 'Service Card'}`,
                subtitle: subtitle || '',
              }
            },
          },
        },
      ],
    }),

    // 4. Rate Card Image
    defineField({
      name: 'rateImage',
      title: 'รูปภาพตารางอัตราค่าบริการ (Rate Card Image)',
      type: 'image',
      description: 'อัปโหลดรูปภาพตารางราคา (หากไม่ใส่จะแสดง /rate.png เริ่มต้น)',
      options: {
        hotspot: true,
      },
      fieldset: 'rate',
    }),

    // 5. Guarantee & Quick Contact Strip
    defineField({
      name: 'guaranteeBadge',
      title: 'ป้ายการันตี (Guarantee Badge)',
      type: 'string',
      description: 'เช่น การันตีความพึงพอใจ 100% / 100% Satisfaction Guaranteed',
      fieldset: 'guarantee',
    }),
    defineField({
      name: 'guaranteeTitle',
      title: 'หัวข้อการันตี (Guarantee Title)',
      type: 'string',
      description: 'เช่น พร้อมดูแลทุกเส้นทาง ตลอด 24 ชั่วโมง',
      fieldset: 'guarantee',
    }),
    defineField({
      name: 'guaranteeDesc',
      title: 'คำอธิบายการันตี (Guarantee Description)',
      type: 'text',
      rows: 2,
      description: 'เช่น คนขับมืออาชีพ ชำนาญทาง ยานพาหนะสะอาด ตรวจสภาพสม่ำเสมอ ปลอดภัยทุกการเดินทาง',
      fieldset: 'guarantee',
    }),
    defineField({
      name: 'phone1',
      title: 'เบอร์โทรติดต่อหลัก 1 (Primary Phone)',
      type: 'string',
      description: 'เช่น 086-724-0454',
      fieldset: 'guarantee',
    }),
    defineField({
      name: 'phone2',
      title: 'เบอร์โทรติดต่อสำรอง 2 (Secondary Phone)',
      type: 'string',
      description: 'เช่น 065-459-5434',
      fieldset: 'guarantee',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'ลิงก์ Facebook (Facebook URL)',
      type: 'url',
      description: 'เช่น https://www.facebook.com/srtravelkorat',
      fieldset: 'guarantee',
    }),
    defineField({
      name: 'whatsappUrl',
      title: 'ลิงก์ WhatsApp (WhatsApp URL)',
      type: 'url',
      description: 'เช่น https://wa.me/66867240454',
      fieldset: 'guarantee',
    }),
    defineField({
      name: 'lineUrl',
      title: 'ลิงก์ LINE Official (LINE URL)',
      type: 'url',
      description: 'เช่น https://line.me/ti/p/~@srtravel',
      fieldset: 'guarantee',
    }),
  ],
})
