import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.logo}>Saunter</Text>
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
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
  },
})

export default Header
