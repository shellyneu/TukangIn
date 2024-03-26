import {View, Text, FlatList} from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import {CardTukang, HeaderSecondary, SearchBar} from '../../components'
import {ImgCraftmanOne, ImgCraftmanTwo} from '../../assets/images'

const ListTukang = props => {
  const {route, navigation} = props
  const {sectionTitle} = route.params

  const [searchTukang, setSearchTukang] = useState('')

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

  const filteredTukang = dataTukang.filter(
    dataTukang =>
      dataTukang.nama.toLowerCase().includes(searchTukang.toLowerCase()) ||
      dataTukang.location.toLowerCase().includes(searchTukang.toLowerCase()),
  )

  const onPressNotif = () => {
    navigation.navigate('Notification', {sectionTitle: 'Notifikasi'})
  }

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
        value={searchTukang}
        onChangeText={text => setSearchTukang(text)}
      />

      {/* CONTENT */}
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
    </View>
  )
}

export default ListTukang
