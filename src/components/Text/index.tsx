import React, { FC, memo } from 'react'
import { Text as RNText, TextProps } from 'react-native'

import styles from './styles'

interface Props extends TextProps {
  variant?: Exclude<keyof typeof styles, 'base'>
}

const Text: FC<Props> = (props) => {
  const { variant = 'regular', style, ...rest } = props

  return <RNText {...rest} style={[styles.base, styles[variant], style]} />
}

export default memo(Text)
