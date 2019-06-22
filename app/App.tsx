import React from 'react';
import { View } from 'react-native';
import styles from './app.style';
import LaunchScreen from './containers/launch-screen';

function App() {
  return (
    <View style={styles.container}>
      <LaunchScreen />
    </View>
  );
}

export default App;
