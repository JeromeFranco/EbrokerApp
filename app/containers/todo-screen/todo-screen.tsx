import React, { useEffect } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import styles from './todo-screen.style';
import { TodoScreenConnectProps } from '.';

export type TodoScreenProps = TodoScreenConnectProps;

function TodoScreen({ todos, addTodo, removeTodo, fetchTodos }: TodoScreenProps) {
  const handleAdd = () => addTodo('New todo');
  const handleRemove = (id: number) => () => removeTodo(id);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {todos.map(({ id, title, completed }) => (
          <Text key={id}>
            Id: {id} | Title: {title} | Completed: {completed.toString()} |{' '}
            <Text onPress={handleRemove(id)}>Delete</Text>
          </Text>
        ))}
      </ScrollView>
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}

export default TodoScreen;
