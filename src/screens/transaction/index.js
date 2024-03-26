import {View, Text, ScrollView, Image} from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import {
  ButtonMain,
  CardBank,
  DetailTransaction,
  HeaderSecondary,
  PhotoInput,
} from '../../components'
import {Color, FontSize, Fonts} from '../../constants'
import {IcAddFiles, IcBCA, IcGopay, IcOVO} from '../../assets/icons'
import {launchImageLibrary} from 'react-native-image-picker'

const TransactionScreen = props => {
  const {route, navigation} = props
  // const {sectionTitle} = route.params

  const [selectedImage, setSelectedImage] = useState(null)
  const [imageName, setImageName] = useState(null)

  const prosesList = [
    {
      id: 1,
      number: 1,
      desc: 'Lihat total pembayaran yang harus dibayar',
    },
    {
      id: 2,
      number: 2,
      desc: 'Transfer ke alamat yang sudah ditentukan',
    },
    {
      id: 3,
      number: 3,
      desc: 'Konfirmasi dengan kirim ID transaksi & bukti',
    },
  ]

  const bankList = [
    {
      id: 1,
      bankIcon: <IcBCA />,
      bankName: 'Bank Central Asia',
      bankNumber: '8299102783',
    },
    {
      id: 2,
      bankIcon: <IcGopay />,
      bankName: 'Gopay',
      bankNumber: '0892-3902-3428',
    },
    {
      id: 3,
      bankIcon: <IcOVO />,
      bankName: 'OVO',
      bankNumber: '0892-3902-3428',
    },
  ]

  const onPressNotif = () => {
    navigation.navigate('Notification', {sectionTitle: 'Notifikasi'})
  }

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    }

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('Image picker error: ', response.error)
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri
        setSelectedImage(imageUri)
        setImageName(response.fileName || 'Image') // Menggunakan nama file jika tersedia, jika tidak, gunakan 'Image'
      }
    })
  }

  return (
    <View style={styles.mainBody}>
      {/* HEADER */}
      <HeaderSecondary
        onPressBack={() => navigation.goBack()}
        sectionTitle='Transaksi'
        customStyle={{paddingHorizontal: 16}}
        onPressNotif={onPressNotif}
      />

      {/* CONTENTS */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* ID */}
          <View style={styles.containerID}>
            <Text style={styles.idTextStyle(false, false)}>ID Transaksi</Text>
            <Text style={styles.idTextStyle(true, false)}>123456</Text>
          </View>

          {/* Proses Transaksi */}
          <View style={styles.container}>
            <Text style={styles.idTextStyle(true, false)}>
              Proses Transaksi
            </Text>
            {prosesList.map(item => {
              return (
                <View style={styles.listBox}>
                  <View style={styles.numberBox}>
                    <Text style={styles.number}>{item.id}</Text>
                  </View>
                  <Text style={styles.desc(false)}>{item.desc}</Text>
                </View>
              )
            })}
          </View>

          {/* Detail Pembayaran */}
          <View style={styles.container}>
            <Text style={styles.idTextStyle(true, false)}>
              Detail Pembayaran
            </Text>
            <View style={styles.row(false)}>
              <Text style={styles.desc(true)}>Biaya Tukang</Text>
              <Text style={styles.idTextStyle(true, true)}>Rp 750.000</Text>
            </View>
            <View style={styles.row(false)}>
              <Text style={styles.desc(true)}>Biaya Admin</Text>
              <Text style={styles.idTextStyle(true, true)}>Rp 2.500</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.row(false)}>
              <Text style={styles.desc(true, true)}>Total Biaya</Text>
              <Text style={styles.idTextStyle(true, true)}>Rp 757.500</Text>
            </View>
          </View>

          {/* Alamat Transaksi */}
          <View style={styles.container}>
            <Text style={styles.idTextStyle(true, false)}>
              Alamat Transaksi
            </Text>
            {bankList.map(item => {
              return (
                <CardBank
                  bankIcon={item.bankIcon}
                  bankName={item.bankName}
                  bankNumber={item.bankNumber}
                />
              )
            })}
          </View>

          {/* Bukti Pembayaran */}
          <View>
            <PhotoInput
              showTitle={true}
              titleField='Bukti Pembayaran'
              icon={<IcAddFiles />}
              title='Upload File'
              onPress={openImagePicker}
            />
            {selectedImage && (
              <Image source={{uri: selectedImage}} style={styles.previewImg} />
            )}
          </View>
        </View>
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <ButtonMain text='Kirim Bukti' />
      </View>
    </View>
  )
}

export default TransactionScreen
