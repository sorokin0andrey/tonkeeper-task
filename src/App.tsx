import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import React, { FC } from 'react'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import HomeScreen from './screens/HomeScreen'
import ConfirmScreen from './screens/ConfirmScreen'
import { RootStackParamList } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()

const options: NativeStackNavigationOptions = {
  animation: 'none',
  headerShown: false,
  gestureEnabled: false,
  presentation: 'transparentModal',
}

const App: FC = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Sheet' component={ConfirmScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default gestureHandlerRootHOC(App)
