import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabOneScreen from '../screens/TabOneScreen'
import Pantalla2 from '../screens/Pantalla2'
import Pantalla3 from '../screens/Pantalla3'

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={TabOneScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="pantalla2"
          component={Pantalla2}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="pantalla3"
          component={Pantalla3}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
