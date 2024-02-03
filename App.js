import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {ImgCraftmanOne} from './src/assets/images';
import {Fonts} from './src/constants';
import {IcPalette} from './src/assets/icons';

const App = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <Text style={{fontFamily: Fonts.BOLD}}>Halo</Text>
      <Image source={ImgCraftmanOne} />
      <IcPalette />
    </View>
  );
};

export default App;
