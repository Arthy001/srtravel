import { type SchemaTypeDefinition } from 'sanity'
import { servicesSectionType } from './servicesSection'
import { carType } from './car'
import { reviewType } from './review'
import { faqType } from './faq'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [servicesSectionType, carType, reviewType, faqType],
}
