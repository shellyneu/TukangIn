import {View, Text, ScrollView} from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import {NotificationIcon, SearchBar, TabBar} from '../../components'

const SimpanScreen = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={{gap: 4}}>
          <Text style={styles.greetings}>Hi, Agus Setiawan</Text>
          <Text style={styles.desc}>Yang Anda Simpan</Text>
        </View>
        <NotificationIcon />
      </View>

      {/* SEARCH */}
      <SearchBar placeholder={'Cari pekerjaan, tukang...'} />

      {/* TAB BAR */}
      <TabBar
        tabs={[
          {title: 'Pekerjaan', onPress: () => setActiveTab(1)},
          {title: 'Tukang', onPress: () => setActiveTab(2)},
        ]}
        activeTab={activeTab}
      />

      {/* CONTENT */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View></View>
      </ScrollView>
    </View>
  )
}

export default SimpanScreen
