import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import {
  ButtonMain,
  HeaderSecondary,
  InputFieldMain,
  PhotoInput,
} from '../../components'
import {IcAddFiles, IcFilePlus} from '../../assets/icons'
import {launchImageLibrary} from 'react-native-image-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import {ENDPOINT} from '../../utils/endpoints'

const VerificationScreen = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState()
  const [imageName, setImageName] = useState(null)

  const [inputDescription, setInputDescription] = useState('')
  const [inputDescriptionError, setInputDescriptionError] = useState('')
  const [inputDescriptionStatus, setInputDescriptionStatus] = useState(false)

  const [loading, setLoading] = useState(false)

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
      const formData = new FormData()
      const refreshToken = await AsyncStorage.getItem('refreshToken')

      formData.append('deskripsi', inputDescription)

      if (selectedImage) {
        const filename = selectedImage.split('/').pop()
        const match = /\.(\w+)$/.exec(filename)
        const type = match ? `image/${match[1]}` : 'image'
        formData.append('fotoKtp', {
          uri: selectedImage,
          type,
          name: filename,
        })
      }

      // Make the API request
      const response = await axios.post(ENDPOINT.AUTH.VALIDATE, formData, {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      })

      const {data, success} = response.data
      console.log('API Response:', response.data)

      // Handle the response from the API
      console.log('API Response:', response.data)
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
                  onPress={openImagePicker}
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
