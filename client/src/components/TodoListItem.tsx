import React, { useState } from "react";
import { TodosType } from "../types";
import CheckBox from "./CheckBox";
import styled from "styled-components";

const TodoItemBox = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffdfdc;
  margin-right: 80px;
  margin-left: 20px;
  margin-bottom: 17px;
  margin-top: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 6px;
  padding-right: 6px;
  border-radius: 4px;
  font-size: 15px;

  input {
    width: 248px;
    height: 22px;
    border: 1px solid white;
    border-radius: 3px;
    &:focus {
      outline: none;
      border-color: #aa1eaa;
    }
  }

  .edit-delete-wrapper {
    display: flex;
    flex-direction: row;
  }

  .edit-btns-wrapper {
    display: flex;
    flex-direction: row;
  }
`;

const EditBtnBox = styled.div`
  position: absolute;
  right: 40px;
  font-size: 14px;
  padding-top: 3px;
  padding-left: 2px;
  padding-right: 2px;
  background-color: #fabebe;
  border-radius: 1px;
  box-shadow: 0 0 4px #853c3c;
  &:hover {
    color: green;
  }
`;

const DeleteBtnBox = styled.div`
  position: absolute;
  right: 5px;
  font-size: 14px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 3px;
  background-color: #fabebe;
  box-shadow: 0 0 4px #853c3c;
  &:hover {
    color: tomato;
  }
`;

const EditConfirmBtnBox = styled.div`
  position: absolute;
  right: 46px;
  color: green;
  font-size: 14px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 3px;
  background-color: #fabebe;
  box-shadow: 0 0 4px #853c3c;
`;

const EditCancelBtnBox = styled.div`
  position: absolute;
  right: 11px;
  font-size: 14px;
  color: tomato;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 3px;
  background-color: #fabebe;
  box-shadow: 0 0 4px #853c3c;
`;

type TodoListItemProps = {
  todo: TodosType;
  change: (id: number, newTodo: string) => void;
  remove: (id: number) => void;
  complete: (id: number) => void;
};

function TodoListItem({ todo, change, remove, complete }: TodoListItemProps) {
  const [newTodo, setNewTodo] = useState(todo.text);
  const [state, setState] = useState(false);

  const modify = (id: number, newTodo: string) => {
    change(id, newTodo);
    setState(false);
  };

  const modifyCancel = () => {
    setState(false);
  };

  return (
    <TodoItemBox>
      {state ? (
        <div className="edit-btns-wrapper">
          <input
            type="text"
            maxLength={17}
            value={newTodo}
            onChange={({ target }) => setNewTodo(target.value)}
          />
          <EditConfirmBtnBox onClick={() => modify(todo.id, newTodo)}>
            O
          </EditConfirmBtnBox>
          <EditCancelBtnBox onClick={() => modifyCancel()}>X</EditCancelBtnBox>
        </div>
      ) : (
        <div className="edit-delete-wrapper">
          <CheckBox todo={todo} complete={complete} />
          <EditBtnBox onClick={() => setState(true)}>Edit</EditBtnBox>
          <DeleteBtnBox onClick={() => remove(todo.id)}>Del</DeleteBtnBox>
        </div>
      )}
    </TodoItemBox>
  );
}

export default TodoListItem;
