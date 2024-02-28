import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import {
  ButtonMain,
  HeaderSecondary,
  InputField,
  InputFieldMain,
  PhotoInput,
} from '../../../components'
import {IcAddImg, IcPlus} from '../../../assets/icons'

const FormPostJob = props => {
  const {route, navigation} = props
  const {sectionTitle} = route.params

  const [inputTitleJob, setInputTitleJob] = useState('')
  const [inputTitleError, setInputTitleJobError] = useState('')
  const [inputTitleStatus, setInputTitleJobStatus] = useState(false)

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
      inputLocationJob.length === 0 ||
      inputLinkGMaps.length === 0 ||
      inputPriceJob.length === 0 ||
      inputTimeJob.length === 0 ||
      inputListJob.length === 0 ||
      inputDescriptionJob.length === 0
    ) {
      setInputTitleJobError('Tidak boleh kosong')
      setInputLocationJobError('Tidak boleh kosong')
      setInputLinkGMapsError('Tidak boleh kosong')
      setInputPriceJobError('Tidak boleh kosong')
      setInputTimeJobError('Tidak boleh kosong')
      setInputListJobError('Tidak boleh kosong')
      setInputDescriptionJobError('Tidak boleh kosong')
      setInputTitleJobStatus(true)
      setInputLocationJobStatus(true)
      setInputLinkGMapsStatus(true)
      setInputPriceJobStatus(true)
      setInputTimeJobStatus(true)
      setInputListJobStatus(true)
      setInputDescriptionJobStatus(true)
    } else {
      setInputTitleJobError('')
      setInputLocationJobError('')
      setInputLinkGMapsError('')
      setInputPriceJobError('')
      setInputTimeJobError('')
      setInputListJobError('')
      setInputDescriptionJobError('')
      setInputTitleJobStatus(false)
      setInputLocationJobStatus(false)
      setInputLinkGMapsStatus(false)
      setInputPriceJobStatus(false)
      setInputTimeJobStatus(false)
      setInputListJobStatus(false)
      setInputDescriptionJobStatus(false)
    }
  }

  const OnPressAddList = () => {
    setInputListJob([...inputListJob, ''])
  }

  const UpdateInput = (index, value) => {
    const updatedList = [...inputListJob]
    updatedList[index] = value
    setInputListJob(updatedList)
  }

  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <HeaderSecondary
        onPressBack={() => navigation.goBack('Profile')}
        sectionTitle={sectionTitle}
        customStyle={{paddingHorizontal: 16}}
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

            <PhotoInput icon={<IcAddImg />} title='Upload Ulang Photo' />
          </View>
        </View>
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <ButtonMain text='Unggah Pekerjaan' onPress={OnClickSend} />
      </View>
    </View>
  )
}

export default FormPostJob
