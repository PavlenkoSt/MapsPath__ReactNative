import React, { Dispatch, FC, SetStateAction } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps'
import IMarker from '../models/marker'

type MapPropsType = {
  setMarkers: Dispatch<SetStateAction<IMarker[]>>
  setLength: Dispatch<SetStateAction<number>>
  markers: IMarker[]
  length: number
}

type CoordinatesType = { latitude: number; longitude: number }

const Map: FC<MapPropsType> = ({ setMarkers, markers, length, setLength }) => {
  const addMarker = (coordinates: CoordinatesType) => {
    setMarkers([...markers, { ...coordinates, id: Date.now() }])
  }

  const changeMarkerPosition = (id: number, newPosition: CoordinatesType) => {
    setMarkers(
      markers.map((marker) => {
        if (marker.id === id) {
          marker = { ...marker, ...newPosition }
        }
        return marker
      })
    )
  }

  return (
    <View>
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
            draggable={true}
            onDragEnd={(e) => changeMarkerPosition(marker.id, e.nativeEvent.coordinate)}
          />
        ))}
        <Polyline
          coordinates={markers.map((marker) => ({
            longitude: marker.longitude,
            latitude: marker.latitude,
          }))}
          strokeColor="#c41d25"
          strokeWidth={2}
        />
      </MapView>
      <Text style={styles.length}>Lenght: {length}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 400,
    marginBottom: 10,
  },
  length: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 20,
  },
})

export default Map
