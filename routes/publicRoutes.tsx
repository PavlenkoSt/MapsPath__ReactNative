import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Path from '../screens/Path'
import Header from '../components/Header'
import AddPathModal from '../screens/AddPathModal'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'

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
  const navigatorRef = useNavigationContainerRef()

  return (
    <NavigationContainer ref={navigatorRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: () => <Header navigator={navigatorRef} />,
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
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name="AddPathModal"
            component={AddPathModal}
            options={{ title: 'Add new path' }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default PublicRoutes
