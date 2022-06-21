import React from "react";
import { MdCheckCircleOutline, MdCheckCircle } from "react-icons/md";
import { TodosType } from "../types";
import styled from "styled-components";

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const CompleteBox = styled.div`
  position: absolute;
  left: 1px;
  color: #cd3861;
`;

const InCompleteBox = styled.div`
  position: absolute;
  left: 1px;
  color: #cd3861;
`;

type CheckBoxProps = {
  todo: TodosType;
  complete: (id: number) => void;
};

function CheckBox({ todo, complete }: CheckBoxProps) {
  return (
    <CheckBoxWrapper>
      <div onClick={() => complete(todo.id)}>
        {todo.done ? (
          <CompleteBox>
            <MdCheckCircle />
          </CompleteBox>
        ) : (
          <InCompleteBox>
            <MdCheckCircleOutline />
          </InCompleteBox>
        )}
      </div>
      <div
        style={{
          textDecoration: todo.done ? "line-through" : undefined,
          color: todo.done ? "gray" : "black",
        }}
      >
        <p>{todo.text}</p>
      </div>
    </CheckBoxWrapper>
  );
}

export default CheckBox;
