import {View, Text, ScrollView} from 'react-native'
import React from 'react'
import styles from './styles'
import {
  ButtonGroup,
  CardTukang,
  CardTukangPost,
  HeaderSecondary,
  SearchBar,
} from '../../components'
import {ImgProfileOne} from '../../assets/images'
import {Color, FontSize, Fonts} from '../../constants'

const SubmissionScreen = ({navigation}) => {
  const onPressNotif = () => {
    navigation.navigate('Notification', {sectionTitle: 'Notifikasi'})
  }
  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <HeaderSecondary
        onPressBack={() => navigation.goBack('DetailJob')}
        sectionTitle={'Pengajuan'}
        onPressNotif={onPressNotif}
      />

      {/* SEARCH */}
      <SearchBar placeholder={'Cari Tukang...'} />

      {/* BODY */}
      <View
        style={{
          backgroundColor: Color.WHITE,
          borderRadius: 14,
          gap: 16,
          paddingBottom: 12,
        }}>
        <CardTukangPost
          disabled={true}
          imgSource={ImgProfileOne}
          name={'Andika Darojat'}
          skill={'12'}
          location={'Karanglewas, Kec. Jatilawang'}
          isPhaseTwo={true}
        />
        <ButtonGroup
          textOne='Terima & Bayar'
          textTwo='Lihat Profile'
          isBtnOneMini={true}
          isBtnTwoMini={true}
          customTextTwo={{fontSize: FontSize.dp_16, fontFamily: Fonts.REGULAR}}
          customStyle={{
            backgroundColor: null,
            paddingVertical: 0,
          }}
          onPressOne={() => {
            navigation.navigate('Transaction', {sectionTitle: 'Transaksi'})
          }}
          onPressTwo={() => {
            navigation.navigate('DetailTukang', {sectionTitle: 'Detail Tukang'})
          }}
        />
      </View>
    </View>
  )
}

export default SubmissionScreen
