import { useLayout } from '@react-native-community/hooks'
import React, { FC, memo } from 'react'
import { View, ViewProps } from 'react-native'
import Animated, { useAnimatedStyle, useDerivedValue, withSpring } from 'react-native-reanimated'

import styles from './styles'

interface Props extends ViewProps {
  visible?: boolean
}

const CollapsibleView: FC<Props> = (props) => {
  const { children, style, visible = false, ...restProps } = props

  const { onLayout, height } = useLayout()

  const roundedHeight = Math.round(height)

  const visibleValue = useDerivedValue(() => (visible ? roundedHeight : 0), [visible, roundedHeight])

  const animatedStyles = useAnimatedStyle(() => ({
    height: withSpring(visibleValue.value, { damping: 50 }),
  }))

  return (
    <Animated.View style={[styles.container, animatedStyles]} {...restProps}>
      <View onLayout={onLayout} style={[styles.content, style]}>
        {children}
      </View>
    </Animated.View>
  )
}

export default memo(CollapsibleView)
