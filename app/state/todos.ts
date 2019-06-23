import { createSlice, PayloadAction } from 'redux-starter-kit';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodosState {
  items: Todo[];
  isFetching: boolean;
  error: string | null;
}

export const initialState: TodosState = {
  items: [{ id: 1, title: 'sample', completed: false }],
  isFetching: false,
  error: null,
};

export const { actions: todosActions, reducer: todosReducer } = createSlice({
  slice: 'Todos',
  initialState,
  reducers: {
    fetchTodosRequest(state: TodosState) {
      state.isFetching = true;
    },
    fetchTodoSuccess(state: TodosState, { payload }: PayloadAction<Todo[]>) {
      state.items = payload;
      state.isFetching = false;
    },
    fetchTodoFail(state: TodosState, { payload }: PayloadAction<Error>) {
      state.error = payload.message;
      state.isFetching = false;
    },
    addTodo(state: TodosState, { payload }: PayloadAction<string>) {
      state.items.push({ id: state.items.length + 1, title: payload, completed: false });
    },
    removeTodo(state: TodosState, { payload }: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== payload);
    },
    setToCompleted(state: TodosState, { payload }: PayloadAction<number>) {
      const todo = state.items.find(item => item.id === payload);
      if (todo) {
        todo.completed = true;
      }
    },
  },
});

export default todosReducer;
