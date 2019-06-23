import { todosActions, todosReducer, TodosState, initialState } from './todos';

it('should add todo', () => {
  const todo = { completed: false, id: 2, title: 'new todo' };
  const expected: TodosState = { items: [...initialState.items, todo] };
  expect(todosReducer(undefined, todosActions.addTodo(todo.title))).toEqual(expected);
});

it('should remove todo', () => {
  const expected: TodosState = { items: initialState.items.filter(item => item.id !== 1) };
  expect(todosReducer(undefined, todosActions.removeTodo(1))).toEqual(expected);
});

it('should set to complete a todo', () => {
  expect(todosReducer(undefined, todosActions.setToCompleted(1)).items.find(item => item.id === 1)).toHaveProperty(
    'completed',
    true,
  );
});
