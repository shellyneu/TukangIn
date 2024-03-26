import {View, Text, Image, TouchableOpacity, Linking} from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import {
  ButtonMain,
  ButtonThree,
  ButtonGroup,
  CardTukangPost,
  HeaderSecondary,
  InputFieldMain,
  ItemInputJob,
  JobSet,
  ListJob,
  LocationBox,
  TestimonialCard,
} from '../../components'
import {ImgDetailJob, ImgProfileOne, ImgTesti} from '../../assets/images'
import {ScrollView} from 'react-native-gesture-handler'
import {IcArrowRight, IcHourglass, IcPrice} from '../../assets/icons'
import {Color, FontSize, Fonts} from '../../constants'

const DetailJobUser = ({navigation}) => {
  // const [isButtonPhase, setisButtonPhase] = useState(true)
  const [isTukangExist, setIsTukangExist] = useState(false)
  const [isTestiExist, setIsTestiExist] = useState(false)
  const [isTestiCardExist, setIsTestiCardExist] = useState(false)
  const [buttonTitle, setButtonTitle] = useState('Pekerjaan Telah Selesai')
  const [buttonStatus, setButtonStatus] = useState(false)

  const [inputDescTesti, setInputDescTesti] = useState('')
  const [inputDescTestiError, setInputDescTestiError] = useState('')
  const [inputDescTestiStatus, setInputDescTestiStatus] = useState(false)

  const [inputRatingTesti, setInputRatingTesti] = useState('')
  const [inputRatingTestiError, setInputRatingTestiError] = useState('')
  const [inputRatingTestiStatus, setInputRatingTestiStatus] = useState(false)

  const onPressNotif = () => {
    navigation.navigate('Notification', {sectionTitle: 'Notifikasi'})
  }

  const onPressCardTukang = () => {
    navigation.navigate('DetailTukang', {sectionTitle: 'Detail Tukang'})
  }

  const onClickSendTesti = () => {
    if (inputDescTesti.length === 0 || inputRatingTesti.length === 0) {
      setInputDescTestiError('Tidak boleh kosong')
      setInputDescTestiStatus(true)
      setInputRatingTestiError('Tidak boleh kosong')
      setInputRatingTestiStatus(true)
    } else {
      setInputDescTestiError('')
      setInputDescTestiStatus(false)
      setInputRatingTestiError('')
      setInputRatingTestiStatus(false)
      setIsTestiExist(false)
      setIsTestiCardExist(true)
    }
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

          {isTukangExist ? (
            <View style={{paddingHorizontal: 16, paddingTop: 20}}>
              <CardTukangPost
                imgSource={ImgProfileOne}
                name={'Andika Darojat'}
                skill={'12'}
                location={'Karanglewas, Kec. Jatilawang'}
                isPhaseTwo={false}
                onPress={onPressCardTukang}
              />

              {isTestiExist ? (
                <View style={{paddingTop: 20, gap: 20}}>
                  <InputFieldMain
                    titleField='Testimonial Layanan'
                    isPhaseTwo={true}
                    placeholder='Deskripsi Testimonial...'
                    value={inputDescTesti}
                    onChangeText={text => setInputDescTesti(text)}
                    isError={inputDescTestiStatus}
                    showErrorMessage={inputDescTestiStatus}
                    errorMsg={inputDescTestiError}
                  />
                  <InputFieldMain
                    titleField='Rating 0-5'
                    placeholder='Isi Rating Pekerjaan...'
                    keyboardType='numeric'
                    value={inputRatingTesti}
                    onChangeText={text => setInputRatingTesti(text)}
                    isError={inputRatingTestiStatus}
                    showErrorMessage={inputRatingTestiStatus}
                    errorMsg={inputRatingTestiError}
                  />

                  <ButtonMain
                    text={'Kirim Testimonial'}
                    customStyle={{width: 190}}
                    onPress={onClickSendTesti}
                  />
                </View>
              ) : null}
              {isTestiCardExist ? (
                <View style={{marginTop: 20}}>
                  <TestimonialCard
                    imgProfile={ImgTesti}
                    name='Dari Anda'
                    dateReview='Today'
                    rate={inputRatingTesti}
                    reviewText={inputDescTesti}
                  />
                </View>
              ) : null}
            </View>
          ) : null}

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

      {isTukangExist ? (
        <ButtonMain
          isBackgroundVis={true}
          text={buttonTitle}
          disabled={buttonStatus}
          isDisabled={buttonStatus}
          onPress={() => {
            setIsTestiExist(true)
            setButtonTitle('Selesai')
            setButtonStatus(true)
          }}
        />
      ) : (
        <ButtonGroup
          textOne='Pengajuan'
          textTwo='Batalkan'
          isBtnTwoError={true}
          onPressOne={() => {
            navigation.navigate('Submission')
          }}
          onPressTwo={() => navigation.goBack()}
        />
      )}
    </View>
  )
}

export default DetailJobUser
