import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.main}>
      <View style={styles.logo}>
        <Text style={styles.textLogo}>Saunter</Text>
        <Image
          style={styles.imgLogo}
          source={require('../icons/logo.png')}
        />
      </View>
      <Button title="Add path" />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '95%',
  },
  logo: {
    flex: 1,
    flexDirection: 'row'
  },
  textLogo: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    marginRight: 10
  },
  imgLogo: {
    width: 25,
    height: 25,
    zIndex: 100,
  },
})

export default Header
