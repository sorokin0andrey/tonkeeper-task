import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  modalStyle: {
    backgroundColor: '#11151E',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    overflow: 'hidden',
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 14,
    right: 14,
    zIndex: 2,
  },
  closeButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#1F2632',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default styles
