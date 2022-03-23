import { View, Text, Button, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const Pantalla2 = (props: Props) => {
  const navigation = useNavigation()
  const [contador, setcontador] = useState(0)

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <View>
        <Image
          style={{ width: 100, height: 100, marginBottom: 25 }}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8AiZqY8ncc5qLW37-t47nahcCwcC_Vcu55Q&usqp=CAU'
          }}
        />
      </View>
      <Text
        onPress={() => {
          navigation.navigate('Inicio')
        }}
      >
        go home
      </Text>
      <Text
        style={{
          borderWidth: 1,
          height: 45,
          width: 40,
          fontSize: 35,
          textAlign: 'center'
        }}
      >
        {contador}
      </Text>
      <View style={{ flexDirection: 'row' }}>
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

export default Pantalla2
