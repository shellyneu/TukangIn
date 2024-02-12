import {View, Text} from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import {NotificationIcon, SearchBar, TabBar} from '../../components'

const OrderScreen = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={{gap: 4}}>
          <Text style={styles.greetings}>Hi, Agus Setiawan</Text>
          <Text style={styles.desc}>Kelola Pesanan Anda</Text>
        </View>
        <NotificationIcon />
      </View>

      {/* SEARCH */}
      <SearchBar placeholder={'Cari order...'} />

      {/* TAB BAR */}
      <TabBar
        tabs={[
          {title: 'Unggahan', onPress: () => setActiveTab(1)},
          {title: 'Tawaran', onPress: () => setActiveTab(2)},
          {title: 'Jasa Saya', onPress: () => setActiveTab(3)},
        ]}
        activeTab={activeTab}
      />
    </View>
  )
}

export default OrderScreen
