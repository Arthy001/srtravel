import { Car } from "@/types";

export const initialCarsData: Car[] = [
  // 1. Toyota Altis
  {
    id: "car-toyota-altis",
    name: "Toyota Corolla Altis",
    brand: "Toyota",
    model_year: 2024,
    category: "Sedan",
    transmission: "Auto gearbox",
    seats: 4,
    airbags: 7,
    fuel_type: "Petrol",
    price: 0,
    price_per_day: 0,
    monthly_payment: 0,
    discount_percent: 0,
    rating: 4.9,
    review_count: 185,
    location_address: "สุวรรณภูมิ • ดอนเมือง • โคราช • ทั่วไทย",
    distance_airport: "รับ-ส่งสนามบินฟรี",
    image_url: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=900&q=80",
    gallery_urls: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"
    ],
    is_favorite: true,
    mileage: "นั่งได้ 1-3 ท่าน",
    warranty: "ประกันภัยชั้น 1 คุ้มครองเต็มรูปแบบ",
    condition: "รถเช่าพร้อมคนขับ",
    features: ["นั่งสบาย 1-3 ท่าน", "กระเป๋าเดินทาง 2-3 ใบ", "แอร์เย็นฉ่ำ เบาะนุ่ม", "คนขับมืออาชีพ สุภาพ ตรงต่อเวลา"],
    description: "Toyota Corolla Altis รถเก๋งยอดนิยมสำหรับการเดินทางคนเดียว หรือครอบครัวขนาดเล็ก เหมาะสำหรับการรับส่งสนามบิน ติดต่อธุรกิจ หรือท่องเที่ยวต่างจังหวัดอย่างคล่องตัว"
  },

  // 2. Toyota Camry
  {
    id: "car-toyota-camry",
    name: "Toyota Camry",
    brand: "Toyota",
    model_year: 2024,
    category: "Sedan",
    transmission: "Auto gearbox",
    seats: 4,
    airbags: 9,
    fuel_type: "Hybrid",
    price: 0,
    price_per_day: 0,
    monthly_payment: 0,
    discount_percent: 0,
    rating: 5.0,
    review_count: 240,
    location_address: "สุวรรณภูมิ • ดอนเมือง • โคราช • ทั่วไทย",
    distance_airport: "รับ-ส่งสนามบินฟรี",
    image_url: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=900&q=80",
    gallery_urls: [
      "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=1200&q=80"
    ],
    is_favorite: true,
    mileage: "นั่งได้ 1-4 ท่าน (พรีเมียม)",
    warranty: "ประกันภัยชั้น 1 คุ้มครองเต็มรูปแบบ",
    condition: "VIP Executive",
    features: ["ระดับผู้บริหาร นั่งสบาย 1-4 ท่าน", "พื้นที่วางขากว้างขวาง", "ระบบแอร์แยกส่วน เงียบสงบ", "คนขับชำนาญเส้นทางสูงสุด"],
    description: "Toyota Camry ซีดานหรูระดับผู้บริหาร ดีไซน์พรีเมียม ห้องโดยสารกว้างขวาง นุ่มนวล เดินทางไกลไม่เมื่อยล้า เหมาะสำหรับต้อนรับแขก VIP การเดินทางธุรกิจ และงานสำคัญ"
  },

  // 3. Isuzu Mu-X
  {
    id: "car-isuzu-mux",
    name: "Isuzu MU-X",
    brand: "Isuzu",
    model_year: 2024,
    category: "SUV",
    transmission: "Auto gearbox",
    seats: 7,
    airbags: 6,
    fuel_type: "Diesel",
    price: 0,
    price_per_day: 0,
    monthly_payment: 0,
    discount_percent: 0,
    rating: 4.9,
    review_count: 172,
    location_address: "สุวรรณภูมิ • ดอนเมือง • โคราช • ทั่วไทย",
    distance_airport: "รับ-ส่งสนามบินฟรี",
    image_url: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80",
    gallery_urls: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80"
    ],
    is_favorite: false,
    mileage: "นั่งได้ 1-5 ท่าน (กระเป๋าเยอะ)",
    warranty: "ประกันภัยชั้น 1 คุ้มครองเต็มรูปแบบ",
    condition: "Family & Adventure",
    features: ["SUV 7 ที่นั่ง จุผู้โดยสาร 1-5 ท่านสบายๆ", "กระเป๋าเดินทางขนาดใหญ่ได้หลายใบ", "ช่วงล่างนุ่มนวล ทัศนวิสัยดีเยี่ยม", "ลุยได้ทุกสภาพเส้นทาง"],
    description: "Isuzu MU-X รถอเนกประสงค์สำหรับครอบครัวและการเดินทางท่องเที่ยวระยะไกล บรรทุกสัมภาระได้จุใจ เบาะปรับพับได้หลากหลาย ท่องเที่ยวได้ทุกเส้นทางทั้งขึ้นเขาและเลียบทะเล"
  },

  // 4. Toyota Fortuner
  {
    id: "car-toyota-fortuner",
    name: "Toyota Fortuner",
    brand: "Toyota",
    model_year: 2024,
    category: "SUV",
    transmission: "Auto gearbox",
    seats: 7,
    airbags: 7,
    fuel_type: "Diesel",
    price: 0,
    price_per_day: 0,
    monthly_payment: 0,
    discount_percent: 0,
    rating: 5.0,
    review_count: 310,
    location_address: "สุวรรณภูมิ • ดอนเมือง • โคราช • ทั่วไทย",
    distance_airport: "รับ-ส่งสนามบินฟรี",
    image_url: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80",
    gallery_urls: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80"
    ],
    is_favorite: true,
    mileage: "นั่งได้ 1-5 ท่าน (ยอดนิยม)",
    warranty: "ประกันภัยชั้น 1 คุ้มครองเต็มรูปแบบ",
    condition: "Premium SUV",
    features: ["สมรรถนะสูง ปลอดภัย มั่นใจทุกเส้นทาง", "ห้องโดยสารหรูหรา กว้างขวาง", "แอร์เย็นทั่วถึงทุกที่นั่ง", "เหมาะกับทริปท่องเที่ยวทั่วไทย"],
    description: "Toyota Fortuner ยอดนิยมอันดับ 1 ในกลุ่มรถ SUV ขับเคลื่อนทรงพลัง นั่งสบาย ทรงตัวดีเยี่ยม เหมาะสำหรับทั้งทริปครอบครัว ทริปไหว้พระ และการเดินทางข้ามจังหวัด"
  },

  // 5. Toyota Commuter
  {
    id: "car-toyota-commuter",
    name: "Toyota Commuter",
    brand: "Toyota",
    model_year: 2024,
    category: "Van",
    transmission: "Auto gearbox",
    seats: 10,
    airbags: 4,
    fuel_type: "Diesel",
    price: 0,
    price_per_day: 0,
    monthly_payment: 0,
    discount_percent: 0,
    rating: 4.9,
    review_count: 420,
    location_address: "สุวรรณภูมิ • ดอนเมือง • โคราช • ทั่วไทย",
    distance_airport: "รับ-ส่งสนามบินฟรี",
    image_url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80",
    gallery_urls: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
    ],
    is_favorite: true,
    mileage: "นั่งได้ 5-10 ท่าน",
    warranty: "ประกันภัยชั้น 1 คุ้มครองเต็มรูปแบบ",
    condition: "Group & Van Tour",
    features: ["รถตู้โดยสารกว้างขวาง นั่งได้ 5-10 ท่าน", "เบาะนั่งสบายทุกแถว ไม่แออัด", "พื้นที่เก็บสัมภาระด้านหลังจุใจ", "เหมาะกับการเดินทางเป็นหมู่คณะ"],
    description: "Toyota Commuter รถตู้ยอดฮิตสำหรับกลุ่มเพื่อน องค์กร หรือครอบครัวใหญ่ เบาะนุ่ม แอร์เย็นรอบคัน เดินทางไกลสบาย สัมภาระเยอะแค่ไหนก็เอาอยู่ พร้อมคนขับดูแลตลอดการเดินทาง"
  },

  // 6. Toyota Alphard (VIP)
  {
    id: "car-toyota-alphard-vip",
    name: "Toyota Alphard (VIP)",
    brand: "Toyota",
    model_year: 2024,
    category: "Van",
    transmission: "Auto gearbox",
    seats: 7,
    airbags: 9,
    fuel_type: "Hybrid",
    price: 0,
    price_per_day: 0,
    monthly_payment: 0,
    discount_percent: 0,
    rating: 5.0,
    review_count: 530,
    location_address: "สุวรรณภูมิ • ดอนเมือง • โคราช • ทั่วไทย",
    distance_airport: "รับ-ส่งสนามบินฟรี",
    image_url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=80",
    gallery_urls: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80"
    ],
    is_favorite: true,
    mileage: "นั่งได้ 1-5 ท่าน (First Class)",
    warranty: "ประกันภัยชั้น 1 คุ้มครองเต็มรูปแบบ",
    condition: "First Class VIP",
    features: ["เบาะกัปตันไฟฟ้า First Class ปรับเอนนอนได้", "ระบบนวดและที่พักน่อง", "ซันรูฟคู่ บรรยากาศหรูหราเหนือระดับ", "คนขับ VIP มารยาทสุภาพ ขับนุ่มนวลเป็นพิเศษ"],
    description: "Toyota Alphard (VIP) ที่สุดแห่งความสะดวกสบายระดับเฟิร์สคลาส ห้องโดยสารเงียบสงบ เบาะนั่ง Captain Seat ปรับไฟฟ้า เหมาะสำหรับต้อนรับบุคคลสำคัญ ผู้บริหาร และทริปครอบครัวระดับพรีเมียม"
  }
];
