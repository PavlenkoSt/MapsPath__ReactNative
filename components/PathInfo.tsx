import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IRoute from '../models/Route'

type PathInfoPropsType = {
  route: IRoute | undefined
}

const PathInfo: FC<PathInfoPropsType> = ({ route }) => {
  if (!route) {
    return <Text style={styles.error}>Ooops. Something went wrong.</Text>
  }

  return (
    <View>
      <View>
        <Text>{route.title}</Text>
        <Text>{route.length}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  error: {
    textAlign: 'center',
  },
})

export default PathInfo
