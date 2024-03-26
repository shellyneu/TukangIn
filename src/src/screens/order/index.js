import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import styles from './styles'
import {
  CardJobPost,
  NotificationIcon,
  SearchBar,
  TabBar,
} from '../../components'
import {
  ImgKeramik,
  ImgPostJob,
  ImgSKillTwo,
  ImgSkillOne,
} from '../../assets/images'
import {IcNoneFiles} from '../../assets/icons'

const OrderScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState(1)
  const [loading, setLoading] = useState(true)
  const [showCardJobPost, setShowCardJobPost] = useState(false)
  const [showTawaranValue, setShowTawaranValue] = useState(false)
  const [jobs, setJobs] = useState([])

  const handleTabPress = tabIndex => {
    setActiveTab(tabIndex)
    setShowCardJobPost(tabIndex === 1)
    setShowTawaranValue(tabIndex === 2)
  }

  const onPressNotif = () => {
    navigation.navigate('Notification', {sectionTitle: 'Notifikasi'})
  }

  useEffect(() => {
    const fetchedJobs = [
      {
        id: 1,
        imgSource: ImgPostJob,
        jobTitle: 'Ahli Cat Kusen dan Pagar',
        location: 'Karanglewas, Kec. Jatilawang',
        price: '420.000',
        countSubmit: '3',
        statusTitle: 1,
      },
      {
        id: 2,
        imgSource: ImgKeramik,
        jobTitle: 'Ahli Keramik',
        location: 'Karangloas, Kec. Jatilawang',
        price: '450.000',
        countSubmit: '3',
        statusTitle: 2,
      },
      {
        id: 3,
        imgSource: ImgSKillTwo,
        jobTitle: 'Ahli Pemasangan',
        location: 'Karangpasir, Kec. Jatilawang',
        price: '450.000',
        countSubmit: '3',
        statusTitle: 3,
      },
    ]
    setJobs(fetchedJobs)
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
        {showCardJobPost &&
          jobs.map(job => (
            <View style={{marginVertical: 5}}>
              <CardJobPost
                key={job.id}
                imgSource={job.imgSource}
                jobTitle={job.jobTitle}
                location={job.location}
                price={job.price}
                countSubmit={job.countSubmit}
                statusTitle={job.statusTitle}
                onPress={() => navigation.navigate('DetailJobUser')}
              />
            </View>
          ))}

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
