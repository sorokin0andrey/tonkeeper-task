import { Platform, TouchableOpacity } from 'react-native'
import { TouchableOpacity as RNGHTouchableOpacity } from 'react-native-gesture-handler'

const Touchable = Platform.OS === 'android' ? RNGHTouchableOpacity : TouchableOpacity

export default Touchable
