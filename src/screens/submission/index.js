import {View, Text, ScrollView} from 'react-native'
import React from 'react'
import styles from './styles'
import {
  CardTukang,
  CardTukangPost,
  HeaderSecondary,
  SearchBar,
} from '../../components'
import {ImgProfileOne} from '../../assets/images'

const SubmissionScreen = ({navigation}) => {
  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <HeaderSecondary
        onPressBack={() => navigation.goBack('DetailJob')}
        sectionTitle={'Pengajuan'}
      />

      {/* SEARCH */}
      <SearchBar placeholder={'Cari Tukang...'} />

      {/* BODY */}
      <CardTukangPost
        imgSource={ImgProfileOne}
        name={'Fahmi Ardiansyah'}
        skill={'12'}
        location={'Karangsari, Kec. Kembaran'}
        isPhaseTwo={true}
        onPress={''}
      />
    </View>
  )
}

export default SubmissionScreen
