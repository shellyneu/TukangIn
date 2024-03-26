import {View, Text, TouchableOpacity, Image} from 'react-native'
import React, {useState} from 'react'
import {
  ButtonMain,
  CardAccountNumber,
  HeaderSecondary,
  InputFieldMain,
  InputFieldSearch,
} from '../../components'
import styles from './styles'
import {IcCloseX, IcNoneRekening} from '../../assets/icons'
import {Color, FontSize, Fonts} from '../../constants'
import Modal from 'react-native-modal'

const AccountNumber = props => {
  const {route, navigation} = props
  const {sectionTitle} = route.params

  const [isContentExist, setIsContentExist] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const [inputBankName, setInputBankName] = useState('')
  const [inputBankError, setInputBankError] = useState('')
  const [inputBankStatus, setInputBankStatus] = useState(false)
  const [selectedBankName, setSelectedBankName] = useState('')

  const [inputBankNumber, setInputBankNumber] = useState('')
  const [inputBankNumberError, setInputBankNumberError] = useState('')
  const [inputBankNumberStatus, setInputBankNumberStatus] = useState(false)

  const bankValue = [
    {
      id: 1,
      name: 'Bank Central Asia',
    },
    {
      id: 2,
      name: 'Gopay',
    },
    {
      id: 3,
      name: 'OVO',
    },
  ]

  const onPressNotif = () => {
    navigation.navigate('Notification', {sectionTitle: 'Notifikasi'})
  }

  const filteredBankValue = bankValue.filter(bankValue =>
    bankValue.name.toLowerCase().includes(inputBankName.toLowerCase()),
  )

  const onPressListCategory = _value => {
    setSelectedBankName(_value)
    setIsDropdownOpen(false)
    if (inputBankName !== 0) {
      setInputBankStatus(false)
    }
  }

  const OnModalClose = () => {
    setIsModalVisible(false)
    setInputBankError('')
    setInputBankNumberError('')
    setInputBankStatus(false)
    setInputBankNumberStatus(false)
    setIsDropdownOpen(false)
    setSelectedBankName('')
    setInputBankNumber('')
  }

  const OnModalOpen = () => {
    setIsModalVisible(true)
  }

  const OnChangeBankName = text => {
    setInputBankName(text)
  }

  const OnChangeBankNumber = text => {
    setInputBankNumber(text)
  }

  const OnClickSend = () => {
    if (selectedBankName.length === 0 || inputBankNumber.length === 0) {
      setInputBankError('Tidak boleh kosong')
      setInputBankNumberError('Tidak boleh kosong')
      setInputBankStatus(true)
      setInputBankNumberStatus(true)
    } else {
      setInputBankError('')
      setInputBankNumberError('')
      setInputBankStatus(false)
      setInputBankNumberStatus(false)
    }

    console.log(selectedBankName, 'bankname')
    console.log(inputBankNumber, 'banknumber')
  }

  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <HeaderSecondary
        onPressBack={() => navigation.goBack()}
        sectionTitle={sectionTitle}
        customStyle={{paddingHorizontal: 16}}
        onPressNotif={onPressNotif}
      />

      {/* CONTENTS */}
      <View style={{paddingHorizontal: 16, flex: 1, marginTop: 20}}>
        {isContentExist ? (
          <CardAccountNumber
            bankName='Bank Central Asia'
            bankNumber='8299102783'
          />
        ) : (
          <View style={styles.containerNone}>
            <IcNoneRekening />
            <View style={styles.textNoneBox}>
              <Text style={styles.titleNone}>Rekening Belum Ada</Text>
              <Text style={styles.descNone}>
                Tambahkan rekening untuk memudahkan kami dalam mengirim
                pembayaran untuk anda{' '}
              </Text>
            </View>
          </View>
        )}
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <ButtonMain text='Tambah Rekening' onPress={OnModalOpen} />
      </View>

      <Modal
        isVisible={isModalVisible}
        style={styles.modalContainer}
        onBackdropPress={OnModalClose}
        avoidKeyboard
        useNativeDriver
        useNativeDriverForBackdrop
        hideModalContentWhileAnimating>
        <View style={styles.mainContainer}>
          {/* Title */}
          <View style={styles.titleContainer}>
            <Text style={styles.modalTitle}>Tambahkan Metode</Text>
            <TouchableOpacity onPress={OnModalClose}>
              <IcCloseX />
            </TouchableOpacity>
          </View>

          {/* Form */}
          <InputFieldSearch
            titleField='Jenis Pembayaran'
            placeholderInput='Pilih Jenis Pembayaran..'
            placeholderTouch='Pilih Jenis Pembayaran..'
            value={inputBankName}
            onChangeInput={OnChangeBankName}
            data={filteredBankValue}
            keyExtractor={item => item.id}
            isDropdownVisible={isDropdownOpen}
            selectedCategory={selectedBankName}
            onPressSelectItem={onPressListCategory}
            errorMsg={inputBankError}
            showErrorMessage={inputBankStatus}
            isError={inputBankStatus}
            onOpenDropdown={() => {
              setIsDropdownOpen(true)
              setInputBankError('')
            }}
            onCloseDropdown={() => {
              setIsDropdownOpen(false)
              setInputBankError('Tidak boleh kosong')
            }}
          />
          <InputFieldMain
            titleField='No Pembayaran'
            placeholder='Nomor rekening/sejenisnya'
            value={inputBankNumber}
            onChangeText={OnChangeBankNumber}
            errorMsg={inputBankNumberError}
            showErrorMessage={inputBankNumberStatus}
            isError={inputBankNumberStatus}
            keyboardType='numeric'
          />

          {/* Button */}
          <ButtonMain text='Tambahkan' onPress={OnClickSend} />
        </View>
      </Modal>
    </View>
  )
}

export default AccountNumber
