import React, { FC } from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import IRoute from '../models/Route'

type PathItemPropsType = {
  route: IRoute
  toPathPage: (title: string) => void
}

const PathItem: FC<PathItemPropsType> = ({ route, toPathPage }) => {
  return (
    <TouchableOpacity onPress={() => toPathPage(route.title)}>
      <View style={styles.item}>
        <Image style={styles.imgLogo} source={require('../icons/location.png')} />
        <View style={styles.center}>
          <View style={styles.header}>
            <Text style={styles.title}>{route.title}</Text>
            <Image style={styles.star} source={require('../icons/star.png')} />
          </View>
          <Text numberOfLines={1} style={styles.desc}>
            {route.shortDesc}
          </Text>
        </View>
        <View style={styles.end}>
          <Text style={styles.length}>{route.length}</Text>
          <Image style={styles.imgArr} source={require('../icons/arrow.png')} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    borderColor: '#333',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
    marginBottom: 10,
  },
  imgLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  center: {
    flex: 1,
    marginRight: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginRight: 5,
  },
  star: {
    width: 20,
    height: 20,
  },
  desc: {
    fontSize: 17,
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  length: {
    fontSize: 20,
    marginRight: 10,
  },
  imgArr: {
    width: 30,
    height: 30,
  },
})

export default PathItem
