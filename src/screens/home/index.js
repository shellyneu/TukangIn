import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import {
  IcCompassTwo,
  IcGridLayout,
  IcPalette,
  IcTearDrop,
} from '../../assets/icons'
import {
  ImgCraftmanOne,
  ImgCraftmanTwo,
  ImgKeramik,
  ImgKeran,
  ImgUser,
} from '../../assets/images'
import NotificationIcon from '../../components/atomics/notification-icon'
import {CardJob, CardTukang, FeatureIcon, TabBar} from '../../components'

const HomeScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState(1)
  const [savePressed, setSavePressed] = useState(true)

  const dataTukang = [
    {
      id: 1,
      nama: 'Andika Darojat',
      skillCount: 12,
      location: 'Purwokerto',
      rate: 4.9,
      img: ImgCraftmanOne,
    },
    {
      id: 2,
      nama: 'Bambang',
      skillCount: 10,
      location: 'Purwokerto',
      rate: 4.7,
      img: ImgCraftmanTwo,
    },
    {
      id: 3,
      nama: 'Ruslan',
      skillCount: 8,
      location: 'Purwokerto',
      rate: 4.8,
      img: ImgCraftmanTwo,
    },
  ]

  const dataJob = [
    {
      id: 1,
      img: ImgKeran,
      jobTitle: 'Perbaikan Saluran Air',
      location: 'Bojongsari, Kec. Kembaran',
      price: '540.000',
      countSubmit: 61,
    },
    {
      id: 2,
      img: ImgKeramik,
      jobTitle: 'Pemasangan Keramik',
      location: 'Dukuhwaluh, Kec. Kembaran',
      price: 'Rp720.000',
      countSubmit: 48,
    },
  ]

  const renderSeparator = () => <View style={{width: 10, height: 10}} />

  const renderTukang = ({item}) => (
    <CardTukang
      imgSource={item.img}
      name={item.nama}
      skillCount={item.skillCount}
      location={item.location}
      rate={item.rate}
      onPress={() => {
        navigation.navigate('DetailTukang')
      }}
    />
  )

  const renderJob = ({item}) => (
    <CardJob
      imgSource={item.img}
      jobTitle={item.jobTitle}
      location={item.location}
      price={item.price}
      countSubmit={item.countSubmit}
      onPress={() => {
        navigation.navigate('DetailJob')
      }}
    />
  )

  return (
    <View style={styles.mainBody}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <Image source={ImgUser} style={styles.profile} />
          <View style={styles.greetings}>
            <Text style={styles.welcomeText}>Selamat Datang</Text>
            <Text style={styles.userName}>Agus Setiawan</Text>
          </View>
          <NotificationIcon />
        </View>

        {/* FEATURE LIST */}
        <View style={styles.featureBox}>
          <FeatureIcon icon={<IcCompassTwo />} label={'Pasang'} />
          <FeatureIcon icon={<IcTearDrop />} label={'Saluran'} />
          <FeatureIcon icon={<IcPalette />} label={'Pengecat'} />
          <FeatureIcon icon={<IcGridLayout />} label={'Lainnya'} />
        </View>

        {/* TUKANG */}
        <View style={{marginBottom: 20}}>
          <View style={styles.sectionTitle}>
            <Text style={styles.titleMain}>Tukang Terbaik</Text>
            <TouchableOpacity>
              <Text style={styles.others}>Lainnya</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={dataTukang}
            horizontal
            keyExtractor={item => item._id}
            renderItem={renderTukang}
            ItemSeparatorComponent={renderSeparator}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* JOB */}
        <View style={{marginBottom: 20}}>
          <View style={styles.sectionTitle}>
            <Text style={styles.titleMain}>Pekerjaan</Text>
            <TouchableOpacity>
              <Text style={styles.others}>Lainnya</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TabBar
              tabs={[
                {title: 'Semua', onPress: () => setActiveTab(1)},
                {title: 'Lokasi', onPress: () => setActiveTab(2)},
                {title: 'Terakhir', onPress: () => setActiveTab(3)},
              ]}
              activeTab={activeTab}
            />
            <FlatList
              data={dataJob}
              keyExtractor={item => item._id}
              renderItem={renderJob}
              ItemSeparatorComponent={renderSeparator}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen
