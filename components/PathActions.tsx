import React, { FC } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { useStore } from '../store'

type PathActionsPropsType = {
  id: string
  favourite: boolean
}

const PathActions: FC<PathActionsPropsType> = ({ id, favourite }) => {
  const { routesStore } = useStore()

  const changeFavouriteStatus = () => {
    routesStore.toggleFavouriteRoute(id)
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
        <Button title="Remove path" color="#a80000" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mt: {
    marginTop: 10,
  },
})

export default PathActions
