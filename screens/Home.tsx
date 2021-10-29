import React, { FC } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text } from 'react-native'
import PathList from '../components/PathList'

type HomePropsType = {
  navigation: any
}

const Home: FC<HomePropsType> = ({ navigation }) => {
  return (
    <ScrollView>
      <PathList />
      <Button
        onPress={() => navigation.navigate('Path', { title: 'Custom title' })}
        title="push to Path"
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({})

export default Home
