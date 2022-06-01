import React, { FC, useCallback } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import Button from '../../components/Button'
import { RootStackParamList } from '../../types'

import styles from './styles'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

const HomeScreen: FC<Props> = (props) => {
  const { navigation } = props

  const openSheet = useCallback(() => {
    navigation.navigate('Sheet')
  }, [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='#11151E' />
      <Button title='Open sheet' variant='secondary' onPress={openSheet} />
    </SafeAreaView>
  )
}

export default gestureHandlerRootHOC(HomeScreen)
