"use client";
import { ChangeEventHandler, FC, useState } from "react";

type Todo = {
  id: Number;
  label: string;
  isDone: boolean;
};

export default function Home() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const input: ChangeEventHandler<HTMLInputElement> = (e) => {
    // 型確認参考URL：https://reffect.co.jp/react/react-typescript-event/
    setText(e.target.value);
  };
  // const input = (e: ChangeEvent<HTMLInputElement>) => { // 型確認参考URL：https://reffect.co.jp/react/react-typescript-event/
  //   setText(e.target.value);
  // };

  const toggle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === Number(e.target.value)) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

  const add = () => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random(),
          label: text,
          isDone: false,
        },
      ];
    });
    setText("");
  };

  return (
    <main className="bg-white text-black">
      <div className="w-96 mx-auto p-20">
        <h1 className="text-xl font-bold">Todo</h1>
        <div className="flex gap-x-2">
          <input type="text" value={text} onChange={input} className="border border-black" />
          <button onClick={add} className="border border-black flex-shrink-0">
            ボタン
          </button>
        </div>
        <ul className="mt-4 space-y-2">
          {todos.map((todo) => {
            return (
              <li key={String(todo.id)}>
                <ListItem todo={todo} toggle={toggle} />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

const ListItem: FC<{ todo: Todo; toggle: ChangeEventHandler<HTMLInputElement> }> = ({
  todo,
  toggle,
}) => {
  return (
    <label className="flex items-center gap-x-2">
      <input type="checkbox" value={Number(todo.id)} checked={todo.isDone} onChange={toggle} />
      <span>{todo.label}</span>
    </label>
  );
};
