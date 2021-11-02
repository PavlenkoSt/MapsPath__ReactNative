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
      realm.delete(target)
    })
  }

  const changeFavouriteStatus = (id: string) => {
    realm.write(() => {
      const target = realm.objectForPrimaryKey('Route', id) as IRoute
      target.favourite = !target.favourite
    })
  }

  return { getAllRoutes, addRoute, deleteRoute, changeFavouriteStatus }
}

const realm = initRealm()

export default realm
