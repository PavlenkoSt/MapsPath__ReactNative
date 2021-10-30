import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import Toast from 'react-native-toast-message'
import AddPathForm from '../components/AddPathForm'
import Map from '../components/Map'
import IMarker from '../models/marker'

const AddPathModal = () => {
  const [markers, setMarkers] = useState([] as IMarker[])

  return (
    <ScrollView>
      <Map setMarkers={setMarkers} markers={markers} />
      <AddPathForm />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </ScrollView>
  )
}

export default AddPathModal
