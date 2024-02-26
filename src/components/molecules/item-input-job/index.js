import {View, Text, StyleSheet, TextInput} from 'react-native'
import {FontSize, Fonts, Color} from '../../../constants'

const ItemInputJob = ({subject, isPhaseTwo, placeholder}) => {
  return (
    <View>
      <Text style={styles.subject}>{subject}</Text>
      <TextInput
        style={isPhaseTwo ? styles.inputBig : styles.input}
        placeholder={placeholder}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  subject: {
    fontSize: FontSize.dp_18,
    color: Color.BLACK,
    fontFamily: Fonts.MEDIUM,
    paddingBottom: 10,
  },
  input: {
    height: 46,
    width: '100%',
    backgroundColor: Color.WHITE,
    borderRadius: 30,
    paddingLeft: 18,
  },
  inputBig: {
    width: '100%',
    backgroundColor: Color.WHITE,
    borderRadius: 14,
    paddingLeft: 18,
    paddingBottom: 58.5,
  },
})

export default ItemInputJob
