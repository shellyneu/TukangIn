import {View, Text, Image} from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import {
  ButtonMain,
  ButtonThree,
  ButtonTwo,
  CardTukangPost,
  HeaderSecondary,
  ItemInputJob,
  JobSet,
  ListJob,
  LocationBox,
} from '../../components'
import {ImgDetailJob, ImgProfileOne} from '../../assets/images'
import {ScrollView} from 'react-native-gesture-handler'
import {IcHourglass, IcPrice} from '../../assets/icons'

const DetailJobUser = ({navigation}) => {
  const [isButtonPhase, setisButtonPhase] = useState(false)
  const [isTukangExist, setIsTukangExist] = useState(true)
  const [isTestiExist, setIsTestiExist] = useState(false)
  const [buttonTitle, setButtonTitle] = useState('Pekerjaan Telah Selesai')
  const [buttonStatus, setButtonStatus] = useState(false)

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

          {isTukangExist ? (
            <View style={{paddingHorizontal: 16, paddingTop: 20}}>
              <CardTukangPost
                imgSource={ImgProfileOne}
                name={'Fahmi Ardiansyah'}
                skill={'12'}
                location={'Karangsari, Kec. Kembaran'}
                isPhaseTwo={false}
                onPress={''}
              />

              {isTestiExist ? (
                <View style={{paddingTop: 20, gap: 20}}>
                  <ItemInputJob
                    subject={'Testimonial Layanan'}
                    placeholder={'Deskripsi Testimonial...'}
                    isPhaseTwo={true}
                  />
                  <ItemInputJob
                    subject={'Rating 0-5'}
                    placeholder={'Isi Rating Pekerjaan...'}
                    isPhaseTwo={false}
                  />
                  <ButtonThree text={'Kirim Testimonial'} />
                </View>
              ) : null}
            </View>
          ) : null}

          <View style={{paddingHorizontal: 16, paddingTop: 20}}>
            <View>
              <Text style={styles.contentTitle}>Deskripsi</Text>
              <Text style={styles.contentDesc}>
                Menguasai seni pengecatan kusen dan pagar, saya memiliki
                keterampilan dalam pemilihan cat yang tepat, persiapan
                permukaan, dan penerapan cat dengan presisi.
              </Text>
            </View>

            <View style={{paddingTop: 20}}>
              <Text style={styles.contentTitle}>List Pekerjaan</Text>
              <ListJob list='Pemilihan cat yang untuk kusen dan pagar.' />
              <ListJob list='Membersihkan dan mempersiapkan permukaan.' />
              <ListJob list='Penggunaan primer untuk daya lekat.' />
              <ListJob list='Melakukan pengecatan dengan rapi.' />
              <ListJob list='Menyempurnakan hasil dan memberikan perlindungan tambahan.' />
            </View>
          </View>
        </View>
      </ScrollView>

      {isButtonPhase ? (
        <ButtonTwo
          text='Pengajuan'
          onPressOne={() => {
            navigation.navigate('Submission')
          }}
          onPressTwo={() => navigation.goBack()}
        />
      ) : (
        <ButtonMain
          text={buttonTitle}
          disabled={buttonStatus}
          isDisabled={buttonStatus}
          onPress={() => {
            setIsTestiExist(true)
            setButtonTitle('Selesai')
            setButtonStatus(true)
          }}
        />
      )}
    </View>
  )
}

export default DetailJobUser
