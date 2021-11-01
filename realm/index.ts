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
    const list = realm.objects('Route')
    return [...list]
  }

  const addRoute = (route: IRoute) => {
    realm.write(() => {
      realm.create('Route', route)
    })
  }

  const deleteRoute = (id: string) => {
    let target: any
    realm.write(() => {
      target = realm.objectForPrimaryKey('Route', id)
      realm.delete(target)
    })
  }

  const changeFavouriteStatus = (id: string) => {
    realm.write(() => {
      const target = realm.objectForPrimaryKey('Route', id) as IRoute
      if (target && target.favourite) {
        target.favourite = !target.favourite
        return target.favourite
      }
    })
  }

  return { getAllRoutes, addRoute, deleteRoute, changeFavouriteStatus }
}

const realm = initRealm()

export default realm
