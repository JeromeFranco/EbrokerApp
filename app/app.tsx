import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import styles from './app.style';
import LaunchScreen from './containers/launch-screen';
import TodoScreen from './containers/todo-screen';
import createStore from './utils/create-store';
import rootReducer from './state';
import rootSaga from './sagas';


const store = createStore(rootReducer, rootSaga);

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
