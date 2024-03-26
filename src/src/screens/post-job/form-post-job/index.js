import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native'
import React, {useState} from 'react'
import {launchImageLibrary, launchCamera} from 'react-native-image-picker'
import styles from './styles'
import {
  ButtonMain,
  HeaderSecondary,
  InputField,
  InputFieldMain,
  InputFieldSearch,
  PhotoInput,
} from '../../../components'
import {FontSize, Fonts, Color} from '../../../constants'
import {IcAddImage, IcPlus} from '../../../assets/icons'
import axios, {Axios} from 'axios'
import {ENDPOINT} from '../../../utils/endpoints'
import AsyncStorage from '@react-native-async-storage/async-storage'

const FormPostJob = props => {
  const {route, navigation} = props
  const {sectionTitle} = route.params

  const [inputTitleJob, setInputTitleJob] = useState('')
  const [inputTitleError, setInputTitleJobError] = useState('')
  const [inputTitleStatus, setInputTitleJobStatus] = useState(false)

  const [inputJenisJob, setInputJenisJob] = useState('')
  const [inputJenisJobError, setInputJenisJobError] = useState('')
  const [inputJenisJobStatus, setInputJenisJobStatus] = useState(false)

  const [inputLocationJob, setInputLocationJob] = useState('')
  const [inputLocationError, setInputLocationJobError] = useState('')
  const [inputLocationStatus, setInputLocationJobStatus] = useState(false)

  const [inputLinkGMaps, setInputLinkGMaps] = useState('')
  const [inputLinkGMapsError, setInputLinkGMapsError] = useState('')
  const [inputLinkGMapsStatus, setInputLinkGMapsStatus] = useState(false)

  const [inputPriceJob, setInputPriceJob] = useState('')
  const [inputPriceError, setInputPriceJobError] = useState('')
  const [inputPriceStatus, setInputPriceJobStatus] = useState(false)

  const [inputTimeJob, setInputTimeJob] = useState('')
  const [inputTimeError, setInputTimeJobError] = useState('')
  const [inputTimeStatus, setInputTimeJobStatus] = useState(false)

  const [inputListJob, setInputListJob] = useState([''])
  const [inputListError, setInputListJobError] = useState('')
  const [inputListStatus, setInputListJobStatus] = useState(false)

  const [inputDescriptionJob, setInputDescriptionJob] = useState('')
  const [inputDescriptionError, setInputDescriptionJobError] = useState('')
  const [inputDescriptionStatus, setInputDescriptionJobStatus] = useState(false)

  const [showAddContainer, setShowAddContainer] = useState(true)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageName, setImageName] = useState()

  const [loading, setLoading] = useState(false)

  const category = [
    {
      id: 1,
      name: 'pasang',
    },
    {
      id: 2,
      name: 'saluran',
    },
    {
      id: 3,
      name: 'pengecat',
    },
    {
      id: 4,
      name: 'lainnya',
    },
  ]

  const onPressNotif = () => {
    navigation.navigate('Notification', {sectionTitle: 'Notifikasi'})
  }

  const OnChangeTitleJob = text => {
    setInputTitleJob(text)
  }

  const OnChangeLocationJob = text => {
    setInputLocationJob(text)
  }

  const OnChangeLinkGMaps = text => {
    setInputLinkGMaps(text)
  }

  const OnChangePriceJob = text => {
    setInputPriceJob(text)
  }

  const OnChangeTimeJob = text => {
    setInputTimeJob(text)
  }

  const OnChangeListJob = text => {
    setInputListJob(text)
  }

  const OnChangeDescriptionJob = text => {
    setInputDescriptionJob(text)
  }

  const OnClickSend = () => {
    if (
      inputTitleJob.length === 0 ||
      selectedCategory.length === 0 ||
      inputLocationJob.length === 0 ||
      inputLinkGMaps.length === 0 ||
      inputPriceJob.length === 0 ||
      inputTimeJob.length === 0 ||
      inputListJob.length === 0 ||
      inputDescriptionJob.length === 0
    ) {
      setInputTitleJobError('Tidak boleh kosong')
      setInputJenisJobError('Tidak boleh kosong')
      setInputLocationJobError('Tidak boleh kosong')
      setInputLinkGMapsError('Tidak boleh kosong')
      setInputPriceJobError('Tidak boleh kosong')
      setInputTimeJobError('Tidak boleh kosong')
      setInputListJobError('Tidak boleh kosong')
      setInputDescriptionJobError('Tidak boleh kosong')
      setInputTitleJobStatus(true)
      setInputJenisJobStatus(true)
      setInputLocationJobStatus(true)
      setInputLinkGMapsStatus(true)
      setInputPriceJobStatus(true)
      setInputTimeJobStatus(true)
      setInputListJobStatus(true)
      setInputDescriptionJobStatus(true)
    } else {
      setInputTitleJobError('')
      setInputJenisJobError('')
      setInputLocationJobError('')
      setInputLinkGMapsError('')
      setInputPriceJobError('')
      setInputTimeJobError('')
      setInputListJobError('')
      setInputDescriptionJobError('')
      setInputTitleJobStatus(false)
      setInputJenisJobStatus(false)
      setInputLocationJobStatus(false)
      setInputLinkGMapsStatus(false)
      setInputPriceJobStatus(false)
      setInputTimeJobStatus(false)
      setInputListJobStatus(false)
      setInputDescriptionJobStatus(false)
      handleSubmitJob()
    }

    console.log(inputTitleJob, 'judul')
    console.log(selectedCategory, 'jenis')
    console.log(inputLocationJob, 'alamat')
    console.log(inputLinkGMaps, 'maps')
    console.log(inputPriceJob, 'harga')
    console.log(inputTimeJob, 'waktu')
    console.log(inputListJob, 'list')
    console.log(inputDescriptionJob, 'deskripsi')
    console.log(selectedImage, 'img')
  }

  const OnPressAddList = () => {
    setInputListJob([...inputListJob, ''])
  }

  const UpdateInput = (index, value) => {
    const updatedList = [...inputListJob]
    updatedList[index] = value
    setInputListJob(updatedList)
  }

  const onPressListCategory = _value => {
    setSelectedCategory(_value)
    setIsDropdownOpen(false)
    if (inputJenisJob !== 0) {
      setInputJenisJobStatus(false)
    }
  }

  const filteredCategory = category.filter(category =>
    category.name.toLowerCase().includes(inputJenisJob.toLowerCase()),
  )

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

  const handleSubmitJob = async () => {
    setLoading(true)
    try {
      const type = match ? `image/${match[1]}` : 'image'
      const filename = selectedImage.split('/').pop()
      const match = /\.(\w+)$/.exec(filename)

      const jobData = {
        titleJob: inputTitleJob,
        serviceCategory: selectedCategory,
        address: inputLocationJob,
        link: inputLinkGMaps,
        price: inputPriceJob,
        day: inputTimeJob,
        listJob: inputListJob,
        desc: inputDescriptionJob,
        statusJob: 'Rekrut',
        photo: {
          uri: selectedImage,
          type,
          name: filename,
        },
      }

      console.log(jobData, 'dtj')

      const refreshToken = await AsyncStorage.getItem('refreshToken')

      const response = await axios.post(ENDPOINT.JOB.POST_JOB, jobData, {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      })

      const {data, success, message} = response.data
      console.log('API Response:', response.data)

      if (success) {
        Alert.alert('Verifikasi Berhasil')
      }
    } catch (error) {
      console.log('API Error:', error.response.data)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <HeaderSecondary
        onPressBack={() => navigation.goBack('Profile')}
        sectionTitle={sectionTitle}
        customStyle={{paddingHorizontal: 16}}
        onPressNotif={onPressNotif}
      />

      {/* CONTENTS */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={{flexDirection: 'column', gap: 24}}>
            <InputFieldMain
              titleField='Judul Pekerjaan'
              placeholder='Masukkan Judul..'
              value={inputTitleJob}
              onChangeText={OnChangeTitleJob}
              errorMsg={inputTitleError}
              showErrorMessage={inputTitleStatus}
              isError={inputTitleStatus}
            />
            <InputFieldSearch
              titleField='Jenis Pekerjaan'
              placeholderInput='Pilih Jenis Pekerjaan..'
              placeholderTouch='Pilih Jenis Pekerjaan..'
              value={inputJenisJob}
              onChangeInput={text => setInputJenisJob(text)}
              data={filteredCategory}
              keyExtractor={item => item.id}
              isDropdownVisible={isDropdownOpen}
              selectedCategory={selectedCategory}
              onPressSelectItem={onPressListCategory}
              onOpenDropdown={() => {
                setIsDropdownOpen(true)
                setInputJenisJobError('')
              }}
              onCloseDropdown={() => {
                setIsDropdownOpen(false)
                setInputJenisJobError('Tidak boleh kosong')
              }}
              errorMsg={inputJenisJobError}
              showErrorMessage={inputJenisJobStatus}
              isError={inputJenisJobStatus}
            />
            <InputFieldMain
              titleField='Alamat Lokasi'
              placeholder='Masukkan Alamat..'
              value={inputLocationJob}
              onChangeText={OnChangeLocationJob}
              errorMsg={inputLocationError}
              showErrorMessage={inputLocationStatus}
              isError={inputLocationStatus}
            />
            <InputFieldMain
              titleField='Link GMaps'
              placeholder='Masukkan Link Gmaps..'
              value={inputLinkGMaps}
              onChangeText={OnChangeLinkGMaps}
              errorMsg={inputLinkGMapsError}
              showErrorMessage={inputLinkGMapsStatus}
              isError={inputLinkGMapsStatus}
            />
            <InputFieldMain
              titleField='Harga Pekerjaan'
              placeholder='Masukkan Harga..'
              keyboardType='numeric'
              value={inputPriceJob}
              onChangeText={OnChangePriceJob}
              errorMsg={inputPriceError}
              showErrorMessage={inputPriceStatus}
              isError={inputPriceStatus}
            />
            <InputFieldMain
              titleField='Lama Pengerjaan/hari'
              placeholder='Masukkan Lama Pengerjaan..'
              value={inputTimeJob}
              onChangeText={OnChangeTimeJob}
              errorMsg={inputTimeError}
              showErrorMessage={inputTimeStatus}
              isError={inputTimeStatus}
            />
            <View>
              <Text style={styles.titleField}>List Pekerjaan</Text>
              {inputListJob.map((input, index) => (
                <View key={index}>
                  <InputField
                    placeholder='Masukkan List Pekerjaan..'
                    value={inputListJob}
                    onChangeText={text => UpdateInput(index, text)}
                    errorMsg={inputListError}
                    showErrorMessage={inputListStatus}
                    isError={inputListStatus}
                  />
                </View>
              ))}
              <TouchableOpacity
                style={styles.containerAdd}
                onPress={OnPressAddList}>
                <IcPlus />
                <Text style={styles.textAdd}>Tambah List</Text>
              </TouchableOpacity>
            </View>

            <InputFieldMain
              titleField='Deskripsi Pekerjaan'
              placeholder='Deskripsi Pekerjaan..'
              isPhaseTwo={true}
              value={inputDescriptionJob}
              onChangeText={OnChangeDescriptionJob}
              errorMsg={inputDescriptionError}
              showErrorMessage={inputDescriptionStatus}
              isError={inputDescriptionStatus}
            />

            <PhotoInput
              icon={<IcAddImage />}
              title='Upload Photo'
              onPress={handleCameraLaunch}
            />
            {selectedImage && (
              <Image source={{uri: selectedImage}} style={styles.previewImg} />
            )}
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
              'Unggah Pekerjaan'
            )
          }
          onPress={handleSubmitJob}
        />
      </View>
    </View>
  )
}

export default FormPostJob
