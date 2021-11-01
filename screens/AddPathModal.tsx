import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import Toast from 'react-native-toast-message'
import AddPathForm from '../components/AddPathForm'
import Map from '../components/Map'
import IMarker from '../models/marker'

const AddPathModal = () => {
  const [markers, setMarkers] = useState([] as IMarker[])
  const [length, setLength] = useState('0 m')

  useEffect(() => {
    console.log(markers)
  }, [markers])

  return (
    <ScrollView>
      <Map setMarkers={setMarkers} markers={markers} length={length} setLength={setLength} />
      <AddPathForm markers={markers} />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </ScrollView>
  )
}

export default AddPathModal
