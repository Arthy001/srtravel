export type Language = "th" | "en";

export const translations = {
  th: {
    nav: {
      services: "บริการของเรา",
      popularRoutes: "เส้นทางยอดนิยม 🚗",
      serviceModel: "รูปแบบบริการ",
      carType: "ประเภทรถ",
      booking: "จองรถออนไลน์",
      location: "จุดบริการ",
      review: "รีวิวลูกค้า",
      faq: "คำถามที่พบบ่อย",
      categories: "ประเภทรถทั้งหมด",
      sedan: "รถเก๋ง (Sedan / Hatchback)",
      ev: "รถยนต์ไฟฟ้า (Electric EV)",
      suv: "รถอเนกประสงค์ (SUV / Crossover)",
      van: "รถตู้ VIP (Van / VIP)",
      contactUs: "ติดต่อเรา",
    },
    hero: {
      badge: "SR Travel And Transfer 🇹🇭",
      title: "เหมาแท็กซี่โคราช-ต่างจังหวัด ทั่วประเทศไทย 24ชั่วโมง",
      subtitle: "SR Travel And Transfer 🇹🇭 บริการรถแท็กซี่ รถตู้ VIP รถเช่าพร้อมคนขับมืออาชีพ รับส่งสนามบินและเดินทางทั่วไทยตลอด 24 ชม.",
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
    servicesSection: {
      badge: "บริการของเรา • Service Type",
      title: "SR Travel and Transfer",
      subtitle: "บริการรถเช่าพร้อมคนขับโคราช ทั่วไทย 24 ชั่วโมง / หารถรับส่งด่วน",
      slogan: "“ทุกเส้นทางของคุณ เราพร้อมดูแล”",
      rateAlt: "อัตราค่าบริการ SR Travel and Transfer",
      bannerAlt: "บริการรถเช่าพร้อมคนขับ SR Travel and Transfer",
      bookBtn: "จองคิวรถ",
      callBtn: "โทรด่วน",
      guaranteeBadge: "ปลอดภัย 100% • ตรงเวลา • บริการด้วยใจ",
      guaranteeTitle: "เดินทางเมื่อไหร่ มั่นใจ ให้เรา...ดูแลคุณ",
      guaranteeDesc: "ติดต่อสอบถาม / จองรถได้ตลอด 24 ชั่วโมง พร้อมคนขับมืออาชีพ",
      bookOnlineBtn: "จองรถออนไลน์",
      services: [
        {
          title: "รับ–ส่งสนามบิน",
          desc: "สุวรรณภูมิ ดอนเมือง ฯลฯ ตรงเวลา ปลอดภัย คอยเที่ยวบินดีเลย์",
          badge: "บินสบาย ไม่ตกรถ"
        },
        {
          title: "พาเที่ยวทั่วไทย",
          desc: "ทริปครอบครัว ท่องเที่ยวเขาใหญ่ ทะเล ภูเขา หรือทัวร์ไหว้พระตามสั่ง",
          badge: "ทริปท่องเที่ยว"
        },
        {
          title: "เดินทางในกรุงเทพและต่างจังหวัด",
          desc: "เดินทางติดต่อธุรกิจ สัมมนา งานอีเวนต์ หรือทำธุระส่วนตัว ทั่วทุกจังหวัด",
          badge: "โคราช - ทั่วไทย"
        },
        {
          title: "หารถรับส่งด่วน 24 ชั่วโมง",
          desc: "ต้องการรถเร่งด่วน พร้อมจัดหารถและคนขับมืออาชีพบริการทันที",
          badge: "บริการด่วน 24 ชม."
        }
      ]
    },
    popularRoutes: {
      badge: "Popular Routes 🚗",
      title: "เส้นทางยอดนิยม (Popular routes) 🚗",
      subtitle: "บริการรถรับ–ส่งจากสนามบินสุวรรณภูมิ มุ่งสู่จุดหมายปลายทางทั่วไทย ปลอดภัย ตรงเวลา ถึงที่หมายอย่างสบายใจ",
      distanceLabel: "ระยะทาง",
      timeLabel: "เวลา",
      bookRouteBtn: "จองรถเส้นทางนี้",
      otherRoutesBadge: "เส้นทางอื่นๆ ทั่วไทย",
      otherRoutesTitle: "ต้องการเดินทางเส้นทางอื่น?",
      otherRoutesDesc: "SR Travel พร้อมให้บริการเดินทางทั่วประเทศไทย ทั้งรถเก๋ง รถ SUV และรถตู้ VIP สอบถามราคาเหมาได้ทันที",
      callQuickBtn: "โทรด่วน 086-724-0454",
      inquiryBtn: "กรอกฟอร์มขอราคา",
      routes: [
        {
          id: "korat",
          from: "สนามบินสุวรรณภูมิ (BKK)",
          to: "โคราช (Korat / นครราชสีมา)",
          distance: "250 กม.",
          time: "3 - 4 ชม.",
          highlight: "เดินทางสบาย ปลอดภัย ถึงที่หมายตรงเวลา ส่งตรงถึงหน้าบ้านหรือโรงแรม",
          tag: "เส้นทางยอดนิยมอันดับ 1",
          badgeColor: "bg-orange-100 text-orange-950 border-orange-200"
        },
        {
          id: "pattaya",
          from: "สนามบินสุวรรณภูมิ (BKK)",
          to: "พัทยา (Pattaya)",
          distance: "120 กม.",
          time: "1.5 - 2 ชม.",
          highlight: "เที่ยวทะเลพัทยา ชลบุรี รถรับส่งสนามบินสะดวก รวดเร็ว พร้อมคนขับ",
          tag: "ทริปทะเล & ท่องเที่ยว",
          badgeColor: "bg-blue-100 text-blue-950 border-blue-200"
        },
        {
          id: "rayong",
          from: "สนามบินสุวรรณภูมิ (BKK)",
          to: "ระยอง (Rayong / ท่าเรือเกาะเสม็ด)",
          distance: "170 กม.",
          time: "2 - 2.5 ชม.",
          highlight: "เดินทางติดต่อธุรกิจ นิคมอุตสาหกรรม หรือต่อเรือข้ามเกาะเสม็ด",
          tag: "ธุรกิจ & ท่องเที่ยว",
          badgeColor: "bg-emerald-100 text-emerald-950 border-emerald-200"
        },
        {
          id: "trat",
          from: "สนามบินสุวรรณภูมิ (BKK)",
          to: "ตราด (Trat / ท่าเรือเกาะช้าง / เกาะกูด)",
          distance: "315 กม.",
          time: "4 - 5 ชม.",
          highlight: "บริการรถตู้และ SUV นั่งสบายไม่เมื่อยล้า พร้อมส่งถึงท่าเรือเฟอร์รี่",
          tag: "เกาะช้าง & เกาะกูด",
          badgeColor: "bg-amber-100 text-amber-950 border-amber-200"
        },
        {
          id: "chanthaburi",
          from: "สนามบินสุวรรณภูมิ (BKK)",
          to: "จันทบุรี (Chanthaburi)",
          distance: "240 กม.",
          time: "3 - 3.5 ชม.",
          highlight: "ท่องเที่ยวเมืองผลไม้ เขาคิชฌกูฏ อาสนวิหารพระนางมารีอา หรือทำธุระ",
          tag: "เมืองผลไม้ & ไหว้พระ",
          badgeColor: "bg-purple-100 text-purple-950 border-purple-200"
        }
      ]
    },
    serviceModel: {
      badge: "Service Model",
      title: "รถรับส่งสนามบินสุวรรณภูมิ ราคาคุ้มค่า 24 ชั่วโมง",
      subtitle: "เดินทางสะดวก ปลอดภัย รถใหม่สะอาด พร้อมพนักงานขับรถมืออาชีพดูแลตลอดเส้นทาง",
      safetyBadge: "Safety First 100%",
      headline: "We are pleased to provide services in all areas.",
      subHeadline: "ยินดีให้บริการทุกพื้นที่ทั่วไทย ทั้งกรุงเทพฯ ปริมณฑล และต่างจังหวัด",
      bookAndPriceBtn: "จองรถ / เช็กราคาด่วน",
      callBtn: "โทร 086-724-0454",
      serviceList: [
        "Airports and transfer (รับ-ส่งสนามบิน)",
        "Business trips (เดินทางติดต่อธุรกิจ)",
        "Short and long routes (เส้นทางระยะสั้นและทางไกล)",
        "Private Tour (บริการพาเที่ยวแบบส่วนตัว)",
        "Private Car (รถยนต์ส่วนบุคคลพร้อมคนขับ)",
        "รถเช่าพร้อมคนขับทั่วไทย",
        "รถรับส่งสนามบินสุวรรณภูมิ / ดอนเมือง",
        "Airport Transfer 24/7",
        "Taxi Service Private",
        "Transfer VIP Transport",
        "รถตู้ VIP 5-10 ที่นั่ง",
        "รถรับส่งต่างจังหวัดทั่วประเทศ",
        "Private Airport Transfer Bangkok to Pattaya ✈️"
      ]
    },
    carTypeSection: {
      badge: "Our Fleet",
      title: "Car Type • ประเภทรถเช่าพร้อมให้บริการ",
      subtitle: "เลือกรถที่ใช่สำหรับทริปท่องเที่ยวและการเดินทางของคุณ ตรวจเช็กสภาพพร้อมประกันชั้น 1 ทุกคัน",
      bookThisCar: "จองรถรุ่นนี้",
      seatsUnit: "ที่นั่ง",
      insuranceBadge: "ประกันชั้น 1",
      readyBadge: "พร้อมให้บริการ",
      reviewsUnit: "รีวิว"
    },
    bookingSection: {
      title: "Booking ระบบจองรถออนไลน์",
      subtitle: "จองง่าย รวดเร็ว พร้อมรับการยืนยันทันที",
      pickupLabel: "สถานที่รับ",
      returnLabel: "สถานที่ส่ง",
      pickupDate: "วันที่รับ",
      pickupTime: "เวลารับ",
      returnDate: "วันที่ส่ง",
      returnTime: "เวลาส่ง",
      selectCar: "เลือกรุ่นรถที่ต้องการ",
      name: "ชื่อผู้ติดต่อ",
      phone: "เบอร์โทรศัพท์",
      lineId: "Line ID / WhatsApp (ถ้ามี)",
      submitBtn: "ยืนยันการจอง",
      note: "เจ้าหน้าที่จะติดต่อกลับเพื่อยืนยันคิวรถภายใน 15 นาที",
      successTitle: "ส่งข้อมูลการจองเรียบร้อยแล้ว!",
      successDesc: "เจ้าหน้าที่ SR Travel ได้รับข้อมูลการจองของคุณแล้ว และจะติดต่อกลับเพื่อยืนยันคิวรถโดยเร็วที่สุดครับ",
      bookAnotherBtn: "จองคันอื่นเพิ่มเติม",
      locations: [
        { value: "สนามบินสุวรรณภูมิ (BKK)", label: "สนามบินสุวรรณภูมิ (BKK)" },
        { value: "สนามบินดอนเมือง (DMK)", label: "สนามบินดอนเมือง (DMK)" },
        { value: "กรุงเทพฯ - ตัวเมือง / ส่งถึงโรงแรม", label: "กรุงเทพฯ - ตัวเมือง / ส่งถึงโรงแรม" },
        { value: "สนามบินเชียงใหม่ (CNX)", label: "สนามบินเชียงใหม่ (CNX)" },
        { value: "สนามบินภูเก็ต (HKT)", label: "สนามบินภูเก็ต (HKT)" },
        { value: "พัทยา / ชลบุรี", label: "พัทยา / ชลบุรี" },
        { value: "โคราช / นครราชสีมา", label: "โคราช / นครราชสีมา" }
      ]
    },
    locationSection: {
      badge: "Company Location & Service Hubs",
      title: "Location • ที่ตั้งและจุดบริการ",
      subHeadline: "Travel and service • พร้อมดูแลทุกการเดินทางของคุณตลอด 24 ชั่วโมง",
      headOfficeLabel: "Company Location (สำนักงานใหญ่)",
      nearAirportNote: "(ใกล้สนามบินสุวรรณภูมิ เดินทางสะดวก รวดเร็ว พร้อมจัดส่งรถตลอด 24 ชม.)",
      tel1Label: "เบอร์โทรติดต่อ (Tel 1)",
      tel2Label: "เบอร์โทรติดต่อ (Tel 2)",
      open24Badge: "Open 24 Hours / ให้บริการ 24 ชม.",
      helpTitle: "ต้องการจองรถหรือนัดหมายรับ-ส่ง?",
      helpDesc: "เรามีรถประจำอยู่ที่สนามบินสุวรรณภูมิและพื้นที่ใกล้เคียง พร้อมเดินทางไปรับคุณได้ทันทีในเขตสมุทรปราการ กรุงเทพฯ และวิ่งสู่ต่างจังหวัดทั่วประเทศ",
      callQuickBtn: "โทรด่วน 086-724-0454",
      bookAdvanceBtn: "จองรถล่วงหน้าผ่านระบบออนไลน์",
      mapPinTitle: "แผนที่ปักหมุดที่ตั้งสำนักงาน (Google Maps Pin)",
      mapPinExact: "📍 หมุดสีแดงตรงจุด",
      mapPinAddress: "บ้านพิศาล สุวรรณภูมิ โครงการ 2/2 (บางโฉลง) ถ.เฉลิมพระเกียรติ 72 พรรษา อ.บางพลี จ.สมุทรปราการ",
      mapDirectionBtn: "กดนำทาง GPS ด้วย Google Maps",
      hubs: [
        {
          name: "สนามบินสุวรรณภูมิ (BKK)",
          desc: "จุดนัดพบอาคารผู้โดยสาร พร้อมบริการ 24 ชั่วโมง มีพนักงานรอรับป้ายชื่อ",
          highlight: "รับ-ส่งสนามบินหลัก"
        },
        {
          name: "สนามบินดอนเมือง (DMK)",
          desc: "จุดรับ-ส่งผู้โดยสารทั้งภายในประเทศและระหว่างประเทศ สะดวกรวดเร็ว",
          highlight: "บริการ 24 ชั่วโมง"
        },
        {
          name: "โคราช / นครราชสีมา",
          desc: "บริการรถพร้อมคนขับครอบคลุมทั่วจังหวัดนครราชสีมา เขาใหญ่ และภาคอีสาน",
          highlight: "ศูนย์บริการภาคอีสาน"
        }
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
      title: "FAQ คำถามที่พบบ่อย ?",
      subtitle: "รวบรวมคำถามที่พบบ่อยเกี่ยวกับการเดินทางและบริการเหมารถ SR Travel",
      faqs: [
        {
          q: "มีรถจากสนามบินสุวรรณภูมิไปโคราชไหม?",
          a: "มีค่ะ SR Travel มีบริการรับ-ส่ง สนามบินมาโคราช มีทั้งรถเก๋ง รถ SUV เเละรถตู้ สามารถจองล่วงหน้าได้ค่ะ"
        },
        {
          q: "รถเหมาจากสนามบินสุวรรณภูมิไปโคราช ราคาเท่าไหร่?",
          a: "ราคาเริ่มต้น รถเก๋งอยู่ที่ 2,500บาท รวมทางด่วนเเละน้ำมันเเล้ว  เเต่ราคาขึ้นอยู่กับระยะทางด้วยค่ะ"
        },
        {
          q: "มีรถพร้อมคนขับไปเขาใหญ่ไหม?",
          a: "มีบริการรถพร้อมคนขับจากกรุงเทพฯ และพื้นที่ใกล้เคียงไปเขาใหญ่ รวมถึงบริการเหมารถเที่ยวเขาใหญ่"
        },
        {
          q: "มีบริการคนขับที่เป็นผู้หญิงไหม?",
          a: "มีค่ะ ทางเรามีบริการคนขับผู้หญิง ลูกค้าคุณผู้หญิงที่เดินทางคนเดียว สามารถเลือกคนขับที่เป็นผู้หญิงได้เลยค่ะ เเค่เเจ้งกับทางบริษัท ก็สามารถเดินทางได้สบายใจไร้กังวนได้เลยค่ะ"
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
      services: "Our Services",
      popularRoutes: "Popular Routes 🚗",
      serviceModel: "Service Model",
      carType: "Our Fleet",
      booking: "Book Online",
      location: "Locations",
      review: "Reviews",
      faq: "FAQ",
      categories: "All Categories",
      sedan: "Sedan / Hatchback",
      ev: "Electric Vehicles (EV)",
      suv: "SUV / Crossover",
      van: "VIP Van",
      contactUs: "Contact Us",
    },
    hero: {
      badge: "SR Travel And Transfer 🇹🇭",
      title: "Chauffeur & Taxi Service: Korat to All Thailand 24/7",
      subtitle: "SR Travel And Transfer 🇹🇭 Professional Chauffeur, VIP Van & Airport Transfers nationwide, 24 hours.",
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
    servicesSection: {
      badge: "Our Services • Service Type",
      title: "SR Travel and Transfer",
      subtitle: "Chauffeur & Taxi Service: Korat to All Thailand 24/7 / Urgent Dispatch",
      slogan: "“Every route of yours, we are ready to take care”",
      rateAlt: "SR Travel and Transfer Service Rates",
      bannerAlt: "SR Travel and Transfer Chauffeur & Fleet Service",
      bookBtn: "Book Route",
      callBtn: "Call Now",
      guaranteeBadge: "100% Safe • Punctual • Heartfelt Service",
      guaranteeTitle: "Whenever you travel, rest assured... let us take care of you",
      guaranteeDesc: "Contact & inquiry available 24/7 with professional chauffeurs",
      bookOnlineBtn: "Book Online",
      services: [
        {
          title: "Airport Transfers",
          desc: "BKK, DMK & regional airports with punctual 24/7 flight tracking service",
          badge: "24/7 Airport"
        },
        {
          title: "Travel Across Thailand",
          desc: "Custom road trips to Khao Yai, beaches, mountains & bespoke private tours",
          badge: "Private Tours"
        },
        {
          title: "City & Upcountry Trips",
          desc: "Business trips, conferences, seminars & personal travel across all provinces",
          badge: "Nationwide"
        },
        {
          title: "24/7 Express Dispatch",
          desc: "Immediate dispatch for urgent travel needs with verified professional drivers",
          badge: "Express 24H"
        }
      ]
    },
    popularRoutes: {
      badge: "Popular Routes 🚗",
      title: "Popular Routes 🚗",
      subtitle: "Airport transfer & chauffeur service from Suvarnabhumi Airport to destinations across Thailand",
      distanceLabel: "Distance",
      timeLabel: "Time",
      bookRouteBtn: "Book This Route",
      otherRoutesBadge: "Other Routes in Thailand",
      otherRoutesTitle: "Looking for other routes?",
      otherRoutesDesc: "SR Travel provides nationwide transfers with Sedans, SUVs, and VIP Vans. Inquire for custom quotes anytime.",
      callQuickBtn: "Call 086-724-0454",
      inquiryBtn: "Get a Quote",
      routes: [
        {
          id: "korat",
          from: "Suvarnabhumi Airport (BKK)",
          to: "Nakhon Ratchasima (Korat)",
          distance: "250 km",
          time: "3 - 4 hrs",
          highlight: "Comfortable, safe, and punctual transfer straight to your home or hotel",
          tag: "#1 Most Popular Route",
          badgeColor: "bg-orange-100 text-orange-950 border-orange-200"
        },
        {
          id: "pattaya",
          from: "Suvarnabhumi Airport (BKK)",
          to: "Pattaya / Chonburi",
          distance: "120 km",
          time: "1.5 - 2 hrs",
          highlight: "Fast and convenient airport transfer with private driver to Pattaya beaches",
          tag: "Beach & Leisure",
          badgeColor: "bg-blue-100 text-blue-950 border-blue-200"
        },
        {
          id: "rayong",
          from: "Suvarnabhumi Airport (BKK)",
          to: "Rayong / Koh Samet Pier",
          distance: "170 km",
          time: "2 - 2.5 hrs",
          highlight: "Direct transfer for business estates or ferry connection to Koh Samet",
          tag: "Business & Beach",
          badgeColor: "bg-emerald-100 text-emerald-950 border-emerald-200"
        },
        {
          id: "trat",
          from: "Suvarnabhumi Airport (BKK)",
          to: "Trat / Koh Chang & Koh Kood Piers",
          distance: "315 km",
          time: "4 - 5 hrs",
          highlight: "Spacious Vans and SUVs for group travel straight to island ferry terminals",
          tag: "Koh Chang & Koh Kood",
          badgeColor: "bg-amber-100 text-amber-950 border-amber-200"
        },
        {
          id: "chanthaburi",
          from: "Suvarnabhumi Airport (BKK)",
          to: "Chanthaburi",
          distance: "240 km",
          time: "3 - 3.5 hrs",
          highlight: "Travel to fruit orchards, Khao Khitchakut, historical cathedrals or business",
          tag: "Culture & Orchards",
          badgeColor: "bg-purple-100 text-purple-950 border-purple-200"
        }
      ]
    },
    serviceModel: {
      badge: "Service Model",
      title: "Suvarnabhumi Airport Transfers • Best Rates 24 Hours",
      subtitle: "Convenient, safe, clean vehicles with professional chauffeurs dedicated to your entire trip",
      safetyBadge: "Safety First 100%",
      headline: "We are pleased to provide services in all areas.",
      subHeadline: "Proudly serving all regions across Thailand including Bangkok, metropolitan areas, and upcountry.",
      bookAndPriceBtn: "Book / Check Price",
      callBtn: "Call 086-724-0454",
      serviceList: [
        "Airports and transfer",
        "Business trips & Conferences",
        "Short and long-distance routes",
        "Private Tour & Sightseeing",
        "Private Car with Chauffeur",
        "Chauffeur Service Across Thailand",
        "Suvarnabhumi & Don Mueang Airport Transfer",
        "Airport Transfer 24/7",
        "Taxi Service Private",
        "Transfer VIP Transport",
        "VIP Vans 5-10 Seats",
        "Provincial Transfers Nationwide",
        "Private Airport Transfer Bangkok to Pattaya ✈️"
      ]
    },
    carTypeSection: {
      badge: "Our Fleet",
      title: "Car Type • Available Fleet Ready to Serve",
      subtitle: "Choose the perfect vehicle for your journey with full Class 1 insurance and 24/7 assistance.",
      bookThisCar: "Book This Car",
      seatsUnit: "seats",
      insuranceBadge: "Class 1 Insurance",
      readyBadge: "Ready to Serve",
      reviewsUnit: "reviews"
    },
    bookingSection: {
      title: "Online Booking System",
      subtitle: "Fast, reliable booking with immediate confirmation",
      pickupLabel: "Pick-up Location",
      returnLabel: "Drop-off Location",
      pickupDate: "Pick-up Date",
      pickupTime: "Pick-up Time",
      returnDate: "Drop-off Date",
      returnTime: "Drop-off Time",
      selectCar: "Select Vehicle Model",
      name: "Contact Name",
      phone: "Phone Number",
      lineId: "WhatsApp / Line ID (Optional)",
      submitBtn: "Book Now",
      note: "Our team will reach out within 15 minutes to confirm availability.",
      successTitle: "Booking Request Received!",
      successDesc: "Our SR Travel representative has received your request and will contact you shortly to confirm.",
      bookAnotherBtn: "Book Another Vehicle",
      locations: [
        { value: "สนามบินสุวรรณภูมิ (BKK)", label: "Suvarnabhumi Airport (BKK)" },
        { value: "สนามบินดอนเมือง (DMK)", label: "Don Mueang Airport (DMK)" },
        { value: "กรุงเทพฯ - ตัวเมือง / ส่งถึงโรงแรม", label: "Bangkok City / Hotel Transfer" },
        { value: "สนามบินเชียงใหม่ (CNX)", label: "Chiang Mai Airport (CNX)" },
        { value: "สนามบินภูเก็ต (HKT)", label: "Phuket Airport (HKT)" },
        { value: "พัทยา / ชลบุรี", label: "Pattaya / Chonburi" },
        { value: "โคราช / นครราชสีมา", label: "Nakhon Ratchasima (Korat)" }
      ]
    },
    locationSection: {
      badge: "Company Location & Service Hubs",
      title: "Location • Branches & Service Hubs",
      subHeadline: "Travel and service • Ready to assist your journey 24 hours daily",
      headOfficeLabel: "Company Head Office",
      nearAirportNote: "(Near Suvarnabhumi Airport with fast 24/7 vehicle dispatch)",
      tel1Label: "Phone Contact (Tel 1)",
      tel2Label: "Phone Contact (Tel 2)",
      open24Badge: "Open 24 Hours Daily",
      helpTitle: "Looking to book or schedule a pickup?",
      helpDesc: "We maintain ready vehicles stationed around Suvarnabhumi Airport and Bangkok, ready to pick you up immediately.",
      callQuickBtn: "Call 086-724-0454",
      bookAdvanceBtn: "Book in Advance Online",
      mapPinTitle: "Head Office Google Maps Pin",
      mapPinExact: "📍 Exact Red Marker",
      mapPinAddress: "68/271 Banpisan Suvarnabhumi 2/2, Moo 5 Chaloem Phrakiat 72 Phansa Rd, Bang Chalong, Bang Phli, Samut Prakan 10540",
      mapDirectionBtn: "Navigate via Google Maps GPS",
      hubs: [
        {
          name: "Suvarnabhumi Airport (BKK)",
          desc: "Terminal meeting point with 24/7 name-sign meet & greet service",
          highlight: "Primary Airport Hub"
        },
        {
          name: "Don Mueang Airport (DMK)",
          desc: "Domestic and international passenger pickups with rapid dispatch",
          highlight: "24/7 Airport Service"
        },
        {
          name: "Nakhon Ratchasima (Korat)",
          desc: "Chauffeur and rental hubs covering Korat, Khao Yai, and the entire Northeast",
          highlight: "Northeast Regional Hub"
        }
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
