import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, {useEffect, useState} from 'react'
import {
  IcChevronLeft,
  IcLock,
  IcMailBox,
  IcPhoneComing,
  IcUserLogin,
} from '../../assets/icons'
import {Color} from '../../constants'
import styles from './styles'
import {ButtonFour, ButtonMain} from '../../components'
import axios from 'axios'
import {ENDPOINT} from '../../utils/endpoints'

const RegisterScreen = ({navigation}) => {
  const [nameInput, setNameInput] = useState('')
  const [nameInputError, setNameInputError] = useState('')
  const [nameInputStatus, setNameInputStatus] = useState(false)

  const [phoneInput, setPhoneInput] = useState('')
  const [phoneInputError, setPhoneInputError] = useState('')
  const [phoneInputStatus, setPhoneInputStatus] = useState(false)

  const [emailInput, setEmailInput] = useState('')
  const [emailInputError, setEmailInputError] = useState('')
  const [emailInputStatus, setEmailInputStatus] = useState(false)

  const [secure, setSecure] = useState(true)
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordInputError, setPasswordInputError] = useState('')
  const [passwordInputStatus, setPasswordInputStatus] = useState(false)

  const [confirmPasswordInput, setConfirmPasswordInput] = useState('')
  const [confirmPasswordInputError, setConfirmPasswordInputError] = useState('')
  const [confirmPassInputStatus, setConfirmPassInputStatus] = useState(false)

  const [disableSubmit, setDisableSubmit] = useState(true)
  const [loading, setLoading] = useState(false)

  const onChangeNameInput = text => {
    setNameInput(text)
    if (text.length === 70) {
      setNameInputError('Email terlalu panjang')
    } else {
      setNameInputError('')
    }
  }

  const onChangePhoneInput = text => {
    setPhoneInput(text)
    if (text.length === 70) {
      setPhoneInputError('Email terlalu panjang')
    } else {
      setPhoneInputError('')
    }
  }

  const onChangeEmailInput = text => {
    setEmailInput(text)
    if (text.length === 70) {
      setEmailInputError('Email terlalu panjang')
    } else {
      setEmailInputError('')
    }
  }

  const onChangePasswordInput = text => {
    setPasswordInput(text)
    if (text.length === 70) {
      setPasswordInputError('Password terlalu panjang')
    } else {
      setPasswordInputError('')
    }
  }

  const onChangeConfirmPasswordInput = text => {
    setConfirmPasswordInput(text)
    if (text.length === 70) {
      setConfirmPasswordInputError('Password terlalu panjang')
    } else if (
      text !== passwordInput &&
      passwordInput.length !== 0 &&
      text.length !== 0
    ) {
      setConfirmPasswordInputError('Password tidak sesuai')
    } else if (text.length === 0) {
      setConfirmPasswordInputError('')
    }
  }

  const nameErrorStatus = nameInputError.length !== 0
  const phoneErrorStatus = phoneInputError.length !== 0
  const emailErrorStatus = emailInputError.length !== 0
  const passwordErrorStatus = passwordInputError.length !== 0
  const confirmPasswordErrorStatus = confirmPasswordInputError.length !== 0

  const onClickRegister = () => {
    if (
      nameInput.length === 0 ||
      phoneInput.length === 0 ||
      emailInput.length === 0 ||
      passwordInput.length === 0 ||
      confirmPasswordInput.length === 0
    ) {
      setNameInputStatus(true)
      setPhoneInputStatus(true)
      setEmailInputStatus(true)
      setPasswordInputStatus(true)
      setConfirmPassInputStatus(true)
      setNameInputError('Tidak boleh kosong')
      setPhoneInputError('Tidak boleh kosong')
      setEmailInputError('Tidak boleh kosong')
      setPasswordInputError('Tidak boleh kosong')
      setConfirmPasswordInputError('Tidak boleh kosong')
    } else {
      setNameInputStatus(false)
      setPhoneInputStatus(false)
      setEmailInputStatus(false)
      setPasswordInputStatus(false)
      setConfirmPassInputStatus(false)
      setNameInputError('')
      setPhoneInputError('')
      setEmailInputError('')
      setPasswordInputError('')
      setConfirmPasswordInputError('')
    }
    handleRegister
  }

  const handleDisabledSubmit = () => {
    const isFormValid =
      nameInput.length !== 0 &&
      phoneInput.length !== 0 &&
      emailInput.length !== 0 &&
      passwordInput.length &&
      confirmPasswordInput.length !== 0

    setDisableSubmit(!isFormValid)
  }

  const handleRegister = async () => {
    setLoading(true)
    try {
      const response = await axios.post(ENDPOINT.AUTH.REGISTER, {
        nama: nameInput,
        noHP: phoneInput,
        email: emailInput,
        password: passwordInput,
        confirmPassword: confirmPasswordInput,
      })

      const {data, success, message, status} = response.data

      if (success) {
        Alert.alert('Register Berhasil', message)
        navigation.replace('Login')
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        const errorMessageFromAPI = error.response.data.message

        Alert.alert('Register Gagal', 'Pastikan semua kolom sudah terisi!')
      } else {
        Alert.alert('Error', 'An unexpected error occurred. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleDisabledSubmit()
  }, [nameInput, phoneInput, passwordInput, emailInput, confirmPasswordInput])

  return (
    <View style={styles.mainBody}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Daftar Akun</Text>
        <Text style={styles.desc}>
          Jika anda belum memiliki akun, daftar akun-mu sekarang juga
        </Text>
      </View>
      <View style={styles.content}>
        <View>
          {/* Nama Pengguna */}
          <View>
            <View style={styles.inputContainer(nameInputStatus)}>
              <View style={styles.iconContainer(nameInput.length)}>
                <IcUserLogin />
              </View>
              <TextInput
                disableFullscreenUI
                placeholder='Nama Pengguna'
                placeholderTextColor={Color.GREYONE}
                value={nameInput}
                onChangeText={onChangeNameInput}
                style={styles.input(nameInput.length)}
                maxLength={70}
              />
            </View>
            {nameInputError ? (
              <Text style={styles.inputError}>{nameInputError}</Text>
            ) : null}
          </View>

          {/* Telepon */}
          <View>
            <View style={styles.inputContainer(phoneInputStatus)}>
              <View style={styles.iconContainer(phoneInput.length)}>
                <IcPhoneComing />
              </View>
              <TextInput
                disableFullscreenUI
                placeholder='Nomor Telepon'
                placeholderTextColor={Color.GREYONE}
                value={phoneInput}
                keyboardType='numeric'
                onChangeText={onChangePhoneInput}
                style={styles.input(phoneInput.length)}
                maxLength={70}
              />
            </View>
            {phoneInputStatus ? (
              <Text style={styles.inputError}>{phoneInputError}</Text>
            ) : null}
          </View>

          {/* Email */}
          <View>
            <View style={styles.inputContainer(emailInputStatus)}>
              <View style={styles.iconContainer(emailInput.length)}>
                <IcMailBox />
              </View>
              <TextInput
                disableFullscreenUI
                inputMode='email'
                keyboardType='email-address'
                placeholder='Masukan Email'
                placeholderTextColor={Color.GREYONE}
                value={emailInput}
                onChangeText={onChangeEmailInput}
                style={styles.input(emailInput.length)}
                maxLength={70}
              />
            </View>
            {emailInputStatus ? (
              <Text style={styles.inputError}>{emailInputError}</Text>
            ) : null}
          </View>

          {/* Password */}
          <View>
            <View style={styles.inputContainer(passwordInputStatus)}>
              <View style={styles.iconContainer(passwordInput.length)}>
                <IcLock />
              </View>
              <TextInput
                disableFullscreenUI
                inputMode='text'
                keyboardType='visible-password'
                placeholder='Masukan Password'
                placeholderTextColor={Color.GREYONE}
                value={passwordInput}
                onChangeText={onChangePasswordInput}
                style={styles.input(passwordInput.length)}
                maxLength={70}
                secureTextEntry={secure}
              />
            </View>
            {passwordInputStatus ? (
              <Text style={styles.inputError}>{passwordInputError}</Text>
            ) : null}
          </View>

          {/* Confirm Password */}
          <View>
            <View style={styles.inputContainer(confirmPassInputStatus)}>
              <View style={styles.iconContainer(confirmPasswordInput.length)}>
                <IcLock />
              </View>
              <TextInput
                disableFullscreenUI
                inputMode='text'
                keyboardType='visible-password'
                placeholder='Konfirmasi Password'
                placeholderTextColor={Color.GREYONE}
                value={confirmPasswordInput}
                onChangeText={onChangeConfirmPasswordInput}
                style={styles.input(confirmPasswordInput.length)}
                maxLength={70}
                secureTextEntry={secure}
              />
            </View>
            {confirmPassInputStatus ? (
              <Text style={styles.inputError}>{confirmPasswordInputError}</Text>
            ) : null}
          </View>
        </View>
        <View style={styles.footer}>
          <ButtonFour
            disabled={disableSubmit}
            isDisabled={disableSubmit}
            text={
              loading ? (
                <ActivityIndicator size='large' color='#FFFFFF' />
              ) : (
                'Register'
              )
            }
            onPress={handleRegister}
          />
          <View style={styles.validationAccount}>
            <Text style={styles.textNavigate(false)}>Sudah punya akun? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.textNavigate(true)}>Masuk </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default RegisterScreen
