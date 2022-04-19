import * as React from 'react'
import { Button, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer, StackActions } from '@react-navigation/native'
// import Pantalla2 from '../screens/pantalla1'
import Pantalla2 from '../screens/Pantalla2'
import Pantalla3 from '../screens/Pantalla3'
import Pantalla4 from '../screens/Pantalla4'
import Pantalla5 from '../screens/Pantalla5'
import Pantalla6 from '../screens/Pantalla6'
import PrincipalTienda from '../screens/PrincipalTienda'
import TabOneScreen from '../screens/TabOneScreen'
import Ubicacion from '../screens/Ubicacion'
import Carrito from '../screens/Carrito'
import Agregar from '../screens/Agregar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as Linking from 'expo-linking'

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()
const prefix = Linking.createURL('/')
const DrawerComponent = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      {}
      <Drawer.Screen name="MyDairy" component={Pantalla4} />
      {/* <Drawer.Screen name="Ubicación" component={Ubicacion} /> */}
      <Drawer.Screen name="Home2" component={Pantalla2} />
      <Drawer.Screen name="Registrarse" component={Pantalla3} />
      <Drawer.Screen name="Calculadora" component={Pantalla6} />
      <Drawer.Screen name="Tienda" component={PrincipalTienda} />
      <Drawer.Screen
        name="Pantalla5"
        component={Pantalla5}
        options={{
          swipeEnabled: false,
          header: () => null,
          drawerLabel: '',
          drawerLabelStyle: { height: 0 }
        }}
      />
      <Drawer.Screen
        name="Carrito"
        component={Carrito}
        options={{
          swipeEnabled: false,
          header: () => null,
          drawerLabel: '',
          drawerLabelStyle: { height: 0 }
        }}
      />
      <Drawer.Screen
        name="Agregar"
        component={Agregar}
        options={{
          swipeEnabled: false,
          header: () => null,
          drawerLabel: '',
          drawerLabelStyle: { height: 0 }
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer linking={{ prefixes: [prefix] }}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabOneScreen} />
        <Stack.Screen
          name="Drawer"
          component={DrawerComponent}
          options={{
            header: () => null
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
