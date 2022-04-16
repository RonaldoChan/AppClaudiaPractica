import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const Pantalla7 = (props: Props) => {
  const navigation = useNavigation()

  return (
    <View style={styles.principal}>
      <Text style={styles.title}>Productos</Text>

      <View
        style={{
          justifyContent: 'flex-end',
          flexDirection: 'row'
        }}
      >
        <TouchableOpacity
          style={styles.boton}
          onPress={() => {
            navigation.navigate('Carrito')
          }}
        >
          <Image style={styles.imagen} source={require('../assets/img/carrito.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => {
            navigation.navigate('Agregar')
          }}
        >
          <Image style={styles.imagen} source={require('../assets/img/agregar.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton} onPress={() => {}}>
          <Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  principal: {
    margin: 10,
    flexDirection: 'row'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    alignItems: 'flex-end',
    flex: 1
  },
  boton: {
    marginHorizontal: 20,
    width: 60,
    height: 40,
    backgroundColor: '#E8DAEF',
    borderRadius: 10,
    borderWidth: 1
  },
  imagen: {
    resizeMode: 'contain',
    width: 60,
    height: 40,
    alignContent: 'center'
  }
})

const Producto = (props) => {
  return
  // <View>
  //   <Image></Image>
  //   <Text></Text>
  //   <Text></Text>
  //   <TouchableOpacity>
  //     <Image></Image>
  //   </TouchableOpacity>
  // </View>
}

export default Pantalla7
