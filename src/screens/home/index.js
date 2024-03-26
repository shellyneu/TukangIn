import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import {Color, FontSize, Fonts} from '../../constants'
import {
  IcAlarmBell,
  IcCompass,
  IcCompassTwo,
  IcDroplets,
  IcGridLayout,
  IcPalette,
  IcSearch,
  IcTearDrop,
} from '../../assets/icons'
import {
  ImgCraftmanOne,
  ImgCraftmanTwo,
  ImgDetailJob,
  ImgKeramik,
  ImgKeran,
  ImgProfileOne,
  ImgUser,
} from '../../assets/images'
import {Badge} from 'react-native-elements'
import NotificationIcon from '../../components/atomics/notification-icon'
import {
  CardJob,
  CardTukang,
  FeatureIcon,
  LocationBox,
  RatingsBox,
  SearchBar,
  SkillSet,
  TabBar,
} from '../../components'

import {dataJob} from '../dataJobDummy'

const HomeScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState(1)
  const [savePressed, setSavePressed] = useState(true)

  const dataTukang = [
    {
      id: 1,
      nama: 'Andika Darojat',
      skillCount: 12,
      location: 'Karanglewas',
      rate: 4.9,
      img: ImgProfileOne,
    },
    {
      id: 2,
      nama: 'Bambang Sudyatmoko',
      skillCount: 10,
      location: 'Ledug',
      rate: 4.7,
      img: ImgCraftmanTwo,
    },
    {
      id: 3,
      nama: 'Ruslan',
      skillCount: 8,
      location: 'Tanjung',
      rate: 4.8,
      img: ImgCraftmanTwo,
    },
  ]

  const dataJob = [
    {
      id: 1,
      img: ImgDetailJob,
      jobTitle: 'Ahli Cat Kusen dan Pagar',
      location: 'Karanglewas, Kec. Jatilawang',
      price: '420.000',
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

  const onPressNotif = () => {
    navigation.navigate('Notification', {sectionTitle: 'Notifikasi'})
  }

  const onPressCardJob = () => {
    navigation.navigate('DetailJob', {
      sectionTitle: 'Detail Job',
    })
  }

  const renderSeparator = () => <View style={{width: 10, height: 10}} />

  const renderTukang = ({item}) => (
    <CardTukang
      imgSource={item.img}
      name={item.nama}
      skillCount={item.skillCount}
      location={item.location}
      rate={item.rate}
      onPress={() => {
        navigation.navigate('DetailTukang', {
          sectionTitle: 'Detail Tukang',
        })
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
      savePressed={savePressed}
      onPressSave={() => setSavePressed(!savePressed)}
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
          <NotificationIcon onPress={onPressNotif} />
        </View>

        {/* FEATURE LIST */}

        <View style={styles.featureBox}>
          <FeatureIcon
            icon={<IcCompassTwo />}
            label={'Pasang'}
            onPress={() =>
              navigation.navigate('DetailCategory', {
                sectionTitle: 'Pasang',
              })
            }
          />
          <FeatureIcon
            icon={<IcTearDrop />}
            label={'Saluran'}
            onPress={() =>
              navigation.navigate('DetailCategory', {
                sectionTitle: 'Saluran',
              })
            }
          />
          <FeatureIcon
            icon={<IcPalette />}
            label={'Pengecat'}
            onPress={() =>
              navigation.navigate('DetailCategory', {
                sectionTitle: 'Pengecat',
              })
            }
          />
          <FeatureIcon
            icon={<IcGridLayout />}
            label={'Lainnya'}
            onPress={() =>
              navigation.navigate('DetailCategory', {
                sectionTitle: 'Lainnya',
              })
            }
          />
        </View>

        {/* TUKANG */}
        <View style={{marginBottom: 20}}>
          <View style={styles.sectionTitle}>
            <Text style={styles.titleMain}>Tukang Terbaik</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ListTukang', {
                  sectionTitle: 'Semua Tukang',
                })
              }>
              <Text style={styles.others}>Lainnya</Text>
            </TouchableOpacity>
          </View>
          {/* {data.map((item) => {
            return (
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
          })} */}
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
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ListJob', {
                  sectionTitle: 'Semua Pekerjaan',
                })
              }>
              <Text style={styles.others}>Lainnya</Text>
            </TouchableOpacity>
          </View>
          <View>
            {dataJob.map(item => {
              return (
                <CardJob
                  imgSource={item.img}
                  jobTitle={item.jobTitle}
                  location={item.location}
                  price={item.price}
                  countSubmit={item.countSubmit}
                  savePressed={savePressed}
                  onPressSave={() => setSavePressed(!savePressed)}
                  onPress={onPressCardJob}
                />
              )
            })}
            {/* <FlatList
              data={dataJob}
              keyExtractor={item => item._id}
              renderItem={renderJob}
              ItemSeparatorComponent={renderSeparator}
              showsHorizontalScrollIndicator={false}
            /> */}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen
