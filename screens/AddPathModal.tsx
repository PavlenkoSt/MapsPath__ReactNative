import React, { FC, useState } from 'react'
import { ScrollView } from 'react-native'
import AddPathForm from '../components/AddPathForm'
import Map from '../components/Map'
import IMarker from '../models/marker'

type AddPathModalPropsType = {
  navigation: any
}

const AddPathModal: FC<AddPathModalPropsType> = ({ navigation }) => {
  const [markers, setMarkers] = useState([] as IMarker[])
  const [length, setLength] = useState(0)

  return (
    <ScrollView>
      <Map
        setMarkers={setMarkers}
        markers={markers}
        length={length}
        setLength={setLength}
        editMode={true}
      />
      <AddPathForm
        markers={markers}
        length={length}
        setMarkers={setMarkers}
        setLength={setLength}
        navigation={navigation}
      />
    </ScrollView>
  )
}

export default AddPathModal
