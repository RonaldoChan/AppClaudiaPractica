import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import { onChange } from 'react-native-reanimated'

type Props = {}

// const data = [
//   {
//     text: '9',
//     onPress:
//       ({ setNum, num }) =>
//       () => {
//         setNum([...num, 9])
//       }
//   },
//   {
//     text: '8',
//     onPress:
//       ({ setNum, num }) =>
//       () => {
//         setNum([...num, 8])
//       }
//   },
//   {
//     text: '7',
//     onPress:
//       ({ setNum, num }) =>
//       () => {
//         setNum([...num, 7])
//       }
//   },
//   {
//     text: '/',
//     onPress:
//       ({ setNum, num }) =>
//       () => {
//         setNum([...num, '/'])
//       }
//   },
//   {
//     text: '6',
//     onPress:
//       ({ setNum, num }) =>
//       () => {
//         setNum([...num, 6])
//       }
//   },
//   {
//     text: '5',
//     onPress:
//       ({ setNum, num }) =>
//       () => {
//         setNum([...num, 5])
//       }
//   },
//   {
//     text: '4',
//     onPress:
//       ({ setNum, num }) =>
//       () => {
//         setNum([...num, 4])
//       }
//   },
//   {
//     text: '*',
//     onPress:
//       ({ setNum, num }) =>
//       () => {
//         setNum([...num, '*'])
//       }
//   },
//   {
//     text: '3',
//     onPress:
//       ({ setNum, num }) =>
//       () => {
//         setNum([...num, 3])
//       }
//   },
//   {
//     text: '2',
//     onPress:
//       ({ setNum, num }) =>
//       () => {
//         setNum([...num, 2])
//       }
//   },
//   {
//     text: '1',
//     onPress:
//       ({ setNum, num }) =>
//       () => {
//         setNum([...num, 1])
//       }
//   },
//   {
//     text: '-',
//     onPress:
//       ({ setNum, num }) =>
//       () => {
//         setNum([...num, '-'])
//       }
//   },
//   {
//     text: 'C',
//     onPress:
//       ({ setNum, num }) =>
//       () => {
//         setNum([])
//       }
//   },
//   {
//     text: '0',
//     onPress:
//       ({ setNum, num }) =>
//       () => {
//         setNum([...num, 0])
//       }
//   },
//   {
//     text: '=',
//     onPress:
//       ({ setNum, num }) =>
//       () => {
//         setNum([...num, '='])
//       }
//   },
//   {
//     text: '+',
//     onPress:
//       ({ setNum, num }) =>
//       () => {
//         setNum([...num, '+'])
//       }
//   }
// ]

const keybords = {
  // el  numero representa al key y el {} representa al parametro
  9: {},
  8: {},
  7: {},
  '/': {},
  4: {},
  5: {},
  6: {},
  '*': {},
  1: {},
  '-': {},
  3: {},
  C: {},
  '+': {},
  2: {},
  '=': {},
  0: {},
  '<-': {}
}
const Pantalla6 = (props: Props) => {
  //declaro estado para el texto inicial y para el texto que se modificará
  const [textWrite, setTextWrite] = useState('')
  //declro un estado para calclar el total y para modificar el total, que no he llamado aún
  const [total, setTotal] = useState(0)
  //imprimo lo que el se esta escriviendo y cambiado en el estado
  console.log('textWrite', textWrite)

  const onPressOption = (key: string) => () => {
    // si el key precionado al parcearlo es un numero, ejecuta las siguientes condicionales
    if (!isNaN(parseFloat(key))) {
      setTextWrite(textWrite + key)
    } else if (key == '=') {
      // logica de las operaciones
      const splitText = textWrite.split(' ')
      const left = parseFloat(splitText[0])
      const operator = splitText[1]
      const rigth = parseFloat(splitText[2])
      let result = 0

      switch (operator) {
        //en caso de cumplirse el primer caso ejecuta el result, y así con todos los casos siguientes.
        case '/':
          result = left / rigth
          break
        case '*':
          result = left * rigth

          break
        case '-':
          result = left - rigth

          break
        case '+':
          result = left + rigth

          break
      }
      setTextWrite(result.toString())
    } else if (key == 'C') {
      // limpia el texto escrito
      setTextWrite('')
    } else if (key == '<-') {
      let text = textWrite
      setTextWrite(text.slice(0, -1))
    } else {
      setTextWrite(textWrite + ' ' + key + ' ')
    }
  }
  return (
    <ScrollView>
      <Text style={styles.title}>Calculadora</Text>
      <Text style={styles.contenedor}>{textWrite}</Text>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        {Object.entries(keybords).map(([key, params], index) => {
          return <ButtonGeneral text={key} onPress={onPressOption(key)}></ButtonGeneral>
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20
  },
  contenedor: {
    borderWidth: 1,
    backgroundColor: '#E5E7E9',
    width: 340,
    height: 200,
    marginHorizontal: 30,
    marginBottom: 20,
    fontSize: 40
  },
  buttonC: {
    backgroundColor: '#FADBD8',
    width: 45,
    height: 50,
    margin: 20,
    borderRadius: 10
  },
  textBu: {
    textAlign: 'center',
    marginVertical: 7,
    fontSize: 25
  }
})
const ButtonGeneral = (props) => {
  //componente que cree para guardar un boton que se repetira n veces según los keys
  return (
    <View>
      <TouchableOpacity style={styles.buttonC} onPress={props.onPress}>
        <Text style={styles.textBu}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Pantalla6
