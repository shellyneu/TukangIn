import {View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './styles'
import {ButtonFour} from '../../components'
import {ImgSplash} from '../../assets/images'

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Image source={ImgSplash} style={{width: '100%'}} />
      <View style={styles.container}>
        <Text style={styles.header}>Solusi Praktis Untuk Rumah Anda</Text>
        <Text style={styles.desc}>
          Hadir sebagai jawaban praktis untuk semua kebutuhan tukang rumah Anda
        </Text>
      </View>

      <View style={styles.footer}>
        <ButtonFour
          text='Lanjutkan'
          onPress={() => navigation.navigate('Login')}
        />
        <View style={styles.validationAccount}>
          <Text style={styles.textNavigate(false)}>Belum punya akun? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.textNavigate(true)}>Daftar </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default OnboardingScreen
