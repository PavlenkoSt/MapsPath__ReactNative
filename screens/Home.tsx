import React, { FC } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text } from 'react-native'
import PathList from '../components/PathList'

type HomePropsType = {
  navigation: any
}

const Home: FC<HomePropsType> = ({ navigation }) => {

  const toPathPage = (title: string) => navigation.navigate('Path', { title })

  return (
    <ScrollView>
      <PathList toPathPage={toPathPage} />
    </ScrollView>
  )
}

export default Home
