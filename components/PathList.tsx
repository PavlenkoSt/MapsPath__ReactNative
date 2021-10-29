import { observer } from 'mobx-react'
import React, { FC } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import IRoute from '../models/Route'
import PathItem from './PathItem'

type PathListPropsPage = {
  toPathPage: (title: string, id: string) => void
  routes: IRoute[]
}

const PathList: FC<PathListPropsPage> = ({ toPathPage, routes }) => {
  return (
    <ScrollView>
      {routes && routes.length ? (
        routes.map((route) => <PathItem key={route.id} route={route} toPathPage={toPathPage} />)
      ) : (
        <Text style={styles.noPaths}>No paths.</Text>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  noPaths: {
    textAlign: 'center',
  },
})

export default observer(PathList)
