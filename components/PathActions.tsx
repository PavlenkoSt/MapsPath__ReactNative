import { observer } from 'mobx-react'
import React, { FC } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { useStore } from '../store'
import toast from '../utilts/toast'

type PathActionsPropsType = {
  id: string
  favourite: boolean
  title: string
  navigation: any
}

const PathActions: FC<PathActionsPropsType> = ({ id, favourite, navigation, title }) => {
  const { routesStore } = useStore()

  const changeFavouriteStatus = () => {
    routesStore.toggleFavouriteRoute(id)
    toast.showSuccess(favourite ? 'Removed from favourites' : 'Added to favourites')
  }

  const removePath = () => {
    routesStore.removeRoute(id)
    navigation.navigate('Home')
    toast.showSuccess(`Path "${title}" was deleted`)
  }

  return (
    <View style={styles.mt}>
      <View>
        <Button
          title={favourite ? 'Remove from favourite' : 'Add to favourite'}
          onPress={changeFavouriteStatus}
        />
      </View>
      <View style={styles.mt}>
        <Button title="Remove path" color="#a80000" onPress={removePath} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mt: {
    marginTop: 10,
  },
})

export default observer(PathActions)
