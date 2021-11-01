import { ObjectSchema } from 'realm'

const MarkerSchema: ObjectSchema = {
  name: 'Marker',
  properties: {
    id: { type: 'string' },
    longitude: { type: 'float' },
    latitude: { type: 'float' },
  },
  primaryKey: 'id',
}

export default MarkerSchema
