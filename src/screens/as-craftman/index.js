import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './styles'
import {HeaderSecondary, ItemInput} from '../../components'
import {ImgUser} from '../../assets/images'
import {IcRisk} from '../../assets/icons'

const AsCraftman = ({navigation}) => {
  return (
    <View style={styles.mainBody}>
      <HeaderSecondary
        onPressBack={() => navigation.goBack('profile')}
        sectionTitle='Sebagai Tukang'
      />
      <View style={styles.body}>
        <IcRisk style={styles.icon} />
        <Text style={styles.subject}>Anda Belum Verifikasi</Text>
        <Text style={styles.desc}>
          Verifikasi terlebih dahulu agar anda dapat menjadi tukang di platform
          kami
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Verification')}>
          <Text style={styles.verification}>Verifikasi Sekarang</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AsCraftman
