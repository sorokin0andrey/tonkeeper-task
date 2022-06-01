import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F2632',
    borderRadius: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 16,
  },
  label: {
    opacity: 0.5,
  },
  divider: {
    height: 1,
    marginLeft: 14,
    backgroundColor: '#fff',
    opacity: 0.05,
  },
})

export default styles
