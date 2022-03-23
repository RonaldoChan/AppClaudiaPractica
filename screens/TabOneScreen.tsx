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
      <Text>Hola</Text>
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
