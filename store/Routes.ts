import { action, makeAutoObservable, observable } from 'mobx'

class Routes {
  @observable test: number = 20

  constructor() {
    makeAutoObservable(this)
  }


}

const routesStore = new Routes()

export default routesStore
