import { action, computed, makeAutoObservable, observable } from 'mobx'
import IRoute from '../models/Route'
import realm from '../realm'

class Routes {
  @observable routes: IRoute[] = []

  constructor() {
    makeAutoObservable(this)
  }

  @action _setRoutes(routes: IRoute[]) {
    this.routes = routes
  }

  @action _removeRoute(id: string) {
    this.routes = this.routes.filter((route) => route.id !== id)
  }

  @action getRouteById(id: string) {
    return this.routes.find((route) => route.id === id)
  }

  @action async setRoutesRealm() {
    const routes = await (await realm).getAllRoutes()
    routes.addListener((list) => {
      return this._setRoutes([...list] as unknown as IRoute[])
    })
    return routes.removeAllListeners
  }

  @action async removeRouteRealm(id: string) {
    this._removeRoute(id)
    await (await realm).deleteRoute(id)
  }

  @action async addRouteRealm(route: IRoute) {
    await (await realm).addRoute(route)
  }

  @action async toggleFavouriteRouteRealm(id: string) {
    await (await realm).changeFavouriteStatus(id)
  }

  @computed get sortedRoutes() {
    return this.routes.slice().sort((a, b) => +b.favourite - +a.favourite)
  }
}

const routesStore = new Routes()

export default routesStore
