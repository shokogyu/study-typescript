"use client";
import { TwitterCard } from "@/components/TwitterCard";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("aa");
  const [todos, setTodos] = useState([
    { id: Math.random(), label: "TODO1", isDone: false },
    { id: Math.random(), label: "TODO2", isDone: false },
    { id: Math.random(), label: "TODO3", isDone: false },
  ]);

  const input = (e) => {
    setText(e.target.value);
  };

  const toggle = (e) => {
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
    setText("")
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
              <li key={todo.id}>
                <label className="flex items-center gap-x-2">
                  <input type="checkbox" value={todo.id} checked={todo.isDone} onChange={toggle} />
                  <span>{todo.label}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
