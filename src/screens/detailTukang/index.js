import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native'
import React from 'react'
import styles from './styles'
import {IcChevronLeft, IcCompassBlue, IcDropletsBlue} from '../../assets/icons'
import {
  HeaderSecondary,
  LocationBox,
  NotificationIcon,
  Rupiah,
  SkillSet,
} from '../../components'
import {Color, FontSize, Fonts} from '../../constants'
import {ImgProfileOne} from '../../assets/images'
import PriceBox from '../../components/atomics/price-box'

const DetailTukang = ({navigation}) => {
  return (
    <View style={styles.containerMain}>
      {/* HEADER */}
      <HeaderSecondary
        onPressBack={() => navigation.goBack()}
        sectionTitle='Tukang'
      />

      {/* CONTENTS */}
      <ScrollView style={styles.mainBody} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={{alignItems: 'center', marginBottom: 24}}>
          <Image source={ImgProfileOne} style={styles.imgProfile} />
          <View style={styles.identityBox}>
            <Text style={styles.name}>Andika Darojat</Text>
            <LocationBox
              isPhaseTwo={true}
              location='Karanglewas, Kec. Jatilawang'
            />
          </View>
        </View>

        {/* Skills */}
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <SkillSet
            iconSkill={<IcCompassBlue />}
            titleSkill='Pasang'
            price='150K - 500K'
          />
          <SkillSet
            iconSkill={<IcDropletsBlue />}
            titleSkill='Saluran'
            price='200k-1000K'
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default DetailTukang
