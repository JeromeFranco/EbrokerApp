import { connect } from 'react-redux';
import TodoScreen from './todo-screen';
import { RootState } from '../../state';
import { todosActions } from '../../state/todos';

const mapStateToProps = (state: RootState) => ({
  todos: state.todos.items,
});

const dispatchProps = {
  addTodo: todosActions.addTodo,
  removeTodo: todosActions.removeTodo,
};

export type TodoScreenConnectProps = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

export default connect(
  mapStateToProps,
  dispatchProps,
)(TodoScreen);
