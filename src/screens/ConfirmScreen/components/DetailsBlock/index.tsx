import React, { FC, memo } from 'react'
import { View } from 'react-native'

import Text from '../../../../components/Text'

import styles from './styles'

interface Props {
  items: { label: string; value: string }[]
}

const InfoBlock: FC<Props> = (props) => {
  const { items } = props

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <View style={styles.row} key={item.label}>
          <Text variant='semibold' style={styles.label}>
            {item.label}
          </Text>
          <Text variant='semibold' style={styles.value}>
            {item.value}
          </Text>
        </View>
      ))}
    </View>
  )
}

export default memo(InfoBlock)
