import {View, Text, ScrollView, FlatList} from 'react-native'
import React, {useEffect, useState} from 'react'
import styles from './styles'
import {
  CardJob,
  CardTukang,
  NotificationIcon,
  SearchBar,
  TabBar,
} from '../../components'
import {
  ImgCraftmanOne,
  ImgCraftmanTwo,
  ImgKeramik,
  ImgKeran,
  ImgProfileOne,
} from '../../assets/images'

const SimpanScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState(1)
  const [showJobList, setShowJobList] = useState(false)
  const [showTukangList, setShowTukangList] = useState(false)
  const [searchTukang, setSearchTukang] = useState('')
  const [searchJob, setSearchJob] = useState('')
  const [savePressed, setSavePressed] = useState(true)

  const dataTukang = [
    {
      id: 1,
      nama: 'Andika Darojat',
      skillCount: 12,
      location: 'Purwokerto',
      rate: 4.9,
      img: ImgProfileOne,
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

  const onPressNotif = () => {
    navigation.navigate('Notification', {sectionTitle: 'Notifikasi'})
  }

  const handlePress = tabIndex => {
    setActiveTab(tabIndex)
    setShowJobList(tabIndex === 1)
    setShowTukangList(tabIndex === 2)
  }

  const onPressCardJob = () => {
    navigation.navigate('DetailJob', {
      sectionTitle: 'Detail Job',
    })
  }

  const filteredTukang = dataTukang.filter(
    dataTukang =>
      dataTukang.nama.toLowerCase().includes(searchTukang.toLowerCase()) ||
      dataTukang.location.toLowerCase().includes(searchTukang.toLowerCase()),
  )

  const filteredJob = dataJob.filter(
    dataJob =>
      dataJob.jobTitle.toLowerCase().includes(searchJob.toLowerCase()) ||
      dataJob.location.toLowerCase().includes(searchJob.toLowerCase()),
  )

  const renderSeparator = () => <View style={{width: 10, height: 15}} />

  const renderTukang = ({item}) => (
    <CardTukang
      customStyle={{width: 168, marginRight: 15}}
      imgCustomStyle={{width: 166}}
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

  useEffect(() => {
    setShowJobList(true)
  }, [])

  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={{gap: 4}}>
          <Text style={styles.greetings}>Hi, Agus Setiawan</Text>
          <Text style={styles.desc}>Yang Anda Simpan</Text>
        </View>
        <NotificationIcon onPress={onPressNotif} />
      </View>

      {/* SEARCH */}
      <SearchBar
        placeholder={'Cari pekerjaan, tukang...'}
        value={showJobList ? searchJob : searchTukang}
        onChangeText={text =>
          showJobList ? setSearchJob(text) : setSearchTukang(text)
        }
      />

      {/* TAB BAR */}
      <TabBar
        tabs={[
          {
            title: 'Pekerjaan',
            onPress: () => [setActiveTab(1), handlePress(1)],
          },
          {title: 'Tukang', onPress: () => [setActiveTab(2), handlePress(2)]},
        ]}
        activeTab={activeTab}
      />

      {/* CONTENT */}
      {showJobList && (
        <View>
          {dataJob.map(item => {
            return (
              <CardJob
                imgSource={item.img}
                jobTitle={item.jobTitle}
                location={item.location}
                price={item.price}
                countSubmit={item.countSubmit}
                onPress={onPressCardJob}
              />
            )
          })}
        </View>
      )}

      {showTukangList && (
        <View
          style={{
            flex: 1,
            marginBottom: 16,
          }}>
          <FlatList
            data={filteredTukang}
            keyExtractor={item => item._id}
            renderItem={renderTukang}
            ItemSeparatorComponent={renderSeparator}
            numColumns={2}
            style={{flex: 1}}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  )
}

export default SimpanScreen
