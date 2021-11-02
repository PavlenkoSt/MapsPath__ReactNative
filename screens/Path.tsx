import { observer } from 'mobx-react'
import React, { FC } from 'react'
import { ScrollView, Text } from 'react-native'
import Map from '../components/Map'
import PathActions from '../components/PathActions'
import PathInfo from '../components/PathInfo'
import { useStore } from '../store'

type PathPropsType = {
  route: any
  navigation: any
}

const Path: FC<PathPropsType> = ({ route, navigation }) => {
  const { routesStore } = useStore()

  const activeRoute = routesStore.getRouteById(route.params.id)

  if (routesStore.loading) {
    return <Text>Loading...</Text>
  }

  if (!activeRoute) {
    return <Text>Ooops. Some error.</Text>
  }

  return (
    <ScrollView>
      <PathInfo route={activeRoute} />
      <Map editMode={false} markers={activeRoute.markers} length={activeRoute.length} />
      <PathActions
        id={activeRoute.id}
        favourite={activeRoute.favourite}
        navigation={navigation}
        title={activeRoute.title}
      />
    </ScrollView>
  )
}

export default observer(Path)
