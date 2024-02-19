import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './styles'
import {ButtonMain, HeaderSecondary, PhotoInput} from '../../components'
import {IcFilePlus} from '../../assets/icons'

const VerificationScreen = ({navigation}) => {
  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <HeaderSecondary
        onPressBack={() => navigation.goBack('AsCraftman')}
        sectionTitle='Verifikasi'
      />

      {/* SECTION ONE */}
      <View style={{paddingTop: 20, gap: 10}}>
        <Text style={styles.subject}>Daftar Jadi Tukang</Text>
        <Text style={styles.desc}>
          Lengkapi seluruh dokumen dibawah ini, lalu tunggu konfirmasi dari kami
          untuk verifikasi & interview melalui video call
        </Text>
      </View>

      {/* SECTION TWO */}
      <View style={{paddingTop: 20, gap: 10}}>
        <Text style={styles.aboutYou}>Tentang Anda</Text>
        <TextInput style={styles.input}>
          <Text>Deskripsikan diri anda...</Text>
        </TextInput>
      </View>

      {/* SECTION THREE */}
      <View style={{paddingTop: 18}}>
        <PhotoInput />
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <ButtonMain text={'Ajukan Diri'} />
      </View>
    </View>
  )
}

export default VerificationScreen
