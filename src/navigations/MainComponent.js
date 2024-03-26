import {View, Text} from 'react-native'
import React, {useEffect, useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import SplashScreen from 'react-native-splash-screen'
import {Color, FontSize, Fonts} from '../constants'
import {
  IcHome,
  IcHomeFilled,
  IcSave,
  IcSaveFilled,
  IcOrder,
  IcOrderFilled,
  IcProfile,
  IcProfileFilled,
} from '../assets/icons'

// Main Screens and Icons
import HomeScreen from '../screens/home'
import SimpanScreen from '../screens/simpan'
import OrderScreen from '../screens/order'
import ProfileScreen from '../screens/profile'

// Details Screen
import DetailTukang from '../screens/detailTukang'
import AsCraftman from '../screens/as-craftman'
import VerificationScreen from '../screens/verification'
import DetailProfileScreen from '../screens/detail-profile'
import NotificationScreen from '../screens/notification'
import PostJobScreen from '../screens/post-job'
import FormPostJob from '../screens/post-job/form-post-job'
import TransactionScreen from '../screens/transaction'
import DetailCategory from '../screens/detailCategory'
import ListJob from '../screens/listJob'
import ListTukang from '../screens/listTukang'
import AccountNumber from '../screens/account-number'
import DetailJob from '../screens/detailJob'
import SubmissionScreen from '../screens/submission'
import ApplyScreen from '../screens/apply'
import DetailJobUser from '../screens/detailJobUser'

// On BOarding Screen
import OnboardingScreen from '../screens/onboarding'
import RegisterScreen from '../screens/register'
import LoginScreen from '../screens/login'
import TawaranJobScreen from '../screens/tawaran-job'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {getUserProfile} from '../services/getUserProfile.domain'

// Screens Name
const homeName = 'Beranda'
const simpanName = 'Simpan'
const orderName = 'Order'
const profileName = 'Profil'

// Tab Navigator
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function Home() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let rn = route.name

          if (rn === homeName) {
            if (focused) {
              return <IcHomeFilled />
            } else {
              return <IcHome />
            }
          } else if (rn === simpanName) {
            if (focused) {
              return <IcSaveFilled />
            } else {
              return <IcSave />
            }
          } else if (rn === orderName) {
            if (focused) {
              return <IcOrderFilled />
            } else {
              return <IcOrder />
            }
          } else if (rn === profileName) {
            if (focused) {
              return <IcProfileFilled />
            } else {
              return <IcProfile />
            }
          }
        },
        tabBarLabelStyle: {
          fontSize: FontSize.dp_10,
          fontFamily: Fonts.SEMIBOLD,
        },
        tabBarStyle: {
          height: 65,
          paddingTop: 5,
          paddingBottom: 5,
          elevation: 3,
        },
      })}>
      <Tab.Screen
        name={homeName}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={simpanName}
        component={SimpanScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={orderName}
        component={OrderScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={profileName}
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  )
}

const MainComponent = ({navigation}) => {
  const [initialRoute, setInitialRoute] = useState('Login')
  const [isReady, setIsReady] = useState(false)
  const [userData, setUserData] = useState(null)
  const [modalVisibility, setModalVisibility] = useState(false)

  useEffect(() => {
    SplashScreen.hide()
  })

  // useEffect(() => {
  //   const checkLoggedIn = async () => {
  //     try {
  //       const refreshToken = await AsyncStorage.getItem('refreshToken')
  //       return !!refreshToken
  //     } catch (error) {
  //       console.error('Error checking login status:', error.message)
  //       return false
  //     }
  //   }

  //   // Determine the initial route based on login status
  //   const determineInitialRoute = async () => {
  //     const isLoggedIn = await checkLoggedIn()
  //     setInitialRoute(isLoggedIn ? 'Home' : 'Login')
  //     setIsReady(true)
  //   }

  //   determineInitialRoute()
  // }, [])

  // useEffect(() => {
  //   const fetchUserProfile = async () => {
  //     try {
  //       const profileData = await getUserProfile()
  //       setUserData(profileData)
  //       // Check verification status
  //       if (!profileData.statusValidate && initialRoute === 'ReportForm') {
  //         setModalVisibility(true)
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user profile:', error.message)
  //     }
  //   }

  //   fetchUserProfile()
  // }, [initialRoute])

  // if (!isReady) {
  //   return null
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        {/* Main Screens */}
        <Stack.Screen
          name='Onboarding'
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Register'
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Simpan'
          component={SimpanScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Order'
          component={OrderScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Profile'
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='DetailProfile'
          component={DetailProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='DetailTukang'
          component={DetailTukang}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='DetailCategory'
          component={DetailCategory}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='DetailJob'
          component={DetailJob}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='DetailJobUser'
          component={DetailJobUser}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='AsCraftman'
          component={AsCraftman}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Verification'
          component={VerificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Notification'
          component={NotificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='PostJob'
          component={PostJobScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='FormPostJob'
          component={FormPostJob}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Transaction'
          component={TransactionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='ListJob'
          component={ListJob}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='ListTukang'
          component={ListTukang}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='AccountNumber'
          component={AccountNumber}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Submission'
          component={SubmissionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Apply'
          component={ApplyScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='TawaranJob'
          component={TawaranJobScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainComponent
