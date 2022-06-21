import React, { useCallback } from "react";
import { useAppDispatch } from "../app/store";
import TodoListItem from "../components/TodoListItem";
import { TodosType } from "../types";
import { changeTodo, deleteTodo, completeTodo } from "../modules/todo";
import styled from "styled-components";

const TodoListBox = styled.div`
  margin: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  position: relative;

  .none-todo {
    color: #800080;
    text-align: center;
  }
`;

// const

type TodoListProps = {
  todos: TodosType[];
};

function TodoList({ todos }: TodoListProps) {
  const dispatch = useAppDispatch();

  const change = useCallback(
    (id: number, newTodo: string) => {
      dispatch(changeTodo({ id, newTodo }));
    },
    [dispatch]
  );

  const remove = useCallback(
    (id: number) => {
      dispatch(deleteTodo(id));
    },
    [dispatch]
  );

  const complete = useCallback(
    (id: number) => {
      dispatch(completeTodo(id));
    },
    [dispatch]
  );

  return (
    <TodoListBox>
      {todos.length > 0 ? (
        <div>
          {todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              change={change}
              remove={remove}
              complete={complete}
            />
          ))}
        </div>
      ) : (
        <div className="none-todo">
          <br /> -- 할 일 없음 --
        </div>
      )}
    </TodoListBox>
  );
}

export default TodoList;
