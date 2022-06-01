import React, { FC, Fragment, memo } from 'react'
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
      {items.map((item, index) => (
        <Fragment key={item.label}>
          <View style={styles.row}>
            <Text variant='semibold' style={styles.label}>
              {item.label}
            </Text>
            <Text variant='semibold'>{item.value}</Text>
          </View>
          {index < items.length - 1 ? <View style={styles.divider} /> : null}
        </Fragment>
      ))}
    </View>
  )
}

export default memo(InfoBlock)
