import React from 'react'
import { TextInput, StyleSheet, View, Image } from 'react-native'

const Sort = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <Image style={styles.img} source={require('../icons/search.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#333',
    borderWidth: 2,
    padding: 10,
    fontSize: 20,
    paddingRight: 40
  },
  container: {
    position: 'relative',
    marginBottom: 20,
  },
  img: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: '50%',
    right: 10,
    transform: [{ translateY: -10 }]
  }
})

export default Sort
