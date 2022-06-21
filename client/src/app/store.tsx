import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import reducer from "../modules/todo";

const store = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
