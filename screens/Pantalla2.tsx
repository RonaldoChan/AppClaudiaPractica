import { View, Text, Button, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const Pantalla2 = (props: Props) => {
  const navigation = useNavigation()
  function volver() {
    navigation.navigate('Home')
  }

  const [contador, setcontador] = useState(0)

  return (
    <View style={styles.contenedor}>
      <View>
        <Image
          style={styles.imagen}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8AiZqY8ncc5qLW37-t47nahcCwcC_Vcu55Q&usqp=CAU'
          }}
        />
      </View>
      <Text onPress={volver}>go home</Text>
      <Text
        style={{
          borderWidth: 1,
          height: 45,
          width: 100,
          fontSize: 35,
          textAlign: 'center',
          marginVertical: 5
        }}
      >
        {contador}
      </Text>
      <View style={{ flexDirection: 'row', marginVertical: 10 }}>
        <Button
          title="----------"
          onPress={() => {
            if (contador != 0) {
              setcontador(contador - 1)
            }
          }}
        ></Button>
        <Button
          title="+++++"
          onPress={() => {
            setcontador(contador + 1)
          }}
        ></Button>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  contenedor: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  imagen: {
    width: 100,
    height: 100,
    marginBottom: 25
  }
})

export default Pantalla2
