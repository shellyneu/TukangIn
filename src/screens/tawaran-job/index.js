import {View, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import {
  ButtonMain,
  HeaderSecondary,
  InputFieldMain,
  PhotoInput,
} from '../../components'
import {IcAddImg} from '../../assets/icons'

const TawaranJobScreen = ({navigation}) => {
  const [inputDeskripsi, setInputDeskripsi] = useState('')
  const [inputDeskripsiError, setInputDeskripsiError] = useState('')
  const [deskripsiErrorStatus, setDeskripsiErrorStatus] = useState(false)
  const [inputHarga, setInputHarga] = useState('')
  const [inputHargaError, setInputHargaError] = useState('')
  const [hargaErrorStatus, setHargaErrorStatus] = useState(false)
  const [inputLokasi, setInputLokasi] = useState('')
  const [inputLokasiError, setInputLokasiError] = useState('')
  const [lokasiErrorStatus, setLokasiErrorStatus] = useState(false)
  const [inputLinkMaps, setInputLinkMaps] = useState('')
  const [inputLinkMapsError, setInputLinkMapsError] = useState('')
  const [linkMapsErrorStatus, setLinkMapsErrorStatus] = useState(false)

  const OnChangeInputDeskripsi = text => {
    setInputDeskripsi(text)
  }

  const OnChangeInputHarga = text => {
    setInputHarga(text)
  }

  const OnChangeInputLokasi = text => {
    setInputLokasi(text)
  }

  const OnChangeInputLinkMaps = text => {
    setInputLinkMaps(text)
  }

  const OnButtonClickSend = () => {
    if (
      inputDeskripsi.length === 0 ||
      inputHarga.length === 0 ||
      inputLokasi.length === 0 ||
      inputLinkMaps.length === 0
    ) {
      setInputDeskripsiError('Tidak boleh kosong')
      setInputHargaError('Tidak boleh kosong')
      setInputLokasiError('Tidak boleh kosong')
      setInputLinkMapsError('Tidak boleh kosong')
      setDeskripsiErrorStatus(true)
      setHargaErrorStatus(true)
      setLinkMapsErrorStatus(true)
      setLokasiErrorStatus(true)
    } else {
      setInputDeskripsiError('')
      setInputHargaError('')
      setInputLokasiError('')
      setInputLinkMapsError('')
      setDeskripsiErrorStatus(false)
      setHargaErrorStatus(false)
      setLinkMapsErrorStatus(false)
      setLokasiErrorStatus(false)
    }
  }

  return (
    <View style={styles.containerMain}>
      {/* HEADER */}
      <HeaderSecondary
        onPressBack={() => navigation.goBack()}
        sectionTitle='Tawaran Pekerjaan'
      />

      {/* CONTENTS */}
      <ScrollView style={styles.mainBody} showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'column', gap: 24}}>
          <InputFieldMain
            titleField='Deskripsi'
            placeholder='Deskripsi Pekerjaan..'
            isPhaseTwo={true}
            value={inputDeskripsi}
            onChangeText={OnChangeInputDeskripsi}
            errorMsg={inputDeskripsiError}
            showErrorMessage={deskripsiErrorStatus}
            isError={deskripsiErrorStatus}
          />
          <InputFieldMain
            titleField='Pengajuan Harga'
            placeholder='Masukkan harga..'
            value={inputHarga}
            keyboardType='numeric'
            onChangeText={OnChangeInputHarga}
            errorMsg={inputHargaError}
            showErrorMessage={hargaErrorStatus}
            isError={hargaErrorStatus}
          />
          <InputFieldMain
            titleField='Alamat Lokasi'
            placeholder='Masukkan Alamat..'
            value={inputLokasi}
            onChangeText={OnChangeInputLokasi}
            errorMsg={inputLinkMapsError}
            showErrorMessage={lokasiErrorStatus}
            isError={lokasiErrorStatus}
          />
          <InputFieldMain
            titleField='Link Gmaps'
            placeholder='Masukkan Link..'
            value={inputLinkMaps}
            onChangeText={OnChangeInputLinkMaps}
            errorMsg={inputLinkMapsError}
            showErrorMessage={lokasiErrorStatus}
            isError={lokasiErrorStatus}
          />
          <PhotoInput icon={<IcAddImg />} placeholder='Upload Photo' />
        </View>
      </ScrollView>

      {/* FOOTER */}
      <View>
        <ButtonMain text='Kirimkan Sekarang' onPress={OnButtonClickSend} />
      </View>
    </View>
  )
}

export default TawaranJobScreen
