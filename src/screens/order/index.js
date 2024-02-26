import {View, Text, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import {
  CardJobPost,
  NotificationIcon,
  SearchBar,
  TabBar,
} from '../../components'
import {ImgPostJob} from '../../assets/images'

const OrderScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState(1)
  const [showCardJobPost, setShowCardJobPost] = useState(false)

  const handleTabPress = tabIndex => {
    setActiveTab(tabIndex)
    setShowCardJobPost(tabIndex === 1)
  }

  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={{gap: 4}}>
          <Text style={styles.greetings}>Hi, Agus Setiawan</Text>
          <Text style={styles.desc}>Kelola Pesanan Anda</Text>
        </View>
        <NotificationIcon />
      </View>

      {/* SEARCH */}
      <SearchBar placeholder={'Cari order...'} />

      {/* TAB BAR */}
      <TabBar
        tabs={[
          {
            title: 'Unggahan',
            onPress: () => [setActiveTab(1), handleTabPress(1)],
          },
          {
            title: 'Tawaran',
            onPress: () => [setActiveTab(2), handleTabPress(2)],
          },
          {
            title: 'Jasa Saya',
            onPress: () => [setActiveTab(3), handleTabPress(3)],
          },
        ]}
        activeTab={activeTab}
      />

      {showCardJobPost && (
        <CardJobPost
          imgSource={ImgPostJob}
          jobTitle={'Perbaikan Genteng Terpercaya'}
          location={'Dukuhwaluh, Kec. Kembaran'}
          price={'750.000'}
          countSubmit={'30'}
          statusTitle={'rekrut'}
          onPress={() => navigation.navigate('DetailJob')}
        />
      )}
    </View>
  )
}

export default OrderScreen
