import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, TextInput, View, Text, TouchableOpacity } from 'react-native'
type Props = {}

const Pantalla3 = (props: Props) => {
  const navigation = useNavigation()
  const [text, setText] = useState()
  const [lista] = useState([])
  return (
    <View
      style={{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      }}
    >
      <View>
        <Text
          onPress={() => {
            navigation.navigate('Inicio')
          }}
        >
          go home
        </Text>
        <Text>Ingresa el nombre a guardar:</Text>
        <TextInput
          style={{ borderWidth: 1, width: 250, height: 45 }}
          value={text}
          onChangeText={(Text) => {
            setText(Text)
          }}
        ></TextInput>
        <Button
          title="Agregar"
          onPress={() => {
            lista.push(text)
            setText('')
          }}
        ></Button>
        {lista.map((item, index) => {
          return Lista
        })}
      </View>
    </View>
  )
}
const Lista = () => {}
export default Pantalla3
