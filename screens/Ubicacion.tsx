import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect, useCallback } from 'react'
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  useWindowDimensions
} from 'react-native'
import { Value } from 'react-native-reanimated'
import EditScreenInfo from '../components/EditScreenInfo'
import { RootTabScreenProps } from '../types'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import * as Location from 'expo-location'

const Ubicacion = (props: Props) => {
  const [, updateState] = useState({})
  const forceUpdate = useCallback(() => updateState({}), [])
  const [location, setLocation] = useState({ coords: { latitude: 0, longitude: 0 } })
  console.log('location', location.coords)
  const [errorMsg, setErrorMsg] = useState(null)
  const dimension = useWindowDimensions()

  const getCurrentLocation = () => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }

  let text = 'Waiting..'
  if (errorMsg) {
    text = errorMsg
  } else if (location) {
    text = JSON.stringify(location)
  }
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{
            width: 250,
            height: 37,
            backgroundColor: 'white',
            marginVertical: 10
          }}
          placeholder="Buscar"
        ></TextInput>
        <TouchableOpacity
          style={{
            backgroundColor: 'pink',
            width: 95,
            height: 38,
            marginHorizontal: 15,
            marginVertical: 10,
            borderRadius: 5
          }}
          onPress={() => {
            getCurrentLocation()
            forceUpdate()
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 13, marginVertical: 6 }}>
            Mi Ubicacion
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <MapView
          style={{
            width: dimension.width,
            height: dimension.height - 100,
            marginVertical: 15
          }}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            longitude: -84.0750546,
            latitude: -9.1084506,
            latitudeDelta: 80.9888,
            longitudeDelta: 110.5643
          }}
        >
          <Marker
            title="H"
            description="Des"
            coordinate={{
              latitude: location?.coords?.latitude,
              longitude: location?.coords?.longitude
            }}
          />
        </MapView>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 23,
    flex: 1,
    backgroundColor: 'silver'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})
export default Ubicacion
