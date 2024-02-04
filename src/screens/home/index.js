import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import React from 'react'
import styles from './styles'
import {Color, FontSize, Fonts} from '../../constants'
import {
  IcAlarmBell,
  IcCompass,
  IcDroplets,
  IcGridLayout,
  IcPalette,
  IcSearch,
} from '../../assets/icons'
import {ImgCraftmanOne, ImgProfileOne} from '../../assets/images'
import {Badge} from 'react-native-elements'
import NotificationIcon from '../../components/atomics/notification-icon'
import {
  CardTukang,
  FeatureIcon,
  LocationBox,
  RatingsBox,
  SearchBar,
} from '../../components'

const HomeScreen = () => {
  return (
    <View style={styles.mainBody}>
      <ScrollView>
        {/* HEADER */}
        <View style={styles.header}>
          <Image source={ImgProfileOne} style={styles.profile} />
          <View style={styles.greetings}>
            <Text style={styles.welcomeText}>Selamat Datang</Text>
            <Text style={styles.userName}>Agus Setiawan</Text>
          </View>
          <NotificationIcon />
        </View>

        {/* SEARCH */}
        <SearchBar placeholder={'Cari pekerjaan, tukang...'} />

        {/* FEATURE LIST */}
        <View style={styles.featureBox}>
          <FeatureIcon icon={<IcCompass />} label={'Pasang'} />
          <FeatureIcon icon={<IcDroplets />} label={'Saluran'} />
          <FeatureIcon icon={<IcPalette />} label={'Pengecat'} />
          <FeatureIcon icon={<IcGridLayout />} label={'Lainnya'} />
        </View>

        {/* TUKANG */}
        <View>
          <View style={styles.sectionTitle}>
            <Text style={styles.titleMain}>Tukang Terbaik</Text>
            <Text style={styles.others}>Lainnya</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen
