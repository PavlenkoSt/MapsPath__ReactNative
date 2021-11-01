import { ObjectSchema } from 'realm'

const MarkerSchema: ObjectSchema = {
  name: 'Marker',
  properties: {
    _id: { type: 'string' },
    longitude: { type: 'int' },
    latitude: { type: 'int' },
  },
  primaryKey: '_id',
}

export default MarkerSchema
