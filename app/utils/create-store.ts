import { configureStore, getDefaultMiddleware, Reducer } from 'redux-starter-kit';
import createSagaMiddleware, { Saga } from 'redux-saga';

export default function createStore(rootReducer: Reducer, rootSaga: Saga, preloadedState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
    preloadedState,
  });

  sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./index', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
