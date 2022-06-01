import React, { FC, memo } from 'react'
import { StyleSheet } from 'react-native'

import Text from '../Text'
import Touchable from '../Touchable'

interface Props {
  title: string
  variant?: 'primary' | 'secondary'
  onPress?: () => void
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    borderRadius: 14,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 16,
  },
  primary: {
    backgroundColor: '#63ABEF',
  },
  secondary: {
    backgroundColor: '#1F2632',
  },
})

const Button: FC<Props> = (props) => {
  const { title, variant = 'primary', onPress } = props

  return (
    <Touchable style={[styles.container, styles[variant]]} onPress={onPress}>
      <Text variant='semibold' style={styles.title}>
        {title}
      </Text>
    </Touchable>
  )
}

export default memo(Button)
