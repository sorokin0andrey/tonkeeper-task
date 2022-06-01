import React, { forwardRef, ForwardRefRenderFunction, memo, ReactNode, useCallback, useImperativeHandle } from 'react'
import { View } from 'react-native'
import { Modalize } from 'react-native-modalize'
import { useModalize } from 'react-native-modalize/lib/utils/use-modalize'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IHandles } from 'react-native-modalize/lib/options'

import CloseIcon from '../CloseIcon'
import Touchable from '../Touchable'

import styles from './styles'

interface Props {
  footer?: ReactNode
  children: ReactNode
}

export interface BottomSheetRef extends IHandles {}

const BottomSheet: ForwardRefRenderFunction<BottomSheetRef, Props> = (props, ref) => {
  const { footer, children } = props

  const navigation = useNavigation()

  const { ref: modalizeRef, open, close } = useModalize()

  useFocusEffect(() => {
    open()
  })

  const onClosed = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  useImperativeHandle(ref, () => ({ open, close }), [open, close])

  const renderHeader = () => (
    <View style={styles.closeButtonContainer}>
      <Touchable hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }} onPress={() => close()}>
        <View style={styles.closeButton}>
          <CloseIcon size={20} />
        </View>
      </Touchable>
    </View>
  )

  const renderFooter = useCallback(() => {
    if (footer) {
      return <SafeAreaView edges={['bottom']}>{footer}</SafeAreaView>
    }
  }, [footer])

  return (
    <Modalize
      ref={modalizeRef}
      HeaderComponent={renderHeader}
      FooterComponent={renderFooter}
      adjustToContentHeight={true}
      withHandle={false}
      onClosed={onClosed}
      modalStyle={styles.modalStyle}
      scrollViewProps={{ showsVerticalScrollIndicator: false }}
      panGestureComponentEnabled={true}
    >
      {children}
    </Modalize>
  )
}

export default memo(forwardRef(BottomSheet))
