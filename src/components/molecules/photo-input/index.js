import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {FontSize, Fonts, Color} from '../../../constants'
import {IcFilePlus} from '../../../assets/icons'

const PhotoInput = () => {
  return (
    <View style={{gap: 14}}>
      <Text style={styles.card}>Kartu Tanda Penduduk</Text>
      <TouchableOpacity style={styles.upload}>
        <IcFilePlus />
        <Text style={styles.text}>Upload File</Text>
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
})

export default PhotoInput
