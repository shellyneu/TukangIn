import {Text, TextInput, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import {IcChevronLeft, IcLock, IcMailBox} from '../../assets/icons'
import {Color} from '../../constants'
import styles from './styles'
import {ButtonFour, ButtonMain} from '../../components'

const RegisterScreen = ({navigation}) => {
  const [emailInput, setEmailInput] = useState('')
  const [emailInputError, setEmailInputError] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordInputError, setPasswordInputError] = useState('')
  const [secure, setSecure] = useState(true)
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('')
  const [confirmPasswordInputError, setConfirmPasswordInputError] = useState('')

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

  const emailErrorStatus = emailInputError.length !== 0
  const passwordErrorStatus = passwordInputError.length !== 0
  const confirmPasswordErrorStatus = confirmPasswordInputError.length !== 0

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
          <View>
            <View style={styles.inputContainer(emailErrorStatus)}>
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
            {emailErrorStatus && (
              <Text style={styles.inputError}>{emailInputError}</Text>
            )}
          </View>
          <View>
            <View style={styles.inputContainer(passwordErrorStatus)}>
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
            {passwordErrorStatus && (
              <Text style={styles.inputError}>{passwordInputError}</Text>
            )}
          </View>
          <View>
            <View style={styles.inputContainer(confirmPasswordErrorStatus)}>
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
            {confirmPasswordErrorStatus && (
              <Text style={styles.inputError}>{confirmPasswordInputError}</Text>
            )}
          </View>
        </View>
        <View style={styles.footer}>
          <ButtonFour text='Daftar' onPress={() => {}} />
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
