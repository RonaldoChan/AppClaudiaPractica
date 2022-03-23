import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, TextInput, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
type Props = {}
const DIMENSION = 20

const Pantalla3 = (props: Props) => {
  const navigation = useNavigation()
  const [text, setText] = useState()
  const [lista] = useState([])
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        padding: 20,
        flex: 1
      }}
    >
      <View>
        <Text
          style={{}}
          onPress={() => {
            navigation.navigate('Inicio')
          }}
        >
          Home
        </Text>
        <Text>Ingresa el nombre a guardar:</Text>
        <TextInput
          style={{ marginVertical: 15, borderWidth: 1, width: 270, height: 40 }}
          value={text}
          onChangeText={(Text) => {
            setText(Text)
          }}
        ></TextInput>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'silver',
              width: 70,
              height: 30,
              borderWidth: 1
            }}
            onPress={() => {
              lista.push(text)
              setText('')
            }}
          >
            <Text style={{ textAlign: 'center' }}>Agregar</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {lista.map((item, index) => {
            return <ItemLista devuelveitem={item}></ItemLista>
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
const ItemLista = ({ devuelveitem }) => {
  return (
    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
      <Text style={{ flex: 1 }}>{devuelveitem}</Text>
      <TouchableOpacity
        style={{ backgroundColor: 'pink', width: DIMENSION, height: DIMENSION }}
        onPress={() => {}}
      >
        <Text style={{ textAlign: 'center' }}>X</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'silver',
          width: DIMENSION,
          height: DIMENSION,
          marginHorizontal: 2
        }}
        onPress={() => {}}
      >
        <Text style={{ textAlign: 'center' }}>E</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Pantalla3
