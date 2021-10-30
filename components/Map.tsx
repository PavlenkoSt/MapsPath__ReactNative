import React, { Dispatch, FC, SetStateAction } from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps'
import IMarker from '../models/marker'

type MapPropsType = {
  setMarkers: Dispatch<SetStateAction<IMarker[]>>
  markers: IMarker[]
}

const Map: FC<MapPropsType> = ({ setMarkers, markers }) => {
  const addMarker = (coordinates: { latitude: number; longitude: number }) => {
    setMarkers([...markers, { ...coordinates, id: Date.now() }])
  }

  return (
    <MapView
      initialRegion={{
        latitude: 49.4285,
        longitude: 32.0621,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={styles.map}
      onPress={(e) => addMarker(e.nativeEvent.coordinate)}
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
        />
      ))}
      <Polyline
        coordinates={markers.map(marker => ({ longitude: marker.longitude, latitude: marker.latitude }))}
        strokeColor='#c41d25'
        strokeWidth={2}
      />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 400,
    marginBottom: 10,
  },
})

export default Map
