import {View, Text, Image} from 'react-native'
import React, {useState} from 'react'
import styles from './style'
import {
  ButtonMain,
  ButtonTwo,
  HeaderSecondary,
  JobSet,
  ListJob,
  LocationBox,
  SkillSet,
} from '../../components'
import {ImgDetailJob} from '../../assets/images'
import {ScrollView} from 'react-native-gesture-handler'
import {IcHourglass, IcPrice} from '../../assets/icons'

const DetailJob = ({navigation}) => {
  const [isPhaseTwo, setIsPhaseTwo] = useState(true)
  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <HeaderSecondary
        onPressBack={() => navigation.goBack()}
        sectionTitle='Pekerjaan'
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

          <View style={{paddingHorizontal: 16, paddingTop: 20}}>
            <View>
              <Text style={styles.contentTitle}>Deskripsi</Text>
              <Text style={styles.contentDesc}>
                Menguasai seni pengecatan kusen dan pagar, saya memiliki
                keterampilan dalam pemilihan cat yang tepat, persiapan
                permukaan, dan penerapan cat dengan presisi.
              </Text>
            </View>

            <View>
              <Text style={styles.contentTitle}>List Pekerjaan</Text>
              <ListJob list='Pemilihan cat yang untuk kusen dan pagar.' />
              <ListJob list='Membersihkan dan mempersiapkan permukaan.' />
              <ListJob list='Penggunaan primer untuk daya lekat.' />
              <ListJob list='Melakukan pengecatan dengan rapi.' />
              <ListJob list='Menyempurnakan hasil dan memberikan perlindungan tambahan.' />
            </View>

            {isPhaseTwo ? (
              <ButtonMain
                text='Ajukan Diri'
                onPress={() => {
                  navigation.navigate('Submission')
                }}
              />
            ) : (
              <ButtonTwo text='Pengajuan' />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default DetailJob
