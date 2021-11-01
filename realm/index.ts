import RoutesSchema from './schemas/Route'
import Realm from 'realm'
import MarkerSchema from './schemas/Marker'

const initRealm = async () => {
  const realm = await Realm.open({
    path: 'routes',
    schema: [RoutesSchema, MarkerSchema],
  })

  // console.log('realm inited')
  // realm.write(() => {
  //   realm.create('Route', {
  //     _id: '1',
  //     title: 'route 1',
  //     shortDesc: 'short desc',
  //     fullDesc: 'full desc',
  //     length: 100,
  //     favourite: false,
  //   })
  //   console.log(`route created`)
  // })

  const getAllRoutes = () => {
    const routes = realm.objects('Route')
    console.log('routes', routes)
  }
  return { getAllRoutes }
}

const realm = initRealm()

export default realm
