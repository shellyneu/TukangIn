import {View, Text, Image, TouchableOpacity} from 'react-native'
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

const ProfileScreen = ({onPress}) => {
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
      <TouchableOpacity style={styles.header}>
        <Image source={ImgUser} style={styles.photoProfile} />
        <View style={styles.userProfile}>
          <Text style={styles.userName}>Agus Setiawan</Text>
          <Text style={styles.userPhone}>+62 896892876</Text>
        </View>
      </TouchableOpacity>

      {/* ACCOUNT LIST */}
      <View style={styles.list}>
        <Text style={styles.listName}>AKUN</Text>
        <ItemProfile
          IconComponent={IcUser}
          text={'Informasi Pribadi'}
          onPress={''}
        />
        <ItemProfile
          IconComponent={IcAsCraftman}
          text={'Sebagai Tukang'}
          onPress={''}
        />
      </View>

      {/* OTHER LIST */}
      <View style={styles.list}>
        <Text style={styles.listName}>LAINNYA</Text>
        <ItemProfile
          IconComponent={IcJobPost}
          text={'Postingan Pekerjaan'}
          onPress={''}
        />
        <ItemProfile
          IconComponent={IcNotification}
          text={'Notifikasi'}
          onPress={''}
        />
        <ItemProfile
          IconComponent={IcHelpCenter}
          text={'Pusat Bantuan'}
          onPress={''}
        />
        <ItemProfile
          IconComponent={IcLanguage}
          text={'Bahasa (Mendatang)'}
          onPress={''}
        />
      </View>

      {/* ACTION LIST */}
      <View style={styles.list}>
        <Text style={styles.listName}>AKSI</Text>
        <ItemProfile
          IconComponent={IcDeleteAccount}
          text={'Hapus Akun'}
          onPress={''}
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
