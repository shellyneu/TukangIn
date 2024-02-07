import {View, Text} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import {Color, FontSize, Fonts} from '../constants'

// Main Screens and Icons
import HomeScreen from '../screens/home'
import SimpanScreen from '../screens/simpan'
import OrderScreen from '../screens/order'
import ProfileScreen from '../screens/profile'
import DetailProfileScreen from '../screens/detail-profile'
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
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        {/* Main Screens */}
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainComponent
