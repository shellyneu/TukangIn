import {Text, TextInput, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import {IcLock, IcMailBox} from '../../assets/icons'
import {Color} from '../../constants'
import styles from './styles'
import {ButtonFour} from '../../components'

const LoginScreen = ({navigation}) => {
  const [emailInput, setEmailInput] = useState('')
  const [emailInputError, setEmailInputError] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordInputError, setPasswordInputError] = useState('')
  const [secure, setSecure] = useState(true)

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
        </View>
        <View style={styles.footer}>
          <ButtonFour
            text='Login'
            onPress={() => navigation.navigate('Home')}
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
