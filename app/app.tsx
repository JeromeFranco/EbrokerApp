import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import styles from './app.style';
import LaunchScreen from './containers/launch-screen';
import createStore from './state/create-store';
import TodoScreen from './containers/todo-screen';

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <LaunchScreen />
        {/* <TodoScreen /> */}
      </View>
    </Provider>
  );
}

export default App;
