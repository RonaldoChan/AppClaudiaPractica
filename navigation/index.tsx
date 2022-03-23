import * as React from 'react'
import { Button, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Pantalla2 from '../screens/Pantalla2'
import Pantalla3 from '../screens/Pantalla3'
import TabOneScreen from '../screens/TabOneScreen'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabOneScreen} />
        <Drawer.Screen name="Home2" component={Pantalla2} />
        <Drawer.Screen name="Notifications" component={Pantalla3} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
