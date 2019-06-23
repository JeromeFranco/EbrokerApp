import { combineReducers } from 'redux';
import todosReducer from './todos';

export interface RootState {
  todos: ReturnType<typeof todosReducer>;
}

const rootReducer = combineReducers<RootState>({
  todos: todosReducer,
});

export default rootReducer;
