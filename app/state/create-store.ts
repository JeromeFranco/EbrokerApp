import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import rootReducer from './index';

export default function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
    preloadedState,
  });

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./index', () => store.replaceReducer(rootReducer));
  }

  return store;
}
