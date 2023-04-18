import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => local());
  const handleAdd = (todo) => {
    //새로운 투두를 todos에 업데이트 해야한다.
    // console.log(todo);
    setTodos([...todos, todo]);
  };
  const handleUpdaate = (updated) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };
  const handleDelete = (deleted) => {
    setTodos(todos.filter((t) => t.id !== deleted.id));
  };

  //localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, filter);
  //todos중에 우리가 원하는 것만 필터해놓음
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdaate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    //all이면 필터할거 없음
    return todos;
  }
  return todos.filter((todos) => todos.status === filter);
}

function local() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
