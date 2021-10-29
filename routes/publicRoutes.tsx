import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Path from '../screens/Path'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const pathHeaderStyles = {
  headerStyle: {
    backgroundColor: '#EBA649',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  contentStyle: { padding: 10, backgroundColor: '#EBFFFC' },
}

const PublicRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => <Header />,
            ...(pathHeaderStyles as NativeStackNavigationOptions),
          }}
        />
        <Stack.Screen
          name="Path"
          component={Path}
          options={({ route }: any) => ({
            title: route?.params?.title || 'Path',
            ...(pathHeaderStyles as NativeStackNavigationOptions),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default PublicRoutes
