import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import React, { FC } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const App: FC = () => (
  <GestureHandlerRootView style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Sheet' component={ConfirmScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </GestureHandlerRootView>
)

export default App
