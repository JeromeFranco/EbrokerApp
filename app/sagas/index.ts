import { all, takeLatest } from 'redux-saga/effects';
import { todosActions } from '../state/todos';
import { fetchTodosSaga } from './todos-sagas';

function* rootSaga() {
  yield all([takeLatest(todosActions.fetchTodosRequest.toString(), fetchTodosSaga)]);
}

export default rootSaga;
