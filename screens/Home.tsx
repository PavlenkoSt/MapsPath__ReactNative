import React, { FC } from 'react'
import { ScrollView } from 'react-native'
import PathList from '../components/PathList'
import Search from '../components/Search'
import useSearch from '../hooks/useSearch'
import { useStore } from '../store'

type HomePropsType = {
  navigation: any
}

const Home: FC<HomePropsType> = ({ navigation }) => {
  const toPathPage = (title: string, id: string) => navigation.navigate('Path', { title, id })

  const { routesStore } = useStore()

  const { searchedRoutes, setSearchVal } = useSearch(routesStore.routes)

  return (
    <ScrollView>
      <Search setSearchVal={setSearchVal} />
      <PathList toPathPage={toPathPage} routes={searchedRoutes} />
    </ScrollView>
  )
}

export default Home
