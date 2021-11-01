import RoutesSchema from './schemas/Route'
import Realm from 'realm'
import MarkerSchema from './schemas/Marker'
import IRoute from '../models/Route'

const initRealm = async () => {
  const realm = await Realm.open({
    path: 'routes',
    schema: [RoutesSchema, MarkerSchema],
  })

  const getAllRoutes = () => {
    return realm.objects('Route')
  }

  const addRoute = (route: IRoute) => {
    realm.write(() => {
      realm.create('Route', route)
    })
  }

  const deleteRoute = (id: string) => {
    realm.write(() => {
      const target = realm.objectForPrimaryKey('Route', id)
      if (target) realm.delete(target)
    })
  }

  return { getAllRoutes, addRoute, deleteRoute }
}

const realm = initRealm()

export default realm
