import React from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

const logo = require('../assets/img/logo_sindpd.png');

const Banner = () => (
<View style={styles.container}>
    <Image
        style={styles.logo}
        source={logo}
    />
</View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECEFF1',
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default Banner;
