import { type SchemaTypeDefinition } from 'sanity'
import { carType } from './car'
import { reviewType } from './review'
import { faqType } from './faq'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [carType, reviewType, faqType],
}
