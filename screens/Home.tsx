import React, { FC } from 'react'
import { Button, Text } from 'react-native'

type HomePropsType = {
  navigation: any
}

const Home: FC<HomePropsType> = ({ navigation }) => {
  return (
    <>
      <Text>Home page</Text>
      <Button
        onPress={() => navigation.navigate('Path', { title: 'Custom title' })}
        title="push to Path"
      />
    </>
  )
}

export default Home
