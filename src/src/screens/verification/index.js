import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import {
  ButtonGroup,
  ButtonMain,
  HeaderSecondary,
  InputFieldMain,
  PhotoInput,
} from '../../components'
import {IcAddFiles, IcFilePlus, IcModalChecklist} from '../../assets/icons'
import {launchImageLibrary, launchCamera} from 'react-native-image-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import {ENDPOINT} from '../../utils/endpoints'
import Modal from 'react-native-modal'
import {Color, FontSize, Fonts} from '../../constants'
import ButtonGroupSecond from '../../components/molecules/button-group-secondary'

const VerificationScreen = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState()
  const [imageName, setImageName] = useState(null)

  const [inputDescription, setInputDescription] = useState('')
  const [inputDescriptionError, setInputDescriptionError] = useState('')
  const [inputDescriptionStatus, setInputDescriptionStatus] = useState(false)

  const [loading, setLoading] = useState(false)
  const [modalSuccessVisible, setModalSuccessVisible] = useState(false)

  const OnChangeDescription = text => {
    setInputDescription(text)
  }

  // const OnClickSend = () => {
  //   console.log(inputDescription, selectedImage)
  //   if (inputDescription.length === 0) {
  //     setInputDescriptionError('Tidak boleh kosong')
  //     setInputDescriptionStatus(true)
  //   } else {
  //     setInputDescriptionError('')
  //     setInputDescriptionStatus(false)
  //   }
  //   return handleSubmitData()
  // }

  const onPressNotif = () => {
    navigation.navigate('Notification', {sectionTitle: 'Notifikasi'})
  }

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    }
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera')
      } else if (response.error) {
        console.log('Camera Error: ', response.error)
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri
        setSelectedImage(imageUri)
      }
    })
  }

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    }

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('Image picker error: ', response.error)
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri
        setSelectedImage(imageUri)
        setImageName(response.fileName || 'Image') // Menggunakan nama file jika tersedia, jika tidak, gunakan 'Image'
      }
    })
  }

  const handleSubmitData = async () => {
    setLoading(true)
    try {
      const type = match ? `image/${match[1]}` : 'image'
      const filename = selectedImage.split('/').pop()
      const match = /\.(\w+)$/.exec(filename)

      const params = {
        deskripsi: inputDescription,
        ktp: {
          uri: selectedImage,
          type,
          name: filename,
        },
      }

      const refreshToken = await AsyncStorage.getItem('refreshToken')

      // Make the API request
      const response = await axios.post(ENDPOINT.AUTH.VALIDATE, params, {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      })

      const {data, success} = response.data
      console.log('API Response:', response.data)

      if (success) {
        // Alert.alert('Verifikasi Berhasil', [
        //   {
        //     onPress: () => navigation.goBack(),
        //   },
        // ])
        setModalSuccessVisible(true)
      }
    } catch (error) {
      console.log('API Error:', error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <HeaderSecondary
        onPressBack={() => navigation.goBack('AsCraftman')}
        sectionTitle='Verifikasi'
        customStyle={{paddingHorizontal: 16}}
        onPressNotif={onPressNotif}
      />

      <Modal isVisible={modalSuccessVisible}>
        <View style={styles.modalBox}>
          <View style={styles.inner}>
            <IcModalChecklist />
            <View style={{marginVertical: 10, gap: 5}}>
              <Text style={styles.title}>Kamu Sudah Terverifikasi</Text>
              <Text style={styles.desc}>
                Verifikasi KTP diperlukan agar kamu bisa mendaftar menjadi
                Tukang
              </Text>
            </View>
          </View>
          <ButtonGroupSecond
            textOne={'Lihat'}
            onPressOne={() => navigation.navigate('ProfileScreen')}
            textTwo={'Tutup'}
            onPressTwo={() => setModalSuccessVisible(false)}
          />
        </View>
      </Modal>

      {/* CONTENTS */}
      <ScrollView>
        <View>
          <View style={styles.content}>
            <View>
              {/* SECTION ONE */}
              <View style={{paddingTop: 20, gap: 10}}>
                <Text style={styles.subject}>Daftar Jadi Tukang</Text>
                <Text style={styles.desc}>
                  Lengkapi seluruh dokumen dibawah ini, lalu tunggu konfirmasi
                  dari kami untuk verifikasi & interview melalui video call
                </Text>
              </View>

              {/* SECTION TWO */}
              <View style={{paddingTop: 20, gap: 10}}>
                <InputFieldMain
                  titleField='Tentang Anda'
                  placeholder='Deskripsikan diri anda..'
                  isPhaseTwo={true}
                  value={inputDescription}
                  onChangeText={OnChangeDescription}
                  errorMsg={inputDescriptionError}
                  showErrorMessage={inputDescriptionStatus}
                  isError={inputDescriptionStatus}
                />
              </View>

              {/* SECTION THREE */}
              <View style={{paddingTop: 18, gap: 14}}>
                <PhotoInput
                  icon={<IcAddFiles />}
                  title='Upload Photo'
                  onPress={handleCameraLaunch}
                />
                <View style={{height: 180}}>
                  {selectedImage && (
                    <Image
                      source={{uri: selectedImage}}
                      style={styles.previewImg}
                    />
                  )}
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <ButtonMain
          text={
            loading ? (
              <ActivityIndicator size='large' color='#FFFFFF' />
            ) : (
              'Ajukan Diri'
            )
          }
          onPress={handleSubmitData}
        />
      </View>
    </View>
  )
}

export default VerificationScreen
