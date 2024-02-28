import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import styles from './styles'
import {ButtonMain, HeaderSecondary, PhotoInput} from '../../components'

const VerificationScreen = ({navigation}) => {
  return (
    <View style={styles.mainBody}>
      <ScrollView>
        <View style={{paddingHorizontal: 16}}>
          {/* HEADER */}
          <HeaderSecondary
            onPressBack={() => navigation.goBack('AsCraftman')}
            sectionTitle='Verifikasi'
          />

          {/* SECTION ONE */}
          <View style={{paddingTop: 20, gap: 10}}>
            <Text style={styles.subject}>Daftar Jadi Tukang</Text>
            <Text style={styles.desc}>
              Lengkapi seluruh dokumen dibawah ini, lalu tunggu konfirmasi dari
              kami untuk verifikasi & interview melalui video call
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
        </View>
      </ScrollView>
      <ButtonMain text={'Ajukan Diri'} />
    </View>
  )
}

export default VerificationScreen
