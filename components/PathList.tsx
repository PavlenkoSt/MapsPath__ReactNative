import React, { FC } from 'react'
import { ScrollView } from 'react-native'
import { useStore } from '../store'
import PathItem from './PathItem'


type PathListPropsPage = {
  toPathPage: (title: string) => void
}

const PathList: FC<PathListPropsPage> = ({toPathPage}) => {
  const { routesStore } = useStore()

  return (
    <ScrollView>
      {routesStore.routes.map((route) => (
        <PathItem key={route.id} route={route} toPathPage={toPathPage} />
      ))}
    </ScrollView>
  )
}

export default PathList
