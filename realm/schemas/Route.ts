import { ObjectSchema } from 'realm'
import MarkerSchema from './Marker'

const RoutesSchema: ObjectSchema = {
  name: 'Route',
  properties: {
    _id: { type: 'string' },
    title: { type: 'string' },
    shortDesc: { type: 'string' },
    fullDesc: { type: 'string' },
    length: { type: 'int' },
    favourite: { type: 'bool' },
    markers: { type: 'list', objectType: 'Marker' }
  },
  primaryKey: '_id',
}

export default RoutesSchema
