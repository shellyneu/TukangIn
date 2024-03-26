import {View, Text, Image, TouchableOpacity, Linking} from 'react-native'
import React from 'react'
import styles from './styles'
import {
  ButtonMain,
  HeaderSecondary,
  JobSet,
  ListJob,
  LocationBox,
} from '../../components'
import {ImgDetailJob} from '../../assets/images'
import {ScrollView} from 'react-native-gesture-handler'
import {IcArrowRight, IcHourglass, IcPrice} from '../../assets/icons'
import {Color, FontSize, Fonts} from '../../constants'

const DetailJob = props => {
  const {route, navigation} = props
  const {sectionTitle} = route.params

  const onPressNotif = () => {
    navigation.navigate('Notification', {sectionTitle: 'Notifikasi'})
  }

  const mapLinkTapped = () => {
    const url = 'https://maps.app.goo.gl/h8SAjDVkykjAHye96'
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        return Linking.openURL(url)
      }
    })
  }

  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <HeaderSecondary
        onPressBack={() => navigation.goBack()}
        sectionTitle='Pekerjaan'
        onPressNotif={onPressNotif}
        customStyle={{paddingHorizontal: 16}}
      />

      {/* CONTENT */}
      <ScrollView>
        <View style={styles.content}>
          <Image source={ImgDetailJob} style={styles.imgJob} />

          <View style={styles.contentPage}>
            <Text style={styles.title}>Ahli Cat Kusen dan Pagar</Text>
            <LocationBox
              isPhaseTwo={true}
              location='Karanglewas, Kec. Jatilawang'
            />
          </View>

          <View style={styles.job}>
            <JobSet
              iconJob={<IcPrice />}
              titleJob='Harga'
              descJob='Rp 420.000'
            />
            <JobSet
              iconJob={<IcHourglass />}
              titleJob='Waktu Pengerjaan'
              descJob='3 Hari'
            />
          </View>

          <View style={{paddingHorizontal: 16, paddingTop: 20, gap: 20}}>
            <View style={styles.linkBox}>
              <View style={styles.linkHeader}>
                <Text style={styles.contentTitle(true)}>Link Location</Text>
                <IcArrowRight />
              </View>
              <TouchableOpacity onPress={mapLinkTapped}>
                <Text style={styles.contentDesc}>
                  https://maps.app.goo.gl/h8SAjDVkykjAHye96
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={styles.contentTitle(false)}>Deskripsi</Text>
              <Text style={styles.contentDesc}>
                Menguasai seni pengecatan kusen dan pagar, saya memiliki
                keterampilan dalam pemilihan cat yang tepat, persiapan
                permukaan, dan penerapan cat dengan presisi.
              </Text>
            </View>

            <View>
              <Text style={styles.contentTitle(false)}>List Pekerjaan</Text>
              <ListJob list='Pemilihan cat yang untuk kusen dan pagar.' />
              <ListJob list='Membersihkan dan mempersiapkan permukaan.' />
              <ListJob list='Penggunaan primer untuk daya lekat.' />
              <ListJob list='Melakukan pengecatan dengan rapi.' />
              <ListJob list='Menyempurnakan hasil dan memberikan perlindungan tambahan.' />
            </View>
          </View>
        </View>
      </ScrollView>

      <ButtonMain
        isBackgroundVis={true}
        text='Ajukan Diri'
        onPress={() => {
          navigation.navigate('Apply')
        }}
      />
    </View>
  )
}

export default DetailJob