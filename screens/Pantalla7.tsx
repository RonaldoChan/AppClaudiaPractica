import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const Pantalla7 = (props: Props) => {
  const navigation = useNavigation()

  return (
    <View>
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
            <Image style={styles.imagen} source={require('../assets/img/agregado.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row'
        }}
      >
        {[1, 2, 3].map(() => {
          return <Producto></Producto>
        })}
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
    borderRadius: 25
  },
  imagen: {
    resizeMode: 'contain',
    flex: 1
  },
  image: {
    width: 100,
    height: 60,
    borderRadius: 15,
    marginHorizontal: 40
  },
  component: {
    flexDirection: 'column',
    backgroundColor: 'cyan',
    borderRadius: 20,
    width: 180,
    height: 260,
    justifyContent: 'center',
    margin: 20
  },
  buttonCompo: {
    width: 30,
    height: 30,
    backgroundColor: 'pink',
    marginHorizontal: 7,
    borderRadius: 9
  },
  contador: {
    width: 25,
    height: 25,
    borderWidth: 1,
    textAlign: 'center'
  },
  atributos: {
    marginHorizontal: 20,
    marginVertical: 5,
    borderColor: '#20232a',
    fontWeight: 'bold'
  },
  butonTextoComp: {
    textAlign: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
    borderColor: '#20232a',
    fontWeight: 'bold'
  }
})

const Producto = (props) => {
  const [contador, setcontador] = useState(0)
  return (
    <View style={styles.component}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/o-que-e-produto-no-mix-de-marketing-1024x538.png'
        }}
      />
      <Text style={styles.atributos}>Name:</Text>
      <Text style={styles.atributos}>Precio:</Text>

      <Text style={styles.atributos}>Descripión:</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Buton
          texto="-"
          change={() => {
            if (contador != 0) {
              setcontador(contador - 1)
            }
          }}
        />
        <Text style={{ textAlign: 'center', width: 25, height: 25, borderWidth: 1 }}>
          {contador}
        </Text>
        <Buton
          texto="+"
          change={() => {
            setcontador(contador + 1)
          }}
        />
      </View>
    </View>
  )
}

const Buton = ({ texto, change }) => {
  return (
    <TouchableOpacity style={styles.buttonCompo} onPress={change}>
      <Text style={styles.butonTextoComp}>{texto}</Text>
    </TouchableOpacity>
  )
}

export default Pantalla7
