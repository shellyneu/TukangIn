import {View, Text, ScrollView} from 'react-native'
import React from 'react'
import styles from './styles'
import {HeaderSecondary, SearchBar} from '../../components'

const SubmissionScreen = () => {
  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <HeaderSecondary sectionTitle={'Pengajuan'} />

      {/* SEARCH */}
      <SearchBar placeholder={'Cari Tukang...'} />
    </View>
  )
}

export default SubmissionScreen
