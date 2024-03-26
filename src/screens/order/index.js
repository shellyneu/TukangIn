import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import styles from './styles'
import {
  CardJobPost,
  NotificationIcon,
  SearchBar,
  TabBar,
} from '../../components'
import {ImgPostJob} from '../../assets/images'
import {IcNoneFiles} from '../../assets/icons'

const OrderScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState(1)
  const [loading, setLoading] = useState(true)
  const [showCardJobPost, setShowCardJobPost] = useState(false)
  const [showTawaranValue, setShowTawaranValue] = useState(false)

  const handleTabPress = tabIndex => {
    setActiveTab(tabIndex)
    setShowCardJobPost(tabIndex === 1)
    setShowTawaranValue(tabIndex === 2)
  }

  const onPressNotif = () => {
    navigation.navigate('Notification', {sectionTitle: 'Notifikasi'})
  }

  useEffect(() => {
    setShowCardJobPost(true)
  }, [])

  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={{gap: 4}}>
          <Text style={styles.greetings}>Hi, Agus Setiawan</Text>
          <Text style={styles.desc}>Kelola Pesanan Anda</Text>
        </View>
        <NotificationIcon onPress={onPressNotif} />
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
        ]}
        activeTab={activeTab}
      />

      <ScrollView>
        {showCardJobPost && (
          <CardJobPost
            imgSource={ImgPostJob}
            jobTitle={'Ahli Cat Kusen dan Pagar'}
            location={'Karanglewas, Kec. Jatilawang'}
            price={'420.000'}
            countSubmit={'3'}
            statusTitle={'rekrut'}
            onPress={() => navigation.navigate('DetailJobUser')}
          />
        )}

        {showTawaranValue && (
          <View style={styles.containerNone}>
            <IcNoneFiles />
            <View style={styles.textNoneBox}>
              <Text style={styles.titleNone}>Belum Ada Unggahan</Text>
              <Text style={styles.descNone}>
                Anda belum ada unggahan, mulai unggah kerusakan pada rumah anda
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  )
}

export default OrderScreen
