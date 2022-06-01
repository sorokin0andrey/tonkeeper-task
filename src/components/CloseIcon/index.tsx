import React, { FC, memo } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  color?: string
  size?: number
}

const CloseIcon: FC<Props> = (props) => {
  const { color = '#FFFFFF', size = 24 } = props

  return (
    <Svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke={color}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <Path d='M18 6L6 18' />
      <Path d='M6 6L18 18' />
    </Svg>
  )
}

export default memo(CloseIcon)
