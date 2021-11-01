import React, { Dispatch, FC, SetStateAction } from 'react'
import { TextInput, StyleSheet, View, Image } from 'react-native'

type SearchPropsType = {
  setSearchVal: Dispatch<SetStateAction<string>>
}

const Search: FC<SearchPropsType> = ({ setSearchVal }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={(text) => setSearchVal(text)} />
      <Image style={styles.img} source={require('../icons/search.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#333',
    borderWidth: 2,
    padding: 10,
    fontSize: 16,
    paddingRight: 40,
  },
  container: {
    position: 'relative',
    marginBottom: 10,
  },
  img: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: '50%',
    right: 10,
    transform: [{ translateY: -10 }],
  },
})

export default Search
