import {View, Text, ScrollView, FlatList} from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import {CardJob, HeaderSecondary, SearchBar} from '../../components'
import {ImgDetailJob, ImgKeramik, ImgKeran} from '../../assets/images'

const ListJob = props => {
  const {route, navigation} = props
  const {sectionTitle} = route.params

  const [savePressed, setSavePressed] = useState(true)
  const [searchJob, setSearchJob] = useState('')

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
      img: ImgKeran,
      jobTitle: 'Perbaikan Saluran Air',
      location: 'Bojongsari, Kec. Kembaran',
      price: '540.000',
      countSubmit: 61,
    },
    {
      id: 3,
      img: ImgKeramik,
      jobTitle: 'Pemasangan Keramik',
      location: 'Dukuhwaluh, Kec. Kembaran',
      price: 'Rp720.000',
      countSubmit: 48,
    },
  ]

  const filteredJob = dataJob.filter(
    dataJob =>
      dataJob.jobTitle.toLowerCase().includes(searchJob.toLowerCase()) ||
      dataJob.location.toLowerCase().includes(searchJob.toLowerCase()),
  )

  const onPressNotif = () => {
    navigation.navigate('Notification', {sectionTitle: 'Notifikasi'})
  }

  const onPressCardJob = () => {
    navigation.navigate('DetailJob', {
      sectionTitle: 'Detail Job',
    })
  }

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

  const renderSeparator = () => <View style={{width: 10, height: 10}} />

  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <HeaderSecondary
        onPressBack={() => navigation.goBack()}
        sectionTitle={sectionTitle}
        onPressNotif={onPressNotif}
      />

      {/* SEARCH */}
      <SearchBar
        placeholder={'Cari pekerjaan, tukang...'}
        value={searchJob}
        onChangeText={text => setSearchJob(text)}
      />

      {/* CONTENT */}
      <FlatList
        data={filteredJob}
        keyExtractor={item => item._id}
        renderItem={renderJob}
        ItemSeparatorComponent={renderSeparator}
        numColumns={2}
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default ListJob
