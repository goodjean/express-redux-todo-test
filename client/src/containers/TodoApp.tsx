import React, { useCallback } from "react";
import Header from "./Header";
import TodoForm from "../components/TodoForm";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../app/store";
import { addTodo } from "../modules/todo";
import styled from "styled-components";

const TodoAppBox = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Pangolin&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Indie+Flower&family=Poor+Story&display=swap");
  font-family: "Pangolin", sans-serif;

  background-color: #ffc8cd;
  width: 400px;
  height: 520px;
  position: relative;
  border-radius: 16px;
  box-shadow: 0 0 8px #853c3c;

  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
`;

function TodoApp() {
  const todos = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();

  const add = useCallback(
    (text: string) => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );

  return (
    <TodoAppBox className="todoapp-container">
      <Header todos={todos} />
      <TodoForm todos={todos} add={add} />
      <TodoList todos={todos} />
    </TodoAppBox>
  );
}

export default TodoApp;
