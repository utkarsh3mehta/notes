import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import BodyText from './components/BodyText'

export default function App() {

  const fetchFonts = () => {
    return Font.loadAsync({
      'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
      'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
      'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'roboto-italic': require('./assets/fonts/Roboto-ThinItalic.ttf'),
    })
  }

  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  }

  return (
    <View style={styles.container}>
      <BodyText>Open up App.js to start working on your app!</BodyText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
