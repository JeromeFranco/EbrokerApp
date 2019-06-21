import React from 'react';
import { View } from 'react-native';
import styles from './App.style';
import LaunchScreen from './containers/LaunchScreen';

interface Props {}

function App(props: Props) {
  return (
    <View style={styles.container}>
      <LaunchScreen />
    </View>
  );
}

export default App;
