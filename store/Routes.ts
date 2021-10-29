import { action, makeAutoObservable, observable } from 'mobx'

class Routes {
  @observable routes = []

  constructor() {
    makeAutoObservable(this)
  }


}

const routesStore = new Routes()

export default routesStore
