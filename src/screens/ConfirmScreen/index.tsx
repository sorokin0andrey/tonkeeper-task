import React, { FC, memo, useCallback, useMemo, useRef, useState } from 'react'
import { Image, View } from 'react-native'

import Button from '../../components/Button'
import BottomSheet, { BottomSheetRef } from '../../components/BottomSheet'
import CollapsibleView from '../../components/CollapsibleView'
import Text from '../../components/Text'
import Touchable from '../../components/Touchable'

import styles from './styles'
import DetailsBlock from './components/DetailsBlock'
import InfoBlock from './components/InfoBlock'

const IMAGE_URL =
  'https://lh3.googleusercontent.com/NLlQy81-eIVdUdCS85-m657qIZJR9ijWHQudwoGb7KWM2ID4Fap809OQqh9A9Fg0gV_zoi6wJFtlUGQICChkkpGTkeJ0D9Q3irjAIA=w600'

const BASE_INFO_MOCK = [
  { label: 'Collection name', value: 'Magic Mushrooms' },
  { label: 'Royalty address', value: '...' },
  { label: 'Royalty', value: '20%' },
  { label: 'Fee', value: '0.07 TON' },
]

const DETAILS_MOCK = [
  { label: 'NFT collection ID', value: 'd8a928b2043...b76257' },
  { label: 'Collection content URI', value: 'getgems.com/collection/some-url' },
  { label: 'NFT item content base URI', value: 'getgems.com/collection/some-url' },
  { label: 'NFT item code HEX', value: 'd8a928b2043db77e340b523547bf16cb4aa483f0645fe0a290ed1f20aab76257' },
]

const ConfirmScreen: FC = () => {
  const [detailsShown, setDetailsShown] = useState(false)

  const handlePressDetails = useCallback(() => setDetailsShown((s) => !s), [])

  const bottomSheetRef = useRef<BottomSheetRef>(null)

  const handleClosePress = useCallback(() => bottomSheetRef.current?.close(), [])

  const footer = useMemo(
    () => (
      <View style={styles.footerContainer}>
        <View style={styles.footerItem}>
          <Button title='Cancel' variant='secondary' onPress={handleClosePress} />
        </View>
        <View style={styles.footerSpacer} />
        <View style={styles.footerItem}>
          <Button title='Confirm' onPress={handleClosePress} />
        </View>
      </View>
    ),
    [handleClosePress]
  )

  const detailsButtonText = detailsShown ? 'Hide details' : 'Show details'

  return (
    <BottomSheet ref={bottomSheetRef} footer={footer}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: IMAGE_URL,
              }}
            />
          </View>
          <Text variant='bold' style={styles.title}>
            Create NFT Collection
          </Text>
        </View>
        <InfoBlock items={BASE_INFO_MOCK} />
        <CollapsibleView style={styles.detailsContainer} visible={detailsShown}>
          <DetailsBlock items={DETAILS_MOCK} />
        </CollapsibleView>
        <View style={styles.detailsButtonContainer}>
          <Touchable style={styles.detailsButton} onPress={handlePressDetails}>
            <Text variant='semibold' style={styles.detailsButtonText}>
              {detailsButtonText}
            </Text>
          </Touchable>
        </View>
      </View>
    </BottomSheet>
  )
}

export default memo(ConfirmScreen)
