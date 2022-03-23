import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { StyleSheet, TextInput, Text, View, Button, TouchableOpacity } from 'react-native'
import EditScreenInfo from '../components/EditScreenInfo'
import { RootTabScreenProps } from '../types'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [text, setText] = useState()
  let [lista] = useState([])

  // const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          navigation.navigate('pantalla2')
        }}
      >
        pantalla 2
      </Text>
      <Text
        onPress={() => {
          navigation.navigate('pantalla3')
        }}
      >
        pantalla 3
      </Text>

      <Text style={{}}>Mi primera app</Text>
      <TextInput
        style={{ backgroundColor: '#95A5A6', width: 200, height: 45, borderWidth: 1 }}
        value={text}
        onChangeText={(textChange) => {
          setText(textChange)
        }}
      />
      <Button
        title="enviar"
        onPress={() => {
          lista.push(text)
          console.log(lista)
          setText('')
        }}
      ></Button>
      {lista.map((item, index) => {
        return (
          <View style={{}}>
            <Text>{item}</Text>
          </View>
        )
      })}

      <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
