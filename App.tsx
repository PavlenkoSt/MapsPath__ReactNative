/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import { Provider } from 'mobx-react'
import store from './store'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { observer } from 'mobx-react-lite'
import PublicRoutes from './routes/publicRoutes'

const App = () => {
  return (
    <Provider {...store}>
        {/* <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          
        </ScrollView> */}
        <PublicRoutes/>
    </Provider>
  )
}

const styles = StyleSheet.create({})

export default observer(App)
