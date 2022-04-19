import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const Pantalla7 = (props: Props) => {
  const navigation = useNavigation()

  return (
    <View>
      <View style={styles.principal}>
        <Text style={styles.title}>Productos</Text>
        <View style={styles.header}>
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
        {/* {valores22.map(() => {
          return <Producto></Producto>
        })} */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  principal: {
    margin: 10,
    flexDirection: 'row'
  },
  header: {
    justifyContent: 'flex-end',
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
    width: 200,
    height: 300,
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
  },
  buttonSelect: {
    backgroundColor: 'white',
    width: 80,
    height: 35,
    justifyContent: 'center',
    borderRadius: 15,
    marginHorizontal: 57,
    marginVertical: 15
  },
  textButonSelect: { textAlign: 'center', borderColor: '#20232a', fontWeight: 'bold' },
  textContador: { textAlign: 'center', width: 25, height: 25, borderWidth: 1 },
  conteinerButon: { flexDirection: 'row', justifyContent: 'center' }
})

const Producto = (props) => {
  const [contador, setcontador] = useState(0)
  const [productsSelected, setProductsSelected] = useState([])

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
      <View style={styles.conteinerButon}>
        <Buton
          texto="-"
          change={() => {
            if (contador != 0) {
              setcontador(contador - 1)
            }
          }}
        />
        <Text style={styles.contador}>{contador}</Text>
        <Buton
          texto="+"
          change={() => {
            setcontador(contador + 1)
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonSelect}
        onPress={() => {
          if (contador > 0) {
            productsSelected.push(setProductsSelected)
          }
        }}
      >
        <Text style={styles.textButonSelect}>Seleccionar</Text>
      </TouchableOpacity>
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
