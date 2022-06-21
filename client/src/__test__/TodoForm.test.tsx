import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoForm from "../components/TodoForm";

describe("<TodoForm />", () => {
  const todos = [
    {
      text: "외식하기",
      id: 1,
      done: false,
    },
    {
      text: "영화보기",
      id: 2,
      done: false,
    },
  ];
  const add = jest.fn();

  it("has input and a button", () => {
    render(<TodoForm todos={todos} add={add} />);
    screen.getByPlaceholderText("Insert to do");
    screen.getByText("ADD");
  });

  it("changes input value", () => {
    render(<TodoForm todos={todos} add={add} />);
    const input = screen.getByPlaceholderText("Insert to do");
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });
    expect(input).toHaveAttribute("value", "TDD 배우기");
  });
});
