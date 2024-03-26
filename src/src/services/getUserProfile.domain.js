import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {ENDPOINT} from '../utils/endpoints'

export const getUserProfile = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem('refreshToken')

    const response = await axios.get(ENDPOINT.PROFILE.USER, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    })

    return response.data.data
    console.log(response.data.data)
  } catch (error) {
    console.log(error)
  }
}
