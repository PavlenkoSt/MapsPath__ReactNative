import React from 'react'
import { ScrollView, Text } from 'react-native'
import Toast from 'react-native-toast-message'
import AddPathForm from '../components/AddPathForm'
import Map from '../components/Map'

const AddPathModal = () => {
  return (
    <ScrollView>
      <Map />
      <AddPathForm />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </ScrollView>
  )
}

export default AddPathModal
