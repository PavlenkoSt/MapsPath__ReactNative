import React from 'react'
import { ScrollView, Text } from 'react-native'
import Toast from 'react-native-toast-message'
import AddPathForm from '../components/AddPathForm'

const AddPathModal = () => {
  return (
    <ScrollView>
      <AddPathForm />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </ScrollView>
  )
}

export default AddPathModal
