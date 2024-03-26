import {View, Text} from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {ENDPOINT} from '../utils/endpoints'

const getUserJob = async () => {
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

export default getUserJob.domain
