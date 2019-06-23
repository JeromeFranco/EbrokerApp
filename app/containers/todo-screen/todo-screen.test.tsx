import 'react-native';
import React from 'react';
import TodoScreen from './todo-screen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Todo } from '../../store/todos';

it('TodoScreen renders correctly', () => {
  const mockTodos: Todo[] = [{ id: 1, title: 'X', completed: false }];
  renderer.create(<TodoScreen todos={mockTodos} addTodo={jest.fn()} removeTodo={jest.fn()} />);
});
