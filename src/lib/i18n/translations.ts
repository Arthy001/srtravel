export type Language = "th" | "en";

export const translations = {
  th: {
    nav: {
      services: "บริการของเรา Service Type",
      popularRoutes: "เส้นทางยอดนิยม 🚗",
      serviceModel: "Service Model",
      carType: "Car Type",
      booking: "Booking",
      location: "Location",
      review: "Review",
      faq: "FAQ ?",
      categories: "ประเภทรถทั้งหมด",
      sedan: "รถเก๋ง (Sedan / Hatchback)",
      ev: "รถยนต์ไฟฟ้า (Electric EV)",
      suv: "รถอเนกประสงค์ (SUV / Crossover)",
      van: "รถตู้ VIP (Van / VIP)",
      contactUs: "ติดต่อเรา",
    },
    hero: {
      badge: "SR Travel • บริการรถเช่าท่องเที่ยวและการเดินทางครบวงจรอันดับ 1",
      title: "บริการเช่ารถท่องเที่ยว & เดินทางทั่วไทย",
      verified: "ประกันภัยชั้น 1 ทุกคัน",
      available: "รถพร้อมให้บริการกว่า 500+ คัน",
      tabAll: "รถเช่าทั้งหมด",
      tabCertified: "รถพร้อมคนขับ VIP",
      searchVehicle: "จุดรับรถ หรือ ทริปท่องเที่ยว",
      placeholderVehicle: "สนามบิน, กรุงเทพฯ, พัทยา, ภูเก็ต...",
      locationBranch: "จุดคืนรถ หรือ จังหวัด",
      placeholderLocation: "คืนที่เดิม หรือ ต่างสาขา",
      priceInstallment: "ระยะเวลา / วันเดินทาง",
      placeholderPrice: "เลือกวันเดินทาง",
    },
    popularRoutes: {
      title: "เส้นทางยอดนิยม 🚗",
      subtitle: "สถานที่ท่องเที่ยวยอดฮิตพร้อมรถเช่าขับเอง หรือพร้อมคนขับมืออาชีพ",
      routes: [
        {
          id: "route-1",
          name: "กรุงเทพฯ - พัทยา / เกาะล้าน",
          duration: "1 - 3 วัน",
          distance: "150 กม.",
          priceStarting: "890",
          tag: "ยอดนิยมอันดับ 1",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
          highlight: "ขับรถเลียบหาด เช็กอินคาเฟ่ริมทะเล ชิลล์วันหยุดสุดสัปดาห์"
        },
        {
          id: "route-2",
          name: "กรุงเทพฯ - หัวหิน / ปราณบุรี",
          duration: "2 - 3 วัน",
          distance: "200 กม.",
          priceStarting: "990",
          tag: "ครอบครัว & พักผ่อน",
          image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
          highlight: "เที่ยวทะเลหัวหิน ไหว้พระ อาหารซีฟู้ดสดใหม่ เหมาะกับทุกครอบครัว"
        },
        {
          id: "route-3",
          name: "เชียงใหม่ - นิมมาน / ดอยสุเทพ / ม่อนแจ่ม",
          duration: "3 - 5 วัน",
          distance: "ท่องเที่ยวรอบดอย",
          priceStarting: "1,190",
          tag: "สายแคมป์ & วิวดอย",
          image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
          highlight: "สัมผัสอากาศเย็น หมอกยามเช้า และคาเฟ่ธรรมชาติสุดชิค"
        },
        {
          id: "route-4",
          name: "ภูเก็ต - เขาหลัก / เสม็ดนางชี (พังงา)",
          duration: "2 - 4 วัน",
          distance: "อันดามันโรดทริป",
          priceStarting: "1,290",
          tag: "ทะเลอันดามัน",
          image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80",
          highlight: "ชมวิวอ่าวพังงา จุดชมวิวระดับโลก เที่ยวเกาะสวยน้ำใส"
        }
      ]
    },
    serviceModel: {
      title: "Service Model",
      subtitle: "รูปแบบการบริการที่ยืดหยุ่น ตอบโจทย์ทุกรูปแบบการเดินทางของคุณ",
      models: [
        {
          id: "self-drive",
          title: "เช่ารถขับเอง (Self-Drive)",
          desc: "อิสระเต็มที่กับการเดินทาง ท่องเที่ยวตามใจปรารถนา เลือกรถได้หลากหลายรุ่น ไมล์ไม่จำกัด",
          features: ["ไม่จำกัดระยะทาง", "ประกันภัยชั้น 1 คุ้มครองเต็มรูปแบบ", "ส่งรถถึงที่พักหรือสนามบิน"],
          icon: "car"
        },
        {
          id: "chauffeur",
          title: "รถพร้อมคนขับมืออาชีพ (With Chauffeur)",
          desc: "สะดวกสบาย ปลอดภัย คนขับชำนาญเส้นทาง สุภาพ ตรงต่อเวลา เหมาะสำหรับการเดินทางธุรกิจและทัวร์ VIP",
          features: ["พนักงานขับรถชำนาญเส้นทาง", "ตรงต่อเวลา สุภาพ เป็นส่วนตัว", "รวมค่าน้ำมันและทางด่วน (ตามแพ็กเกจ)"],
          icon: "user-check"
        },
        {
          id: "airport-transfer",
          title: "บริการรับ-ส่งสนามบิน (Airport Transfer)",
          desc: "เดินทางถึงจุดหมายอย่างตรงเวลา ไม่ต้องกังวลเรื่องการต่อรถ ทั้งสนามบินสุวรรณภูมิ ดอนเมือง ภูเก็ต เชียงใหม่",
          features: ["บริการรอรับป้ายชื่อ", "ฟรีคอยเที่ยวบินดีเลย์ 60 นาที", "รถสะอาด กว้างขวาง ใส่สัมภาระได้จุใจ"],
          icon: "plane-landing"
        }
      ]
    },
    bookingSection: {
      title: "Booking ระบบจองรถออนไลน์",
      subtitle: "จองง่าย รวดเร็ว พร้อมรับการยืนยันทันที",
      pickupLabel: "สถานที่รับรถ (Pick-up)",
      returnLabel: "สถานที่ส่งคืนรถ (Return)",
      pickupDate: "วันที่รับรถ",
      returnDate: "วันที่คืนรถ",
      selectCar: "เลือกรุ่นรถที่ต้องการ",
      driverOption: "ต้องการคนขับหรือไม่",
      driverSelf: "ขับเอง (Self-drive)",
      driverWith: "ต้องการพนักงานขับรถ (With Chauffeur)",
      name: "ชื่อผู้ติดต่อ",
      phone: "เบอร์โทรศัพท์",
      lineId: "Line ID (ถ้ามี)",
      submitBtn: "ยืนยันการจอง / ขอใบเสนอราคา",
      note: "เจ้าหน้าที่จะติดต่อกลับเพื่อยืนยันคิวรถภายใน 15 นาที"
    },
    locationSection: {
      title: "Location สาขา & จุดบริการรับ-ส่งรถ",
      subtitle: "ครอบคลุมสนามบินหลักและจุดศูนย์กลางการท่องเที่ยวทั่วประเทศ",
      locations: [
        { name: "สนามบินสุวรรณภูมิ (BKK)", desc: "อาคารผู้โดยสาร ชั้น 2 ประตู 3 บริการ 24 ชม." },
        { name: "สนามบินดอนเมือง (DMK)", desc: "อาคารผู้โดยสาร 2 ชั้น 1 ประตู 14 บริการ 24 ชม." },
        { name: "กรุงเทพฯ - สาขาศูนย์กลาง", desc: "สุขุมวิท / สีลม / พระราม 9 พร้อมบริการส่งถึงหน้าบ้าน/โรงแรม" },
        { name: "สนามบินเชียงใหม่ (CNX)", desc: "เคาน์เตอร์รับรถ ชั้น 1 ตรงข้ามประตูทางออก" },
        { name: "สนามบินภูเก็ต (HKT)", desc: "อาคารผู้โดยสารภายในประเทศและระหว่างประเทศ" },
        { name: "พัทยา / ชลบุรี", desc: "บริการส่งมอบรถถึงหน้าโรงแรมและรีสอร์ตทั่วพัทยา" }
      ]
    },
    reviewSection: {
      title: "Review ความประทับใจจากผู้ใช้งานจริง",
      subtitle: "ลูกค้ากว่า 10,000+ ราย ไว้วางใจให้ SR Travel ดูแลทุกทริปการเดินทาง",
      reviews: [
        {
          name: "คุณธนกร สิทธิโชค",
          trip: "ทริปครอบครัว กรุงเทพฯ - เขาใหญ่",
          rating: 5,
          comment: "ประทับใจมากครับ รถ Toyota Alphard ใหม่กริบ สะอาด คนขับตรงเวลาและขับนุ่มนวลมาก คุณพ่อคุณแม่ชมตลอดทาง แนะนำ SR Travel เลยครับ!",
          date: "กันยายน 2026"
        },
        {
          name: "คุณศิริพร เจริญสุข",
          trip: "เช่าขับเอง ท่องเที่ยวเชียงใหม่ 4 วัน",
          rating: 5,
          comment: "รับรถที่สนามบินเชียงใหม่สะดวกรวดเร็ว รถ Haval H6 สภาพดีมาก ขึ้นดอยอินทนนท์สบายใจ ประกันชั้น 1 เที่ยวแบบไร้กังวลแน่นอนค่ะ",
          date: "สิงหาคม 2026"
        },
        {
          name: "Mr. David Miller",
          trip: "Phuket - Krabi Road Trip",
          rating: 5,
          comment: "Excellent service from SR Travel! Seamless airport pick-up, clear English communication, and the car was immaculate. Will definitely book again.",
          date: "สิงหาคม 2026"
        }
      ]
    },
    faqSection: {
      title: "FAQ ? คำถามที่พบบ่อย",
      subtitle: "รวบรวมข้อสงสัยเกี่ยวกับการเช่ารถ เอกสาร และการบริการของ SR Travel",
      faqs: [
        {
          q: "เอกสารที่ต้องใช้ในการเช่ารถมีอะไรบ้าง?",
          a: "สำหรับผู้ขับขี่สัญชาติไทย ใช้เพียง: 1. บัตรประชาชน 2. ใบขับขี่รถยนต์ (อายุ 1 ปีขึ้นไป) 3. บัตรเครดิตหรือหลักฐานการทำงาน/สลิปเงินเดือน (กรณีไม่มีบัตรเครดิต มีบริการเงินมัดจำโอนสดได้)"
        },
        {
          q: "มีบริการรับ-ส่งรถนอกสถานที่ หรือที่โรงแรมหรือไม่?",
          a: "มีบริการครับ เรามีบริการจัดส่งรถฟรีที่สนามบินหลัก และบริการ Delivery ส่งตรงถึงโรงแรม บ้านพัก หรือที่ทำงานในเขตกรุงเทพฯ และเมืองท่องเที่ยวหลัก"
        },
        {
          q: "ราคารถเช่ารวมประกันภัยแล้วหรือไม่?",
          a: "ราคาทุกคันของ SR Travel รวมประกันภัยคุ้มครองขั้นพื้นฐานเรียบร้อยแล้ว และลูกค้าสามารถเลือกอัปเกรดเป็นประกันภัยชั้น 1 แบบ No Deduct (ไม่มีค่าเสียหายส่วนแรก) เพื่อความสบายใจสูงสุดได้ครับ"
        },
        {
          q: "สามารถเช่ารถพร้อมคนขับสำหรับท่องเที่ยวระยะยาวได้หรือไม่?",
          a: "ได้แน่นอนครับ เรามีบริการพนักงานขับรถมืออาชีพ ทั้งแบบรายวัน รายสัปดาห์ และทริปเหมาเส้นทางทั่วประเทศไทย พร้อมวางแผนจุดแวะพักและสถานที่ท่องเที่ยวร่วมกับคุณ"
        }
      ]
    },
    filter: {
      totalCount: "รถเช่าพร้อมให้บริการกว่า",
      carsUnit: "คัน",
      showMap: "ดูบนแผนที่",
      hideMap: "ซ่อนแผนที่",
      allFilters: "ตัวกรองทั้งหมด",
      carType: "ประเภทรถ",
      priceRange: "ช่วงราคาเช่า/วัน",
      fuelType: "ประเภทเชื้อเพลิง",
      resetAll: "ล้างค่าทั้งหมด",
      maxPrice: "งบประมาณค่าเช่าสูงสุด/วัน",
      applyFilters: "นำตัวกรองไปใช้",
    },
    card: {
      seats: "ที่นั่ง",
      airbags: "ถุงลมนิรภัย",
      reviews: "รีวิว",
      monthly: "ราคาเริ่มต้น",
      perMonth: "/วัน",
      fromAirport: "ส่งฟรีสนามบิน",
      noCarsFound: "ไม่พบรถที่คุณค้นหา",
      adjustFilters: "ลองปรับเปลี่ยนเงื่อนไขตัวกรองใหม่เพื่อค้นหารถที่ต้องการ",
      resetFilterBtn: "ล้างค่าตัวกรองทั้งหมด",
    },
    modal: {
      testDriveTitle: "จองรถเช่า / สอบถามคิวรถว่าง SR Travel",
      finance: "เช่าพร้อมคนขับ",
      cash: "เช่าขับเอง",
      fullName: "ชื่อ - นามสกุล",
      phone: "เบอร์โทรศัพท์ติดต่อ",
      date: "วันที่ต้องการเริ่มเดินทาง",
      downPayment: "จำนวนวันเดินทาง",
      installment60: "ประมาณการค่าบริการรวม",
      cancel: "ยกเลิก",
      submitInquiry: "ส่งข้อมูลจองรถ / ติดต่อเจ้าหน้าที่",
      successTitle: "ส่งข้อมูลการจองรถสำเร็จ!",
      successDesc: "เจ้าหน้าที่ SR Travel จะติดต่อกลับเพื่อยืนยันคิวรถและรายละเอียดการเดินทางโดยเร็วที่สุดครับ",
      close: "ปิดหน้าต่าง",
      cashPrice: "ราคาเช่าต่อวัน",
      estMonthly: "แพ็กเกจพิเศษ",
    },
    footer: {
      desc: "SR Travel ให้บริการเช่ารถท่องเที่ยว รถพร้อมคนขับ VIP และบริการรับส่งสนามบินทั่วประเทศ มั่นใจในคุณภาพรถใหม่สะอาด พร้อมประกันภัยชั้น 1 และทีมงานดูแลตลอด 24 ชั่วโมง",
      col1Title: "ประเภทรถเช่า",
      col1Item1: "รถเก๋งประหยัดน้ำมัน (Sedan)",
      col1Item2: "รถยนต์ไฟฟ้าท่องเที่ยว (EV)",
      col1Item3: "รถ SUV ครอบครัวท่องเที่ยว",
      col1Item4: "รถตู้ VIP หรูหรา (Van)",
      col2Title: "บริการของเรา",
      col2Item1: "เช่ารถขับเองไมล์ไม่จำกัด",
      col2Item2: "บริการรถพร้อมคนขับ VIP",
      col2Item3: "บริการรับ-ส่งสนามบิน",
      col2Item4: "จัดทริปนำเที่ยวและสัมมนา",
      col3Title: "SR Travel",
      col3Item1: "เกี่ยวกับ SR Travel",
      col3Item2: "เส้นทางท่องเที่ยวยอดนิยม",
      col3Item3: "ติดต่อเรา / แจ้งเหตุฉุกเฉิน",
      col3Item4: "จุดบริการและสาขา",
      col4Title: "ช่วยเหลือ & ข้อมูล",
      col4Item1: "คำถามที่พบบ่อย (FAQ)",
      col4Item2: "เอกสารที่ใช้ในการเช่า",
      col4Item3: "เงื่อนไขประกันภัย",
      col4Item4: "รีวิวจากลูกค้า",
      privacy: "นโยบายความเป็นส่วนตัว",
      terms: "ข้อกำหนดและเงื่อนไข",
      sitemap: "แผนผังเว็บไซต์",
      copyright: "© 2026 SR Travel Co., Ltd. All rights reserved.",
    },
  },
  en: {
    nav: {
      services: "Service Type",
      popularRoutes: "Popular Routes 🚗",
      serviceModel: "Service Model",
      carType: "Car Type",
      booking: "Booking",
      location: "Location",
      review: "Review",
      faq: "FAQ ?",
      categories: "All Categories",
      sedan: "Sedan / Hatchback",
      ev: "Electric Vehicles (EV)",
      suv: "SUV / Crossover",
      van: "VIP Van",
      contactUs: "Contact Us",
    },
    hero: {
      badge: "SR Travel • Thailand's #1 Car Rental & Travel Experience",
      title: "Premium Car Rental & Travel in Thailand",
      verified: "First Class Insurance Included",
      available: "500+ Vehicles Ready",
      tabAll: "All Rental Cars",
      tabCertified: "VIP Chauffeur Service",
      searchVehicle: "Pick-up location or destination",
      placeholderVehicle: "Airport, Bangkok, Pattaya, Phuket...",
      locationBranch: "Drop-off location",
      placeholderLocation: "Same location or different city",
      priceInstallment: "Rental Period",
      placeholderPrice: "Select travel dates",
    },
    popularRoutes: {
      title: "Popular Routes 🚗",
      subtitle: "Top travel destinations with self-drive or professional chauffeur service",
      routes: [
        {
          id: "route-1",
          name: "Bangkok - Pattaya / Koh Lan",
          duration: "1 - 3 Days",
          distance: "150 km",
          priceStarting: "890 THB",
          tag: "#1 Popular Route",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
          highlight: "Beachside drives, seaside cafes, perfect weekend getaway"
        },
        {
          id: "route-2",
          name: "Bangkok - Hua Hin / Pranburi",
          duration: "2 - 3 Days",
          distance: "200 km",
          priceStarting: "990 THB",
          tag: "Family & Relaxation",
          image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
          highlight: "Hua Hin beaches, fresh seafood, ideal for family leisure"
        },
        {
          id: "route-3",
          name: "Chiang Mai - Mon Jam / Doi Suthep",
          duration: "3 - 5 Days",
          distance: "Mountain scenic",
          priceStarting: "1,190 THB",
          tag: "Scenic & Camping",
          image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
          highlight: "Breezy mountains, morning mist, and artisanal coffee cafes"
        },
        {
          id: "route-4",
          name: "Phuket - Phang Nga / Khao Lak",
          duration: "2 - 4 Days",
          distance: "Andaman road trip",
          priceStarting: "1,290 THB",
          tag: "Andaman Sea",
          image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80",
          highlight: "World-class Phang Nga viewpoints and pristine islands"
        }
      ]
    },
    serviceModel: {
      title: "Service Model",
      subtitle: "Flexible mobility solutions crafted for every journey",
      models: [
        {
          id: "self-drive",
          title: "Self-Drive Rental",
          desc: "Complete freedom to travel at your own pace with unlimited mileage and high-standard vehicles.",
          features: ["Unlimited Mileage", "Full Comprehensive Insurance", "Free Airport / Hotel Delivery"],
          icon: "car"
        },
        {
          id: "chauffeur",
          title: "With Professional Chauffeur",
          desc: "Relax in luxury with courteous, punctually trained drivers specialized in regional navigation.",
          features: ["Experienced local drivers", "Punctual & private service", "Fuel & Toll packages available"],
          icon: "user-check"
        },
        {
          id: "airport-transfer",
          title: "Airport Transfer Service",
          desc: "Seamless, hassle-free airport pickups at Suvarnabhumi, Don Mueang, Phuket, and Chiang Mai.",
          features: ["Meet & Greet with name sign", "Free 60-min flight delay waiting", "Spacious luggage capacity"],
          icon: "plane-landing"
        }
      ]
    },
    bookingSection: {
      title: "Online Booking System",
      subtitle: "Fast, reliable booking with immediate confirmation",
      pickupLabel: "Pick-up Location",
      returnLabel: "Return Location",
      pickupDate: "Pick-up Date",
      returnDate: "Return Date",
      selectCar: "Select Vehicle Type",
      driverOption: "Driver Preference",
      driverSelf: "Self-drive",
      driverWith: "With Chauffeur",
      name: "Contact Name",
      phone: "Phone Number",
      lineId: "WhatsApp / Line ID",
      submitBtn: "Book Now / Get a Quote",
      note: "Our team will reach out within 15 minutes to confirm availability."
    },
    locationSection: {
      title: "Location & Service Hubs",
      subtitle: "Convenient branches across major international airports and tourist hubs",
      locations: [
        { name: "Suvarnabhumi Airport (BKK)", desc: "Terminal 2nd Fl, Gate 3 (24/7 service)" },
        { name: "Don Mueang Airport (DMK)", desc: "Terminal 2, 1st Fl, Gate 14 (24/7 service)" },
        { name: "Bangkok Central Hub", desc: "Sukhumvit / Rama 9 with doorstep delivery" },
        { name: "Chiang Mai Airport (CNX)", desc: "1st Fl Arrivals, pick-up counter" },
        { name: "Phuket Airport (HKT)", desc: "Domestic & International terminal service" },
        { name: "Pattaya / Chonburi", desc: "Hotel & resort delivery throughout Pattaya" }
      ]
    },
    reviewSection: {
      title: "Customer Reviews",
      subtitle: "Trusted by over 10,000+ travelers exploring Thailand with SR Travel",
      reviews: [
        {
          name: "Thanaporn S.",
          trip: "Family Trip: Bangkok - Khao Yai",
          rating: 5,
          comment: "Superb experience! The Toyota Alphard was clean and new. Driver was very polite and smooth. Highly recommended!",
          date: "Sep 2026"
        },
        {
          name: "Siriporn C.",
          trip: "Self-drive: Chiang Mai 4 Days",
          rating: 5,
          comment: "Seamless airport handover. The Haval H6 was powerful and drove up Doi Inthanon effortlessly. Full insurance gave total peace of mind.",
          date: "Aug 2026"
        },
        {
          name: "David Miller",
          trip: "Phuket - Krabi Road Trip",
          rating: 5,
          comment: "Excellent service from SR Travel! Seamless airport pick-up, clear English communication, and the car was immaculate. Will definitely book again.",
          date: "Aug 2026"
        }
      ]
    },
    faqSection: {
      title: "FAQ ? Frequently Asked Questions",
      subtitle: "Everything you need to know about our rental policies and travel services",
      faqs: [
        {
          q: "What documents are required to rent a vehicle?",
          a: "For international tourists: 1. Passport 2. Valid International Driving Permit (IDP) or driving license in English 3. Credit card or refundable security deposit."
        },
        {
          q: "Do you offer delivery to hotels or private addresses?",
          a: "Yes! We provide free pick-up and drop-off at major airport terminals, as well as doorstep delivery to hotels in Bangkok, Phuket, Chiang Mai, and Pattaya."
        },
        {
          q: "Is comprehensive insurance included in the rental price?",
          a: "All SR Travel rentals include standard collision damage coverage. You can also opt for zero-deductible super cover for complete peace of mind."
        },
        {
          q: "Can I book a vehicle with a chauffeur for multi-day provincial travel?",
          a: "Certainly! We offer dedicated chauffeur services for single or multi-day road trips across Thailand, tailored to your exact itinerary."
        }
      ]
    },
    filter: {
      totalCount: "Over",
      carsUnit: "vehicles ready",
      showMap: "Show map",
      hideMap: "Hide map",
      allFilters: "All filters",
      carType: "Car type",
      priceRange: "Price / day",
      fuelType: "Fuel type",
      resetAll: "Reset all",
      maxPrice: "Max budget per day",
      applyFilters: "Apply Filters",
    },
    card: {
      seats: "seats",
      airbags: "airbags",
      reviews: "reviews",
      monthly: "Starts from",
      perMonth: "/day",
      fromAirport: "Free airport drop-off",
      noCarsFound: "No vehicles found",
      adjustFilters: "Try adjusting your filter criteria to find matching vehicles.",
      resetFilterBtn: "Reset all filters",
    },
    modal: {
      testDriveTitle: "Book Rental / Inquire Availability",
      finance: "With Chauffeur",
      cash: "Self-Drive",
      fullName: "Full Name",
      phone: "Phone Number",
      date: "Travel Date",
      downPayment: "Number of Days",
      installment60: "Estimated Total",
      cancel: "Cancel",
      submitInquiry: "Submit Booking Request",
      successTitle: "Booking Request Received!",
      successDesc: "Our SR Travel representative will get in touch with you shortly to confirm.",
      close: "Close",
      cashPrice: "Price per day",
      estMonthly: "Special Package",
    },
    footer: {
      desc: "SR Travel offers premium car rentals, VIP chauffeur services, and airport transfers across Thailand. Drive with confidence, certified insurance, and 24/7 road assistance.",
      col1Title: "Fleet Types",
      col1Item1: "Economy Sedans",
      col1Item2: "Eco Travel EV",
      col1Item3: "Family SUVs",
      col1Item4: "VIP Vans & MPVs",
      col2Title: "Our Services",
      col2Item1: "Self-drive Unlimited Km",
      col2Item2: "VIP Chauffeur Services",
      col2Item3: "Airport Transfers",
      col2Item4: "Corporate & Event Transport",
      col3Title: "SR Travel",
      col3Item1: "About SR Travel",
      col3Item2: "Popular Travel Routes",
      col3Item3: "Contact Us & Emergency",
      col3Item4: "Branch Locations",
      col4Title: "Support & Info",
      col4Item1: "FAQ ?",
      col4Item2: "Rental Requirements",
      col4Item3: "Insurance Terms",
      col4Item4: "Customer Reviews",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      sitemap: "Sitemap",
      copyright: "© 2026 SR Travel Co., Ltd. All rights reserved.",
    },
  },
};
