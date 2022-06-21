import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodosType } from "../types";

const initialState: TodosType[] = [];

let index = 0;

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => [
      ...state,
      { text: action.payload, id: index++, done: false },
    ],
    changeTodo: (
      state,
      { payload }: PayloadAction<{ id: number; newTodo: string }>
    ) => {
      const { id, newTodo } = payload;
      return [
        ...state.map((todo) =>
          todo.id === id ? { ...todo, text: newTodo } : todo
        ),
      ];
    },
    deleteTodo: (state, action: PayloadAction<number>) => [
      ...state.filter((todo) => todo.id !== action.payload),
    ],
    completeTodo: (state, action: PayloadAction<number>) => [
      ...state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      ),
    ],
  },
});

export const { addTodo, changeTodo, deleteTodo, completeTodo } = todos.actions;
export default todos.reducer;
