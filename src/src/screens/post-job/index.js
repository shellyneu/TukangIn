import {ScrollView, View, Text, FlatList} from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import {
  ButtonMain,
  CardJobPost,
  HeaderSecondary,
  SearchBar,
} from '../../components'
import {ImgPostJob} from '../../assets/images'
import {Color, FontSize, Fonts} from '../../constants'
import {IcNoneFiles} from '../../assets/icons'

const PostJobScreen = ({navigation}) => {
  const [isContentExist, setIsContentExist] = useState(true)

  const onPressNotif = () => {
    navigation.navigate('Notification', {sectionTitle: 'Notifikasi'})
  }

  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <HeaderSecondary
        onPressBack={() => navigation.goBack('Profile')}
        sectionTitle='Unggahan Pekerjaan'
        customStyle={{paddingHorizontal: 16}}
        onPressNotif={onPressNotif}
      />

      {/* CONTENTS */}
      <View style={styles.content}>
        <View>
          <SearchBar placeholder={'Cari pekerjaan...'} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <CardJobPost
              imgSource={ImgPostJob}
              jobTitle={'Perbaikan Genteng Terpercaya'}
              location={'Dukuhwaluh, Kec. Kembaran'}
              price={'750.000'}
              countSubmit={'30'}
              statusTitle={2}
            />
          </ScrollView>
        </View>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <ButtonMain
          text='Unggah Pekerjaan'
          onPress={() =>
            navigation.navigate('FormPostJob', {
              sectionTitle: 'Unggah Pekerjaan',
            })
          }
        />
      </View>
    </View>
  )
}

export default PostJobScreen
