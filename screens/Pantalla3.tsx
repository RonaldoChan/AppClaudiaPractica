import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  Button,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ListViewBase,
  Alert,
  Modal
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Zocial } from '@expo/vector-icons'
type Props = {}
const DIMENSION = 35

const Pantalla3 = (props: Props) => {
  const navigation = useNavigation()
  const [text, setText] = useState()
  const [lista, setLista] = useState<any[]>([])
  const [stateModal, setSatateModal] = useState({
    visible: false,
    taskName: '',
    onAccept: (taskName: string) => {}
  })
  const onRequestClose = () => {
    setSatateModal({ ...stateModal, visible: false })
  }

  const editTask = (index: number, taskName: string) => {
    // logica para editar
    const newLista = [...lista]
    newLista[index] = taskName
    setLista(newLista)
  }

  const addTask = () => {
    lista.push(text)
    setText('')
  }

  const deleteTask = () => {}

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        margin: 15,
        flex: 1,
        padding: 20
      }}
    >
      <View>
        <Text
          style={{
            fontFamily: 'AImpact,Charcoal,sans-serif',
            fontSize: 28,
            marginVertical: 6,
            textAlign: 'center'
          }}
        >
          REGISTROS
        </Text>

        <Text style={{ margin: 10, marginHorizontal: 26 }}>
          Ingresa el nombre a guardar:
        </Text>
        <View style={{ alignItems: 'center' }}>
          <TextInput
            style={{
              borderWidth: 1,
              width: 290,
              height: 40,
              backgroundColor: 'white'
            }}
            keyboardType="default"
            value={text}
            onChangeText={(Text) => {
              setText(Text)
            }}
          ></TextInput>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              marginVertical: 20,
              backgroundColor: 'silver',
              width: 100,
              height: 30,
              borderWidth: 1
            }}
            onPress={() => {
              if (text == '') {
                Alert.alert('Este campo no puede quedar vacio')
              } else {
                addTask()
              }
            }}
          >
            <Text style={{ textAlign: 'center' }}>Agregar</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={{ borderWidth: 1 }}>
          {lista.map((item, index) => {
            return (
              <ItemLista
                devuelveitem={item}
                onPressDelete={() => {
                  Alert.alert('Alerta', '¿Desea eliminar este campo?', [
                    {
                      text: 'Aceptar',
                      onPress: () => {
                        let newLista = [...lista]
                        newLista.splice(index, 1)
                        setLista(newLista)
                      }
                    },
                    { text: 'Cancelar', onPress: () => {} }
                  ])
                }}
                onPressEdit={() => {
                  setSatateModal({
                    visible: true,
                    taskName: item,
                    onAccept: (editedTask) => {
                      editTask(index, editedTask)
                    }
                  })
                }}
              ></ItemLista>
            )
          })}
        </ScrollView>
      </View>
      {stateModal.visible && (
        <MiModal
          taskName={stateModal.taskName}
          onAccept={stateModal.onAccept}
          onRequestClose={onRequestClose}
        ></MiModal>
      )}
    </SafeAreaView>
  )
}
const ItemLista = ({ devuelveitem, onPressDelete, onPressEdit }: any) => {
  return (
    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
      <Text style={{ flex: 1 }}>{devuelveitem}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'pink',
          width: DIMENSION,
          height: DIMENSION,
          borderWidth: 1
        }}
        onPress={onPressDelete}
      >
        <Text style={{ textAlign: 'center' }}>X</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'silver',
          width: DIMENSION,
          height: DIMENSION,
          marginHorizontal: 2,
          borderWidth: 1
        }}
        onPress={onPressEdit}
      >
        <Text style={{ textAlign: 'center' }}>E</Text>
      </TouchableOpacity>
    </View>
  )
}

const MiModal = ({ onRequestClose, taskName, onAccept }) => {
  const [text, setText] = useState(taskName)
  return (
    <Modal
      visible={true}
      onRequestClose={onRequestClose}
      animationType="slide"
      transparent
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}
      >
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            paddingVertical: 20,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5
          }}
        >
          <Text style={{ marginVertical: 5 }}>Modificando el texto: </Text>
          <TextInput
            style={{ borderWidth: 1, width: 200, height: 40 }}
            value={text}
            onChangeText={setText}
            placeholder="tarea"
          />

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'silver',
                borderWidth: 1,
                marginVertical: 20,
                width: 100,
                height: 40
              }}
              onPress={() => {
                if (text == '') {
                  Alert.alert('Este campo no puede quedar vacio')
                } else {
                  onAccept(text)
                  onRequestClose()
                }
              }}
            >
              <Text style={{ textAlign: 'center' }}>Actualizar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: 'silver',
                borderWidth: 1,
                marginVertical: 20,
                marginHorizontal: 7,
                width: 100,
                height: 40
              }}
              onPress={() => {
                onRequestClose(false)
              }}
            >
              <Text style={{ textAlign: 'center' }}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default Pantalla3
