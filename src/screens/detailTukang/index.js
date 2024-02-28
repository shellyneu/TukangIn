import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import {
  IcChevronLeft,
  IcCompassBlue,
  IcDropletsBlue,
  IcGridLayoutBlue,
  IcPalette,
  IcPaletteBlue,
} from '../../assets/icons'
import {
  ButtonMain,
  CardSkill,
  HeaderSecondary,
  LocationBox,
  NotificationIcon,
  RatingsBox,
  Rupiah,
  SkillSet,
  TestimonialCard,
} from '../../components'
import {Color, FontSize, Fonts} from '../../constants'
import {ImgJobOne, ImgProfileOne, ImgSkillOne} from '../../assets/images'
import PriceBox from '../../components/atomics/price-box'

const DetailTukang = props => {
  const {route, navigation} = props
  const {sectionTitle} = route.params

  const [isPhaseTwo, setIsPhaseTwo] = useState(true)
  const [typeScreen, setTypeScreen] = useState(0)

  const OnClickSkill = () => {
    setIsPhaseTwo(false)
    setTypeScreen(1)
    navigation.navigate('DetailTukang', {
      sectionTitle: 'Keahlian',
    })
  }

  const OnPressBack = () => {
    if (typeScreen === 1) {
      navigation.navigate('DetailTukang', {
        sectionTitle: 'Tukang',
      })
      setIsPhaseTwo(true)
    } else {
      navigation.goBack()
    }
  }

  const dataSkill = [
    {
      id: 1,
      icon: <IcCompassBlue />,
      title: 'Pasang',
      price: '150K - 500K',
    },
    {
      id: 2,
      icon: <IcDropletsBlue />,
      title: 'Saluran',
      price: '150K - 500K',
    },
    {
      id: 1,
      icon: <IcPaletteBlue />,
      title: 'Pengecatan',
      price: '150K - 500K',
    },
    {
      id: 1,
      icon: <IcGridLayoutBlue />,
      title: 'Listrik',
      price: '150K - 500K',
    },
  ]

  const RenderSkillItem = ({item, index}) => {
    return (
      <SkillSet
        iconSkill={item.icon}
        titleSkill={item.title}
        price={item.price}
        onPress={OnClickSkill}
      />
    )
  }

  const DetailTukang = () => {
    return (
      <View>
        {/* Header */}
        <View style={{alignItems: 'center'}}>
          <Image source={ImgProfileOne} style={styles.imageProfile(false)} />
          <View style={styles.identityBox}>
            <Text style={styles.name}>Andika Darojat</Text>
            <LocationBox
              isPhaseTwo={true}
              location='Karanglewas, Kec. Jatilawang'
            />
          </View>
        </View>

        {/* Skills */}
        <View style={{marginTop: 24, alignItems: 'center'}}>
          <FlatList
            data={dataSkill}
            keyExtractor={item => item.id}
            renderItem={RenderSkillItem}
            numColumns={numColumns}
          />
        </View>

        {/* Deskripsi */}
        <View style={{marginTop: 24}}>
          <Text style={styles.sectionText}>Deskripsi</Text>
          <Text style={styles.descText}>
            Dengan keahlian dalam konstruksi dan perbaikan, saya telah sukses
            menangani berbagai proyek, mulai dari pemasangan struktur, perbaikan
            pipa, hingga penyelesaian masalah listrik.
          </Text>
        </View>

        {/* Testimonial */}
        <View style={{marginTop: 24}}>
          <View style={styles.rowColumn}>
            <Text style={styles.sectionText}>Testimonial</Text>
            <RatingsBox rate={'4.8'} isPhaseTwo={true} />
          </View>
          <TestimonialCard
            imgProfile={ImgProfileOne}
            name='Muhammad Faizan'
            rate='4.6'
            dateReview='12 Februari 2024'
            reviewText='Tukang yang handal! Pekerjaan cepat dan rapi, sangat puas dengan hasilnya.'
          />
        </View>
      </View>
    )
  }

  const SkillSection = () => {
    return (
      <View>
        <View style={styles.headerSkill}>
          <Image source={ImgProfileOne} style={styles.imageProfile(true)} />
          <View>
            <Text style={styles.titleSkill}>Perbaikan Saluran Air</Text>
            <Text style={styles.priceText}>
              Mulai : {''}
              <Text style={styles.priceText}>200k - 1000k</Text>
            </Text>
          </View>
        </View>

        <View style={{marginTop: 24}}>
          <Text style={styles.sectionText}>Deskripsi</Text>
          <Text style={styles.descText}>
            Dengan keahlian dalam konstruksi dan perbaikan, saya telah sukses
            menangani berbagai proyek, mulai dari pemasangan struktur, perbaikan
            pipa, hingga penyelesaian masalah listrik.
          </Text>
        </View>

        <View style={{marginTop: 24}}>
          <Text style={styles.sectionText}>Pekerjaan Terkait</Text>
          <View style={{gap: 16}}>
            <CardSkill
              imgSource={ImgSkillOne}
              titleSkill='Perbaikan Saluran Air Sepanjang 25 Meter'
              price='1.520.000'
              rate='4.7'
            />
            <CardSkill
              imgSource={ImgSkillOne}
              titleSkill='Perbaikan Saluran Air Sepanjang 25 Meter'
              price='1.520.000'
              rate='4.7'
            />
          </View>
        </View>
      </View>
    )
  }

  const numColumns = 2

  return (
    <View style={styles.containerMain}>
      {/* HEADER */}
      <HeaderSecondary onPressBack={OnPressBack} sectionTitle={sectionTitle} />

      {/* CONTENTS */}
      <ScrollView style={styles.mainBody} showsVerticalScrollIndicator={false}>
        {isPhaseTwo ? <DetailTukang /> : <SkillSection />}
      </ScrollView>

      {/* BUTTONS */}
      <View style={styles.footer}>
        <ButtonMain
          text='Tawarkan Pekerjaan'
          onPress={() => navigation.navigate('TawaranJob')}
        />
      </View>
    </View>
  )
}

export default DetailTukang
