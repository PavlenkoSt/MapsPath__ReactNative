import React, { Dispatch, FC, SetStateAction, useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps'
import IMarker from '../models/marker'
import convertUnit from '../utilts/convertUnit'
import getFullDistance from '../utilts/getFullDistance'

type MapPropsType = {
  setMarkers?: Dispatch<SetStateAction<IMarker[]>>
  setLength?: Dispatch<SetStateAction<number>>
  markers: IMarker[]
  length: number
  editMode: boolean
}

type CoordinatesType = { latitude: number; longitude: number }

const Map: FC<MapPropsType> = ({ setMarkers, markers, length, setLength, editMode }) => {
  const addMarker = (coordinates: CoordinatesType) => {
    if (editMode && setMarkers) {
      setMarkers([...markers, { ...coordinates, id: Date.now() }])
    }
  }

  const changeMarkerPosition = (id: number, newPosition: CoordinatesType) => {
    if (editMode && setMarkers) {
      setMarkers(
        markers.map((marker) => {
          if (marker.id === id) {
            marker = { ...marker, ...newPosition }
          }
          return marker
        })
      )
    }
  }

  useEffect(() => {
    if (editMode && setLength) setLength(getFullDistance(markers))
  }, [markers])

  const initialRegion = {
    latitude: editMode ? 49.4285 : markers?.[0]?.latitude,
    longitude: editMode ? 32.0621 : markers?.[0]?.longitude,
    latitudeDelta: 0.0822,
    longitudeDelta: 0.0421,
  }

  return (
    <View>
      <MapView
        initialRegion={initialRegion}
        style={styles.map}
        onPress={(e) => editMode && addMarker(e.nativeEvent.coordinate)}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            draggable={editMode}
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
      {editMode && (
        <View style={styles.footer}>
          <Image source={require('../icons/location.png')} style={styles.pic} />
          <Text style={styles.length}>Lenght: {convertUnit(length)}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 400,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  length: {
    fontSize: 20,
  },
  pic: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
})

export default Map
