import React from 'react'
import { ScrollView, View } from 'react-native'
import { useStore } from '../store'
import PathItem from './PathItem'

const PathList = () => {
  const { routesStore } = useStore()

  return (
    <ScrollView>
      {routesStore.routes.map((route) => (
        <PathItem key={route.id} />
      ))}
    </ScrollView>
  )
}

export default PathList
