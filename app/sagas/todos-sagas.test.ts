import Axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { fetchTodosSaga } from './todos-sagas';
import { todosActions, Todo } from '../state/todos';

it('should handle fetch todos flow', () => {
  const generator = fetchTodosSaga();
  expect(generator.next().value).toEqual(call(Axios.get, 'https://jsonplaceholder.typicode.com/todos'));

  const result: { data: Todo[] } = { data: [{ id: 1, title: 'test', completed: false }] };
  expect(generator.next(result).value).toEqual(put(todosActions.fetchTodoSuccess(result.data)));

  if (generator.throw) {
    expect(generator.throw().value).toEqual(put(todosActions.fetchTodoFail(new Error('Fail'))));
  }
});
