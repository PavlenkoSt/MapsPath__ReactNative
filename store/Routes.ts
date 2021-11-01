import { action, computed, makeAutoObservable, observable } from 'mobx'
import IRoute from '../models/Route'

class Routes {
  @observable routes: IRoute[] = []

  constructor() {
    makeAutoObservable(this)
  }

  @action setRoutes(routes: IRoute[]) {
    this.routes = routes
  }

  @action addRoute(route: IRoute) {
    this.routes.unshift(route)
  }

  @action removeRoute(id: string) {
    this.routes = this.routes.filter((route) => route.id !== id)
  }

  @action toggleFavouriteRoute(id: string) {
    const target = this.routes.find((route) => route.id === id)
    if (target) target.favourite = !target.favourite
  }

  @action getRouteById(id: string) {
    return this.routes.find((route) => route.id === id)
  }

  @computed get sortedRoutes () {
    return this.routes.slice().sort((a, b) => +b.favourite - +a.favourite)
  }
}

const routesStore = new Routes()

export default routesStore
