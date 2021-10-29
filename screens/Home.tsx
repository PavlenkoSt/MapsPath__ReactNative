import React, { FC } from 'react'
import { ScrollView } from 'react-native'
import PathList from '../components/PathList'
import Search from '../components/Search'

type HomePropsType = {
  navigation: any
}

const Home: FC<HomePropsType> = ({ navigation }) => {
  const toPathPage = (title: string) => navigation.navigate('Path', { title })

  return (
    <ScrollView>
      <Search />
      <PathList toPathPage={toPathPage} />
    </ScrollView>
  )
}

export default Home
