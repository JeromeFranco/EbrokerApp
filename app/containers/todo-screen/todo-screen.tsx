import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './todo-screen.style';
import { TodoScreenConnectProps } from '.';

export type TodoScreenProps = TodoScreenConnectProps;

function TodoScreen({ todos, addTodo, removeTodo }: TodoScreenProps) {
  const handleAdd = () => addTodo('New todo');
  const handleRemove = (id: number) => () => removeTodo(id);

  return (
    <View style={styles.container}>
      <View>
        {todos.map(({ id, title, completed }) => (
          <Text key={id}>
            Id: {id} | Title: {title} | Completed: {completed.toString()} |{' '}
            <Text onPress={handleRemove(id)}>Delete</Text>
          </Text>
        ))}
      </View>
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}

export default TodoScreen;
