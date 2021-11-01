import { ObjectSchema } from 'realm'
import MarkerSchema from './Marker'

const RoutesSchema: ObjectSchema = {
  name: 'Route',
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    shortDesc: { type: 'string' },
    fullDesc: { type: 'string' },
    length: { type: 'int' },
    favourite: { type: 'bool' },
    markers: { type: 'list', objectType: 'Marker' }
  },
  primaryKey: 'id',
}

export default RoutesSchema
