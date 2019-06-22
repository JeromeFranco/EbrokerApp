import React from 'react';
import { Text, View } from 'react-native';
import styles from './hello-world.style';

interface Props {
  name: string;
}

function HelloWorld(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world! {props.name}</Text>
    </View>
  );
}

export default HelloWorld;
