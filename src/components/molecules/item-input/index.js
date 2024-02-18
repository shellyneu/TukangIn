import {View, Text, StyleSheet, TextInput} from 'react-native'
import {FontSize, Fonts, Color} from '../../../constants'

const ItemInput = ({subject, placeholder}) => {
  return (
    <View>
      <Text style={styles.subject}>{subject}</Text>
      <TextInput style={styles.input} placeholder={placeholder} />
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
    backgroundColor: Color.GREYTWO,
    borderRadius: 30,
    paddingLeft: 18,
  },
})

export default ItemInput
