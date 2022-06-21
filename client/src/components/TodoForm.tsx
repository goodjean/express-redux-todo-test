import React, { useCallback, useState } from "react";
import { TodosType } from "../types";
import styled from "styled-components";

const TodoFormBox = styled.form`
  background-color: pink;
  padding: 20px 20px 20px 20px;
  text-align: center;

  input {
    box-sizing: content-box;
    width: 200px;
    height: 20px;
    background-color: #fff0f5;
    font-family: "Pangolin", sans-serif;
    border: 1px solid white;
    border-radius: 3px;
    padding-left: 5px;
    font-family: "Pangolin", sans-serif;
    &:hover {
      outline: none;
      border: 1px solid #aa1eaa;
    }
  }
  button {
    color: purple;
    margin-left: 10px;
    padding: 2px 3px 1px 3px;
    border-solid: 1px solid pink;
  }
`;

type TodoFormProps = {
  todos: TodosType[];
  add: (text: string) => void;
};

function TodoForm({ todos, add }: TodoFormProps) {
  const [todo, setTodo] = useState("");

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTodo(e.target.value);
    },
    [setTodo]
  );

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!todo) {
      return;
    }
    if (todos.length > 5) {
      return;
    }
    add(todo);
    setTodo("");
  };

  return (
    <TodoFormBox onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Insert to do"
        value={todo}
        onChange={onChange}
        maxLength={17}
      />
      <button>ADD</button>
    </TodoFormBox>
  );
}

export default TodoForm;
