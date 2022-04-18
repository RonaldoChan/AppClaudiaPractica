import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {}

const Carrito = (props: Props) => {
  const navigation = useNavigation()
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => {
            navigation.navigate('Tienda')
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 17 }}>Volver</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 25, textAlign: 'center', flex: 1 }}>Carrito</Text>

      <View style={styles.conteiner}>
        <Image
          style={{ width: 120, height: 100, marginLeft: 13, borderRadius: 12 }}
          source={{
            uri: 'https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/o-que-e-produto-no-mix-de-marketing-1024x538.png'
          }}
        ></Image>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.text}>NombreOfProduct Nivea</Text>
          <Text style={styles.text}>Cantidad: 5</Text>
          <Text style={styles.text}>Total a pagar: 25</Text>
        </View>
        <TouchableOpacity
          style={{ width: 15, height: 20, marginTop: 80, marginLeft: 200 }}
          onPress={() => {}}
        >
          <Image
            style={{ flex: 1 }}
            source={require('../assets/img/basurero.png')}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  buttonBack: {
    justifyContent: 'flex-start',
    backgroundColor: '#E8DAEF',
    width: 60,
    height: 36,
    borderRadius: 10,
    borderWidth: 1
  },
  imagen: {
    width: 30,
    height: 10,
    margin: 25
  },
  conteiner: {
    width: 570,
    height: 150,
    backgroundColor: 'lightcyan',
    borderRadius: 20,
    alignItems: 'center',
    margin: 20,
    flexDirection: 'row',
    borderWidth: 1
  },
  text: {
    marginHorizontal: 20,
    marginVertical: 5,
    borderColor: '#20232a',
    fontWeight: 'bold'
  }
})

export default Carrito
