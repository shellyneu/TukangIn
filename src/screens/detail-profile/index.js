import {View, Text, Image, TextInput} from 'react-native'
import React from 'react'
import styles from './styles'
import {HeaderSecondary, ItemInput} from '../../components'
import {ImgUser} from '../../assets/images'

const DetailProfileScreen = ({navigation}) => {
  return (
    <View style={styles.mainBody}>
      <HeaderSecondary
        onPressBack={() => navigation.goBack('profile')}
        sectionTitle='Informasi Pribadi'
      />

      <View style={{alignItems: 'center', paddingTop: 26, paddingBottom: 24}}>
        <Image source={ImgUser} style={styles.profile} />
      </View>

      <View style={{gap: 24}}>
        <ItemInput subject={'Email'} placeholder={'agus@gmail.com'} />
        <ItemInput subject={'Nomor Telepon'} placeholder={'0896892876'} />
        <ItemInput subject={'Nama Pengguna'} placeholder={'Agus Setiawan'} />
        <ItemInput subject={'Password'} placeholder={'Password'} />
      </View>
    </View>
  )
}

export default DetailProfileScreen
