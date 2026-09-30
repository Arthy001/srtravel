import { client } from './client'
import { urlFor } from './image'
import { Car } from '@/types'
import { initialCarsData } from '@/lib/data/mockCars'

export interface SanityCarDoc {
  _id: string
  name: string
  slug: { current: string }
  brand: string
  category: string
  seats: number
  mileage?: string
  condition?: string
  image?: any
  features?: string[]
  description?: string
  order?: number
}

export interface SanityReviewDoc {
  _id: string
  title: string
  tag: string
  image?: any
  tripDate: string
  caption?: string
}

export interface SanityFaqDoc {
  _id: string
  question: string
  answer: string
  order?: number
}

// Fetch all cars from Sanity with fallback to mockCars
export async function getCarsFromSanity(): Promise<Car[]> {
  try {
    const query = `*[_type == "car"] | order(order asc)`
    const docs = await client.fetch<SanityCarDoc[]>(query)

    if (!docs || docs.length === 0) {
      return initialCarsData
    }

    return docs.map((doc) => {
      const imgUrl = doc.image ? urlFor(doc.image).width(1200).url() : '/cars/altis.webp'
      return {
        id: doc.slug?.current || doc._id,
        name: doc.name,
        brand: doc.brand || 'Toyota',
        model_year: 2024,
        category: (doc.category as any) || 'Sedan',
        transmission: 'Auto gearbox',
        seats: doc.seats || 4,
        airbags: 7,
        fuel_type: 'Petrol',
        price: 0,
        price_per_day: 0,
        monthly_payment: 0,
        discount_percent: 0,
        rating: 5.0,
        review_count: 200,
        location_address: 'สุวรรณภูมิ • ดอนเมือง • โคราช • ทั่วไทย',
        distance_airport: 'รับ-ส่งสนามบินฟรี',
        image_url: imgUrl,
        gallery_urls: [imgUrl],
        is_favorite: true,
        mileage: doc.mileage || 'นั่งได้ 1-4 ท่าน',
        warranty: 'ประกันภัยชั้น 1 คุ้มครองเต็มรูปแบบ',
        condition: doc.condition || 'รถเช่าพร้อมคนขับ',
        features: doc.features || [],
        description: doc.description || '',
      }
    })
  } catch (error) {
    console.warn('Sanity getCars error, using local fallback:', error)
    return initialCarsData
  }
}

// Fetch reviews from Sanity sorted by tripDate descending (newest first)
export async function getReviewsFromSanity(): Promise<{
  id: string
  title: string
  tag: string
  image: string
  tripDate: string
  comment: string
}[]> {
  try {
    const query = `*[_type == "review"] | order(tripDate desc)`
    const docs = await client.fetch<SanityReviewDoc[]>(query)

    if (!docs || docs.length === 0) {
      return []
    }

    return docs.map((doc) => ({
      id: doc._id,
      title: doc.title,
      tag: doc.tag,
      image: doc.image ? urlFor(doc.image).width(1000).url() : '/review1.jpg',
      tripDate: doc.tripDate,
      comment: doc.caption || '',
    }))
  } catch (error) {
    console.warn('Sanity getReviews error:', error)
    return []
  }
}

// Fetch FAQs from Sanity sorted by order ascending
export async function getFaqsFromSanity(): Promise<{ q: string; a: string }[]> {
  try {
    const query = `*[_type == "faq"] | order(order asc)`
    const docs = await client.fetch<SanityFaqDoc[]>(query)

    if (!docs || docs.length === 0) {
      return []
    }

    return docs.map((doc) => ({
      q: doc.question,
      a: doc.answer,
    }))
  } catch (error) {
    console.warn('Sanity getFaqs error:', error)
    return []
  }
}

export interface ServiceHighlightItem {
  emoji?: string
  title: string
  titleTh?: string
  desc?: string
  tags?: string[]
  isDestinations?: boolean
}

export interface ServicesSectionData {
  badge?: string
  title?: string
  subtitle?: string
  slogan?: string
  bannerImageUrl?: string
  highlightsBadge?: string
  highlightsTitle?: string
  highlightsList?: ServiceHighlightItem[]
  rateImageUrl?: string
  guaranteeBadge?: string
  guaranteeTitle?: string
  guaranteeDesc?: string
  phone1?: string
  phone2?: string
  facebookUrl?: string
  whatsappUrl?: string
  lineUrl?: string
}

// Fetch Services Section Data from Sanity
export async function getServicesSectionFromSanity(): Promise<ServicesSectionData | null> {
  try {
    const query = `*[_type == "servicesSection"][0]`
    const doc = await client.fetch<any>(query)

    if (!doc) {
      return null
    }

    return {
      badge: doc.badge,
      title: doc.title,
      subtitle: doc.subtitle,
      slogan: doc.slogan,
      bannerImageUrl: doc.bannerImage ? urlFor(doc.bannerImage).width(1400).url() : undefined,
      highlightsBadge: doc.highlightsBadge,
      highlightsTitle: doc.highlightsTitle,
      highlightsList: doc.highlightsList,
      rateImageUrl: doc.rateImage ? urlFor(doc.rateImage).width(1400).url() : undefined,
      guaranteeBadge: doc.guaranteeBadge,
      guaranteeTitle: doc.guaranteeTitle,
      guaranteeDesc: doc.guaranteeDesc,
      phone1: doc.phone1,
      phone2: doc.phone2,
      facebookUrl: doc.facebookUrl,
      whatsappUrl: doc.whatsappUrl,
      lineUrl: doc.lineUrl,
    }
  } catch (error) {
    console.warn('Sanity getServicesSection error:', error)
    return null
  }
}




