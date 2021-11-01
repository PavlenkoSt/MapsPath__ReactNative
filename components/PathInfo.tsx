import React, { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import IRoute from '../models/Route'
import convertUnit from '../utilts/convertUnit'

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
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{route.title}</Text>
          {route.favourite && <Image source={require('../icons/star.png')} style={styles.fav} />}
        </View>
        <Text style={styles.length}>{convertUnit(route.length)}</Text>
      </View>
      <Text style={styles.desc}>{route.fullDesc}</Text>
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
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#333',
    fontSize: 20,
    fontWeight: '700',
    marginRight: 5,
  },
  fav: {
    width: 20,
    height: 20,
  },
  length: {
    color: '#333',
    fontSize: 16,
  },
  desc: {
    fontSize: 16,
    marginBottom: 10,
  },
})

export default PathInfo
