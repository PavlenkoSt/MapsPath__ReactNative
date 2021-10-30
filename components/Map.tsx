import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const Map = () => {
  const markers = [0]

  return (
    <MapView
      initialRegion={{
        latitude: 49.4285,
        longitude: 32.0621,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={styles.map}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: 49.4284,
            longitude: 32.0621,
          }}
        />
      ))}
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
