import React from "react";
import styled from "styled-components";
import Date from "../components/Date";
import { TodosType } from "../types";

const HeaderBox = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 22px;
  padding-left: 22px;

  h2 {
    margin: 0;
    font-size: 22px;
    text-align: center;
  }

  .rest-todo {
    margin-top: 10px;
    font-size: 14px;
    color: #3cfbff;
  }
`;

type HeaderProps = {
  todos: TodosType[];
};

function Header({ todos }: HeaderProps) {
  const todoLength = todos.length;
  const checkCount = todos.filter((todo) => todo.done === true);
  const restTodo = todoLength - checkCount.length;

  return (
    <HeaderBox>
      <h2>TodoList</h2>
      <Date />
      <div className="rest-todo">남은 할 일 ({restTodo}) ⭐️</div>
    </HeaderBox>
  );
}

export default Header;
