import { type SchemaTypeDefinition } from 'sanity'
import { carType } from './car'
import { servicesSectionType } from './servicesSection'
import { reviewType } from './review'
import { faqType } from './faq'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [carType, servicesSectionType, reviewType, faqType],
}
