import { StyleSheet } from 'react-native'

const IMAGE_SIZE = 72

const IMAGE_PADDING = 16 * 2

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    paddingTop: 48,
    paddingBottom: 32,
  },
  topContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    width: IMAGE_SIZE + IMAGE_PADDING,
    height: IMAGE_SIZE + IMAGE_PADDING,
    borderRadius: (IMAGE_SIZE + IMAGE_PADDING) / 2,
    backgroundColor: '#1F2632',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  title: {
    fontSize: 20,
    marginVertical: 24,
  },
  detailsContainer: {
    paddingTop: 16,
  },
  detailsButtonContainer: {
    alignItems: 'center',
    // TAP ZONE
    margin: -24,
    marginTop: 0,
  },
  detailsButton: {
    // TAP ZONE
    padding: 24,
  },
  detailsButtonText: {
    opacity: 0.5,
    fontSize: 14,
  },
  footerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingTop: 8,
    paddingBottom: 16,
  },
  footerItem: {
    flex: 1,
  },
  footerSpacer: {
    width: 16,
  },
})

export default styles
