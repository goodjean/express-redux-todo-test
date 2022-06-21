import { fireEvent, render, screen } from "@testing-library/react";
import TodoListItem from "../components/TodoListItem";

describe("<TodoListItem />", () => {
  const todo = {
    text: "점프하기",
    id: 3,
    done: false,
  };

  const change = jest.fn();
  const remove = jest.fn();
  const complete = jest.fn();

  it("rendered elements when state is false", () => {
    render(
      <TodoListItem
        todo={todo}
        change={change}
        remove={remove}
        complete={complete}
      />
    );

    const p = screen.getByText("점프하기");
    const delDiv = screen.getByText("Del");
    const modiDiv = screen.getByText("Edit");

    expect(p).toBeTruthy();
    expect(delDiv).toBeTruthy();
    expect(modiDiv).toBeTruthy();
  });

  it("rendered elements when state is true", () => {
    render(
      <TodoListItem
        todo={todo}
        change={change}
        remove={remove}
        complete={complete}
      />
    );

    const modiDiv = screen.getByText("Edit");

    fireEvent.click(modiDiv);

    const input = screen.getByDisplayValue("점프하기");
    const changeDiv = screen.getByText("O");
    const cancelModiDiv = screen.getByText("X");

    expect(input).toBeTruthy();
    expect(changeDiv).toBeTruthy();
    expect(cancelModiDiv).toBeTruthy();
  });
});
