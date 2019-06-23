import { put, call } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { Todo, todosActions } from '../state/todos';
import { RequestResult } from '../utils/interfaces/request-result';

export function* fetchTodosSaga() {
  try {
    const result: AxiosResponse<Todo[]> = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos');
    yield put(todosActions.fetchTodoSuccess(result.data));
  } catch (error) {
    yield put(todosActions.fetchTodoFail(new Error('Fail')));
  }
}
