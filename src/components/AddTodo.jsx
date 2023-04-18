import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

//npm install uuid하고 import해서 사용하고 싶은곳에 id: uuidv4()해서 사용
//랜덤하게 고유한id값 만들어줌

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    //String.prototype.trim(): trim() 메서드는 문자열 양 끝의 공백을 제거하고 원본 문자열을 수정하지 않고 새로운 문자열을 반환
    if (text.trim().length === 0) {
      return;
    }
    e.preventDefault();
    onAdd({ id: uuidv4(), text, status: "active" });
    setText(""); //목록에 add한후에는 input창 초기화
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
