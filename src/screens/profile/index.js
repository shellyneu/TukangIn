import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
} from 'react-native'
import React from 'react'
import styles from './styles'
import NotificationIcon from '../../components/atomics/notification-icon'
import {
  IcAsCraftman,
  IcDeleteAccount,
  IcHelpCenter,
  IcJobPost,
  IcLanguage,
  IcLogout,
  IcNotification,
  IcUser,
} from '../../assets/icons'
import {ImgUser} from '../../assets/images'
import {ItemProfile} from '../../components'

const ProfileScreen = ({navigation}) => {
  const sendWhatsApp = () => {
    let msg =
      'Halo, \nSaya membutuhkan bantuan terkait TukangIn. \n \n Apakah bisa bantu?'
    let phoneWithCountryCode = '+6289648625898'

    let mobile =
      Platform.OS == 'ios' ? phoneWithCountryCode : '+' + phoneWithCountryCode
    if (mobile) {
      if (msg) {
        let url = 'whatsapp://send?text=' + msg + '&phone=' + mobile
        Linking.openURL(url)
          .then(data => {
            console.log('WhatsApp Opened')
          })
          .catch(() => {
            alert('Make sure WhatsApp installed on your device')
          })
      } else {
        alert('Please insert message to send')
      }
    } else {
      alert('Please insert mobile no')
    }
  }

  return (
    <View style={styles.mainBody}>
      {/* TOP */}
      <View style={styles.top}>
        <View style={styles.greetings}>
          <Text style={styles.greeting}>Hi, Agus Setiawan</Text>
          <Text style={styles.manageProfile}>Kelola Profil Anda</Text>
        </View>
        <NotificationIcon />
      </View>

      {/* HEADER */}
      <View style={styles.header}>
        <Image source={ImgUser} style={styles.photoProfile} />
        <View style={styles.userProfile}>
          <Text style={styles.userName}>Agus Setiawan</Text>
          <Text style={styles.userPhone}>+62 896892876</Text>
        </View>
      </View>

      {/* ACCOUNT LIST */}
      <View style={styles.list}>
        <Text style={styles.listName}>AKUN</Text>
        <ItemProfile
          IconComponent={IcUser}
          text={'Informasi Pribadi'}
          onPress={() => navigation.navigate('DetailProfile')}
        />
        <ItemProfile
          IconComponent={IcAsCraftman}
          text={'Sebagai Tukang'}
          onPress={() => navigation.navigate('AsCraftman')}
        />
      </View>

      {/* OTHER LIST */}
      <View style={styles.list}>
        <Text style={styles.listName}>LAINNYA</Text>
        <ItemProfile
          IconComponent={IcJobPost}
          text={'Postingan Pekerjaan'}
          onPress={() => navigation.navigate('PostJob')}
        />
        <ItemProfile
          IconComponent={IcNotification}
          text={'Notifikasi'}
          onPress={() => {
            navigation.navigate('Notification', {
              sectionTitle: 'Notifikasi',
            })
            console.log('click')
          }}
        />
        <ItemProfile
          IconComponent={IcHelpCenter}
          text={'Pusat Bantuan'}
          onPress={sendWhatsApp}
        />
        <ItemProfile
          IconComponent={IcLanguage}
          text={'Bahasa (Mendatang)'}
          onPress={() => navigation.navigate('')}
        />
      </View>

      {/* ACTION LIST */}
      <View style={styles.list}>
        <Text style={styles.listName}>AKSI</Text>
        <ItemProfile
          IconComponent={IcDeleteAccount}
          text={'Hapus Akun'}
          onPress={() => navigation.navigate('')}
        />
        <TouchableOpacity style={styles.logout}>
          <IcLogout />
          <Text style={styles.textLogout}>Keluar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProfileScreen
