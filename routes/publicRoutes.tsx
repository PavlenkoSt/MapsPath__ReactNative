import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Path from '../screens/Path'

const publicRoutes = [
  { name: 'Home', component: Home },
  { name: 'Path', component: Path },
]

const Stack = createNativeStackNavigator()

const PublicRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {publicRoutes.map((route) => (
          <Stack.Screen key={route.name} {...route} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default PublicRoutes
