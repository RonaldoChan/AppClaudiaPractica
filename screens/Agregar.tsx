import { View, Text, StyleSheet, TextInputProps } from 'react-native'
import React, { FC, useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'

type Props = {}

const Agregar = (props: Props) => {
  const navigation = useNavigation()
  // // const { params } = useRoute()
  console.log('props', props)

  //para no crear tanto sestados, creo solo uno que me devueva las variablesque voy a cambiar con sus respectivos valores
  const [values, setValues] = useState({
    productName: '',
    description: '',
    price: '',
    imagen: ''
  })
  //onchangeValue  es una funación que crea al key y le dice que le de un tipo al values, y value es el tipo de dato que le da al key
  const onChangeValue = (key: keyof typeof values) => (value: string) => {
    //Aquí uno al key y su variable y la cambio al set que se va a modificar.
    setValues({ ...values, [key]: value })
  }

  // const loadImagen = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1
  //   })
  //   if (!result.cancelled) {
  //     setValues(result.uri)
  //   }
  // }

  return (
    <View style={{ padding: 10 }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => {
            navigation.navigate('Tienda')
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 17 }}>Volver</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 25, textAlign: 'center', flex: 1 }}>
          Agregar Producto
        </Text>
      </View>

      <View style={styles.contenedor}>
        <Atributo
          name="Nombre del producto:"
          placeholder={'name of product'}
          value={values.productName}
          onChange={onChangeValue('productName')}
        />
        <Atributo
          name="Precio del producto:"
          placeholder={'0.00'}
          value={values.price}
          onChange={onChangeValue('price')}
          keyboardType="numeric"
        />
        <Atributo
          name="Descripción del producto:"
          placeholder={''}
          value={values.description}
          onChange={onChangeValue('description')}
          maxLength={100}
        />

        <TouchableOpacity
          style={styles.buttonAgregar}
          onPress={() => {
            navigation.navigate('Tienda', { values })
            console.log(values)
          }}
        >
          <Text style={styles.texto}>Agregar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  box: {
    width: 250,
    height: 40,
    backgroundColor: '#FEF9E7',
    borderRadius: 12,
    margin: 20
  },
  contenedor: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'pink',
    borderRadius: 55,
    margin: 30,
    width: 560,
    height: 450,
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'left'
  },
  buttonBack: {
    justifyContent: 'flex-start',
    backgroundColor: '#E8DAEF',
    width: 60,
    height: 36,
    borderRadius: 10,
    borderWidth: 1
  },
  buttonAgregar: {
    backgroundColor: '#E8DAEF',
    width: 60,
    height: 36,
    borderWidth: 1,
    borderRadius: 10
  },
  texto: {
    fontSize: 15
  },
  textos: {
    fontSize: 15,
    margin: 20,
    borderColor: '#20232a', //negrita
    fontWeight: 'bold'
    // textDecorationLine: 'underline', //subraya on linea
    // textDecorationStyle: 'double', // le da estilo al subrayado, en este caso doble.
    // textDecorationColor: 'black' //le da color al subrayado
  }
})
//type le da el tipo de valor a las prpiedades respectivas name es de tipo string, etc
type AtributoType = {
  name: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  keyboardType?: TextInputProps['keyboardType']
  maxLength?: number
}

//creo un componente y le llamo a las propiedades que de por si ya tienen
const Atributo: FC<AtributoType> = ({
  name,
  placeholder,
  value,
  onChange,
  keyboardType,
  maxLength
}) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={styles.textos}>{name} </Text>
      <TextInput
        style={styles.box}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        keyboardType={keyboardType}
        maxLength={maxLength}
      ></TextInput>
    </View>
  )
}

export default Agregar
