import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {FontSize, Fonts, Color} from '../../../constants'
import {IcFilePlus} from '../../../assets/icons'

const PhotoInput = ({showTitle, icon, title, onPress, titleField}) => {
  return (
    <View style={{gap: 14}}>
      {showTitle ? <Text style={styles.title}>{titleField}</Text> : null}
      <TouchableOpacity style={styles.upload} onPress={onPress}>
        {icon}
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  upload: {
    color: Color.BLACK,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Color.PRIMARY,
    backgroundColor: Color.WHITE,
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    paddingVertical: 12,
  },
  text: {
    fontSize: FontSize.dp_18,
    fontFamily: Fonts.MEDIUM,
    color: Color.PRIMARY,
  },
  title: {
    fontSize: FontSize.dp_18,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
  },
})

export default PhotoInput
