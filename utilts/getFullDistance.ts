import { getDistance } from 'geolib'
import IMarker from '../models/marker'

const getFullDistance = (markers: IMarker[]) => {
  let total = 0
  for (let i = 0; i < markers.length; i++) {
    if (markers[i] && markers[i + 1]) {
      const cur = markers[i]
      const next = markers[i + 1]
      total += getDistance(cur, next)
    }
  }
  return total
}

export default getFullDistance
