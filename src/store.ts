import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';

interface Todo {
  id: string;
  title: string;
  description: string;
  completionTime: string;
  priority: number;
  archived: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string[]>) => {
      state.todos = state.todos.filter(todo => !action.payload.includes(todo.id));
    },
    archiveTodo: (state, action: PayloadAction<string[]>) => {
      state.todos = state.todos.map(todo => {
        if (action.payload.includes(todo.id)) {
          return { ...todo, archived: true };
        }
        return todo;
      });
    },
    updatePriority: (state, action: PayloadAction<{ id: string; priority: number }>) => {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload.id ? { ...todo, priority: action.payload.priority } : todo
      );
    },
  },
});

const rootReducer = combineReducers({
  todos: todoSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export const { addTodo, deleteTodo, archiveTodo, updatePriority } = todoSlice.actions;
export { store, persistor };
