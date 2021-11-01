import { ObjectSchema } from 'realm'

const MarkerSchema: ObjectSchema = {
  name: 'Marker',
  properties: {
    id: { type: 'string' },
    longitude: { type: 'int' },
    latitude: { type: 'int' },
  },
  primaryKey: 'id',
}

export default MarkerSchema
