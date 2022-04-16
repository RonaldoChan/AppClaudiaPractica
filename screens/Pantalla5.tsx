import { Text, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from '@expo/vector-icons'
import Checkbox from 'expo-checkbox'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

type Props = {}
const DATA_ACTIVITIES = [
  { label: 'Estudiar', value: false },
  { label: 'Ejercitarse', value: false },
  { label: 'Cocinar', value: false },
  { label: 'Pasear', value: false },
  { label: 'Cena Familiar', value: false },
  { label: 'Ir al colegio', value: false },
  { label: 'Salir con amigos', value: false },
  { label: 'Viajar', value: false },
  { label: 'Salir de fiesta', value: false },
  { label: 'Ir al museo', value: false }
]

const createActivity = async () => {
  try {
    const response = await axios.post('http://localhost:6868/api/activities-users', {
      userId: 2,
      description: 'ghjk'
    })
    console.log('amaringo', response.data)
  } catch (error) {
    console.error('a', error)
  }
}
async function getUser() {}
const Pantalla5 = (props: Props) => {
  const navigation = useNavigation()
  const [activityDescription, setactivityDescription] = useState()
  console.log(activityDescription)
  const [activities, setActivities] = useState(DATA_ACTIVITIES)
  console.log(activities)

  const checkActivity = (index: number) => (value: boolean) => {
    const newActivities = [...activities]
    newActivities[index].value = value
    setActivities(newActivities)
  }
  return (
    <ScrollView style={styles.conteiner}>
      <Text style={styles.titulo}>Agregar actividad</Text>

      <View>
        {activities.map((item, index) => {
          return (
            <View style={{ flexDirection: 'row' }}>
              <Checkbox
                style={styles.checkbox}
                value={item.value}
                onValueChange={checkActivity(index)}
              />
              <Text style={styles.texto1}>{item.label}</Text>
            </View>
          )
        })}
      </View>
      <TextInput
        placeholder="Agrega actividades"
        style={styles.nota}
        value={activityDescription}
        onChangeText={(text) => {
          setactivityDescription(text)
        }}
      ></TextInput>
      <View
        style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}
      >
        <TouchableOpacity
          style={styles.buton}
          onPress={() => {
            createActivity()
            navigation.goBack()
          }}
        >
          <Text style={{ textAlign: 'center', marginVertical: 12 }}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <AbsoluteButton />
    </ScrollView>
  )
}

const AbsoluteButton = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.absoluteButton}>
      <TouchableOpacity
        style={{
          backgroundColor: '#0D1357',
          paddingHorizontal: 20,
          borderRadius: 10,
          paddingVertical: 5
        }}
        onPress={() => {
          navigation.navigate('MyDairy')
        }}
      >
        <Text style={{ color: 'white' }}>atras</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  conteiner: {
    marginTop: 35,
    padding: 30,
    flex: 1,
    backgroundColor: 'white'
  },
  nota: {
    width: 350,
    height: 100,
    backgroundColor: 'powderblue',
    marginVertical: 15
  },
  titulo: {
    fontSize: 25,
    marginVertical: 20
  },
  checkbox: {
    margin: 8
  },
  texto1: {
    fontSize: 12,
    marginHorizontal: 8,
    marginVertical: 10
  },
  buton: {
    backgroundColor: 'lightcyan',
    marginVertical: 7,
    height: 50,
    width: 100,
    borderRadius: 20,
    justifyContent: 'center'
  },
  absoluteButton: {
    position: 'absolute',
    height: 30,
    left: 10
  }
})
export default Pantalla5
