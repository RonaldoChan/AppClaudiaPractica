import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Permissions, Constants } from 'expo'
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native'
import EditScreenInfo from '../components/EditScreenInfo'
import { RootTabScreenProps } from '../types'
import * as ImagePicker from 'expo-image-picker'
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [galery, setImageGalery] = useState<{ localUri: string } | null>(null)
  const [text, setText] = useState()
  let [lista] = useState([])

  const openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    const aceptar = (permissionResult.granted = true)
    console.log('permisos', aceptar)

    const imageResult = await ImagePicker.launchImageLibraryAsync()
    if (imageResult.cancelled === true) {
      return
    }
    setImageGalery({ localUri: imageResult.uri })
  }

  // const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            galery !== null
              ? galery.localUri
              : 'https://e7.pngegg.com/pngimages/338/430/png-clipart-computer-icons-user-login-swiggy-blue-text.png'
        }}
      ></Image>

      <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}>
        <Text style={{ textAlign: 'center', fontSize: 12, marginVertical: 6 }}>
          Editar
        </Text>
      </TouchableOpacity>

      <View style={{ marginVertical: 40 }}>
        <Text> Nombre:</Text>
        <TextInput style={styles.box}></TextInput>
        <Text>Carrera: </Text>
        <TextInput style={styles.box}></TextInput>
      </View>
      <TouchableOpacity
        style={styles.buton}
        onPress={() => {
          navigation.navigate('Drawer')
        }}
      >
        <Text style={{ textAlign: 'center', fontSize: 16, marginVertical: 10 }}>
          Guardar
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'silver',
    padding: 55
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
  image: {
    width: 139,
    height: 139,
    borderRadius: 63,
    marginHorizontal: 10
  },
  buton: {
    width: 100,
    height: 50,
    backgroundColor: 'cyan',
    borderRadius: 20
  },
  button: {
    width: 50,
    height: 30,
    backgroundColor: 'azure',
    borderRadius: 7,
    marginVertical: 5
  },
  box: {
    height: 40,
    width: 230,
    backgroundColor: 'white',
    marginVertical: 15,
    borderRadius: 4
  }
})
