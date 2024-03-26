import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import styles from './styles'
import {CardNotification, HeaderSecondary} from '../../components'
import {Color, FontSize, Fonts} from '../../constants'
import {IcWallet} from '../../assets/icons'

const NotificationScreen = props => {
  const {route, navigation} = props
  const {sectionTitle} = route.params

  return (
    <View style={styles.containerMain}>
      <HeaderSecondary
        onPressBack={() => navigation.goBack()}
        sectionTitle={sectionTitle}
      />
      <View style={styles.todaySection}>
        <Text style={styles.today}>Hari ini</Text>
        <Text style={styles.notifCount}>
          4 {''}
          <Text>Notifikasi</Text>
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <CardNotification
          icon={<IcWallet />}
          notifTitle='Pembayaran anda berhasil'
          notifDesc='Proses pembayan anda pada sudah di konfirmasi oleh admin'
        />
      </ScrollView>
    </View>
  )
}

export default NotificationScreen
