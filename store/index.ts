import { configure, observable } from 'mobx'
import { createContext, useContext } from 'react'
import routesStore from './Routes'

configure({ enforceActions: 'observed' })

class RootStore {
  @observable routesStore = routesStore
}

const rootStore = new RootStore()

export const StoreContext = createContext<RootStore>(rootStore)

export const useStore = (): RootStore => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error('You have forgot to use StoreProvider, shame on you.')
  }
  return store
}

export default rootStore
