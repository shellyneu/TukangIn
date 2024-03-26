import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, {useEffect, useState} from 'react'
import {IcLock, IcMailBox} from '../../assets/icons'
import {Color} from '../../constants'
import styles from './styles'
import {ButtonFour} from '../../components'
import axios from 'axios'
import {ENDPOINT} from '../../utils/endpoints'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = ({navigation}) => {
  const [emailInput, setEmailInput] = useState('')
  const [emailInputError, setEmailInputError] = useState('')
  const [emailInputStatus, setEmailInputStatus] = useState(false)

  const [secure, setSecure] = useState(true)
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordInputError, setPasswordInputError] = useState('')
  const [passwordInputStatus, setPasswordInputStatus] = useState(false)

  const [disableSubmit, setDisableSubmit] = useState(true)
  const [loading, setLoading] = useState(false)

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

  const emailErrorStatus = emailInputError.length !== 0
  const passwordErrorStatus = passwordInputError.length !== 0

  const saveTokenToStorage = async refreshToken => {
    try {
      await AsyncStorage.setItem('refreshToken', refreshToken)
      console.log(refreshToken, 'rfr')
    } catch (error) {
      console.error('Error saving token to AsyncStorage:', refreshToken)
    }
  }

  const handleLogin = async () => {
    setLoading(true)
    try {
      const response = await axios.post(ENDPOINT.AUTH.LOGIN, {
        email: emailInput,
        password: passwordInput,
      })

      const {data, success, message, status} = response.data
      console.log(response.data, 'data')

      if (success) {
        if (data.accessToken) {
          saveTokenToStorage(data.refreshToken)
          navigation.navigate('Home')
        } else {
          console.log('Login failed:', message)
          Alert.alert('Login Failed', message)
        }
      }
    } catch (error) {
      console.error('Login error:', error.message)

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        const errorMessageFromAPI = error.response.data.message
        // console.log('Error message from API:', errorMessageFromAPI)

        Alert.alert('Login Gagal', errorMessageFromAPI)
      } else {
        Alert.alert('Error', 'An unexpected error occurred. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleDisabledSubmit = () => {
    const isEmailValid = emailInput.length !== 0
    const isPasswordValid = passwordInput.length !== 0

    setDisableSubmit(!(isEmailValid && isPasswordValid))
  }

  useEffect(() => {
    handleDisabledSubmit()
  }, [emailInput, passwordInput])

  return (
    <View style={styles.mainBody}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Selamat Datang</Text>
        <Text style={styles.desc}>
          Segera masuk untuk menikmati layanan terbaik yang kami berikan
        </Text>
      </View>
      <View style={styles.content}>
        <View>
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
        </View>
        <View style={styles.footer}>
          <ButtonFour
            disabled={disableSubmit}
            isDisabled={disableSubmit}
            text={
              loading ? (
                <ActivityIndicator size='large' color='#FFFFFF' />
              ) : (
                'Login'
              )
            }
            onPress={handleLogin}
          />
          <View style={styles.validationAccount}>
            <Text style={styles.textNavigate(false)}>Belum punya akun? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.textNavigate(true)}>Daftar </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen
