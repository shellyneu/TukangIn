import {ScrollView, View} from 'react-native'
import React from 'react'
import styles from './styles'
import {
  ButtonMain,
  CardJobPost,
  HeaderSecondary,
  SearchBar,
} from '../../components'
import {ImgPostJob} from '../../assets/images'

const PostJobScreen = ({navigation}) => {
  return (
    <View style={styles.mainBody}>
      <ScrollView>
        <View style={{paddingHorizontal: 16}}>
          {/* HEADER */}
          <HeaderSecondary
            onPressBack={() => navigation.goBack('Profile')}
            sectionTitle='Unggahan Pekerjaan'
          />

          <SearchBar
            style={{paddingTop: 20}}
            placeholder={'Cari pekerjaan...'}
          />

          <CardJobPost
            imgSource={ImgPostJob}
            jobTitle={'Perbaikan Genteng Terpercaya'}
            location={'Dukuhwaluh, Kec. Kembaran'}
            price={'750.000'}
            countSubmit={'30'}
            statusTitle={'rekrut'}
          />
        </View>
      </ScrollView>
      <ButtonMain text={'Unggah Pekerjaan'} />
    </View>
  )
}

export default PostJobScreen
