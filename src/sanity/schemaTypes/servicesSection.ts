import { defineField, defineType } from 'sanity'

export const servicesSectionType = defineType({
  name: 'servicesSection',
  title: 'จัดการส่วนบริการของเรา (Services Section)',
  type: 'document',
  fieldsets: [
    { name: 'header', title: '1. หัวข้อและสโลแกน (Header & Slogan)' },
    { name: 'banner', title: '2. รูปภาพแบนเนอร์บริการ (Services Banner)' },
    { name: 'rate', title: '3. รูปภาพตารางอัตราค่าบริการ (Rate Card)' },
    { name: 'guarantee', title: '4. แถบรับประกันและข้อมูลติดต่อ (Guarantee & Contact)' },
  ],
  fields: [
    // 1. Header & Slogan
    defineField({
      name: 'badge',
      title: 'ข้อความป้ายกำกับด้านบน (Badge Text)',
      type: 'string',
      description: 'เช่น บริการคุณภาพระดับพรีเมียม / Premium Car Rental Service',
      fieldset: 'header',
    }),
    defineField({
      name: 'title',
      title: 'หัวข้อหลัก (Main Title)',
      type: 'string',
      description: 'เช่น บริการรถเช่าพร้อมคนขับ ที่ตอบโจทย์ทุกการเดินทาง',
      fieldset: 'header',
    }),
    defineField({
      name: 'subtitle',
      title: 'หัวข้อย่อยเน้นสี (Subtitle)',
      type: 'string',
      description: 'เช่น สะดวก ปลอดภัย ตรงต่อเวลา มั่นใจทุกเส้นทาง',
      fieldset: 'header',
    }),
    defineField({
      name: 'slogan',
      title: 'สโลแกน (Slogan / Quote)',
      type: 'text',
      rows: 2,
      description: 'เช่น ให้เราเป็นส่วนหนึ่งในการเดินทางที่ยอดเยี่ยมของคุณในทุกๆ วัน',
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

    // 3. Rate Card Image
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

    // 4. Guarantee & Quick Contact Strip
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
