/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react'
import { Provider } from 'mobx-react'
import store from './store'
import { observer } from 'mobx-react-lite'
import PublicRoutes from './routes/publicRoutes'
import Toast from 'react-native-toast-message'
import realm from './realm'

const App = () => {
  useEffect(() => {
    const test = async () => {
      const { getAllRoutes } = await realm
      getAllRoutes()
    }
    test()
  }, [])

  return (
    <Provider {...store}>
      <PublicRoutes />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </Provider>
  )
}

export default observer(App)
