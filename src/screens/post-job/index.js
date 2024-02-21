import {View} from 'react-native'
import React from 'react'
import styles from './styles'
import {
  ButtonMain,
  CardJobPost,
  HeaderSecondary,
  SearchBar,
} from '../../components'
import {ImgPostJob} from '../../assets/images'
import {Color} from '../../constants'

const PostJobScreen = ({navigation}) => {
  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <HeaderSecondary
        onPressBack={() => navigation.goBack('Profile')}
        sectionTitle='Unggahan Pekerjaan'
      />

      <SearchBar style={{paddingTop: 20}} placeholder={'Cari pekerjaan...'} />

      <CardJobPost
        imgSource={ImgPostJob}
        jobTitle={'Perbaikan Genteng Terpercaya'}
        location={'Dukuhwaluh, Kec. Kembaran'}
        price={'750.000'}
        countSubmit={'30'}
        statusTitle={'rekrut'}
      />

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <ButtonMain text={'Unggah Pekerjaan'} />
      </View>
    </View>
  )
}

export default PostJobScreen
