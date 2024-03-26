import {View, Text} from 'react-native'
import React from 'react'
import styles from './styles'
import {HeaderSecondary, SearchBar} from '../../components'

const DetailCategory = props => {
  const {route, navigation} = props
  const {sectionTitle} = route.params

  const onPressNotif = () => {
    navigation.navigate('Notification', {sectionTitle: 'Notifikasi'})
  }

  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <HeaderSecondary
        onPressBack={() => navigation.goBack()}
        sectionTitle={sectionTitle}
        onPressNotif={onPressNotif}
      />

      {/* SEARCH */}
      <SearchBar placeholder={'Cari pekerjaan, tukang...'} />
    </View>
  )
}

export default DetailCategory
