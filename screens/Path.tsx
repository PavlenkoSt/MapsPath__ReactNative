import React, { FC } from 'react'
import { ScrollView, Text } from 'react-native'
import Map from '../components/Map'
import PathInfo from '../components/PathInfo'
import { useStore } from '../store'

type PathPropsType = {
  route: any
}

const Path: FC<PathPropsType> = ({ route }) => {
  const { routesStore } = useStore()

  const activeRoute = routesStore.getRouteById(route.params.id)

  if (!activeRoute) {
    return <Text>Ooops. Some error.</Text>
  }

  return (
    <ScrollView>
      <PathInfo route={activeRoute} />
      <Map editMode={false} markers={activeRoute.markers} length={activeRoute.length} />
    </ScrollView>
  )
}

export default Path
