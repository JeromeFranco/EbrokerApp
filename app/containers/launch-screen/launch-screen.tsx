import React from 'react';
import { Text, View, Platform } from 'react-native';
import styles from './launch-screen.style';
import HelloWorld from '../../components/hello-world';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

interface Props {
  nothing?: undefined;
}

function LaunchScreen(props: Props) {
  return (
    <View style={styles.container}>
      <HelloWorld name="Ginnela" />
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>To get started, edit App.tsx</Text>
      <Text style={styles.instructions}>{instructions}</Text>
    </View>
  );
}

export default LaunchScreen;
