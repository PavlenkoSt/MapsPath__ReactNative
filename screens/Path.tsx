import React, { FC } from 'react'
import { ScrollView, Text } from 'react-native'
import PathInfo from '../components/PathInfo'
import { useStore } from '../store'

type PathPropsType = {
  route: any
}

const Path: FC<PathPropsType> = ({ route }) => {
  const { routesStore } = useStore()

  const activeRoute = routesStore.getRouteById(route.params.id)

  return (
    <ScrollView>
      <PathInfo route={activeRoute} />
    </ScrollView>
  )
}

export default Path
