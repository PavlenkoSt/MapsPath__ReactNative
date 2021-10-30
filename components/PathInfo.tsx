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
      <View style={styles.header}>
        <Text style={styles.title}>{route.title}</Text>
        <Text style={styles.length}>{route.length}</Text>
      </View>
      <Text style={styles.desc} >{route.fullDesc}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  error: {
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  title: {
    color: '#333',
    fontSize: 30,
    fontWeight: '700'
  },
  length: {
    color: '#333',
    fontSize: 20,
  },
  desc:{
    fontSize: 20,
    marginBottom: 10
  }
})

export default PathInfo
