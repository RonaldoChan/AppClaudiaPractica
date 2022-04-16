import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  TouchableOpacity,
  Modal,
  DatePickerIOSBase
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Value } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import EditScreenInfo from '../components/EditScreenInfo'
import { RootTabScreenProps } from '../types'

const Pantalla4 = (props: Props) => {
  const [dataactivity, setdataactivity] = useState()
  console.log('aaaa', dataactivity)
  const getdata = async () => {
    try {
      const response = await axios.get('http://192.168.100.57:6868/api/activities-users')
      console.log('amaringo', response.data)
      setdataactivity(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getdata()
  }, [])
  const addactivity = () => {}
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.buscador} placeholder="Buscar"></TextInput>
      <View style={styles.contenedor}>
        <ScrollView>
          {dataactivity?.map((item) => {
            console.log('item de lista', item)
            return (
              <View>
                <Text style={{ marginVertical: 12 }}>DATE</Text>
                <TouchableOpacity style={styles.contenido}>
                  {/* {item?.label.map((item2) => {
                    return <View></View>
                  })} */}
                  <Text>{item.description}</Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.boton}>
        <Text
          style={styles.textob}
          onPress={() => {
            navigation.navigate('Pantalla5')
          }}
        >
          +
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 23,
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    marginVertical: 5,
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    height: 1,
    width: '80%'
  },
  buscador: {
    width: 366,
    height: 37,
    backgroundColor: 'gainsboro'
  },
  contenedor: {},
  boton: {
    backgroundColor: 'paleturquoise',
    marginVertical: 7,
    height: 50,
    width: 70,
    borderRadius: 25,
    right: 15,
    top: 650,
    position: 'absolute'
  },
  textob: {
    marginVertical: 2,
    textAlign: 'center',
    fontSize: 30
  },
  contenido: {
    backgroundColor: 'aliceblue',
    marginVertical: 3,
    width: 400,
    height: 250
  }
})
export default Pantalla4
