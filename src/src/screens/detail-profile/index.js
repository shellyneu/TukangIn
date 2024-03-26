import {View, Text, Image, TextInput} from 'react-native'
import React from 'react'
import styles from './styles'
import {HeaderSecondary, ItemInput} from '../../components'
import {ImgUser} from '../../assets/images'

const DetailProfileScreen = ({navigation}) => {
  const onPressNotif = () => {
    navigation.navigate('Notification', {sectionTitle: 'Notifikasi'})
  }

  return (
    <View style={styles.mainBody}>
      <HeaderSecondary
        onPressBack={() => navigation.goBack('profile')}
        sectionTitle='Informasi Pribadi'
        onPressNotif={onPressNotif}
      />

      <View style={{alignItems: 'center', paddingTop: 26, paddingBottom: 24}}>
        <Image source={ImgUser} style={styles.profile} />
      </View>

      <View style={{gap: 24}}>
        <ItemInput
          subject={'Email'}
          placeholder={'agus@gmail.com'}
          editable={false}
        />
        <ItemInput
          subject={'Nomor Telepon'}
          placeholder={'0896892876'}
          editable={false}
        />
        <ItemInput
          subject={'Nama Pengguna'}
          placeholder={'Agus Setiawan'}
          editable={false}
        />
        <ItemInput
          subject={'Password'}
          placeholder={'Password'}
          editable={false}
        />
      </View>
    </View>
  )
}

export default DetailProfileScreen
