import React from "react";
import { FiTrash2 } from "react-icons/fi";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    onUpdate({ ...todo, status: e.target.checked ? "completed" : "active" });
  };
  const handleDelete = () => {
    onDelete(todo);
  };
  return (
    <li className={styles.li}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label className={styles.label} htmlFor="checkbox">
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <FiTrash2 />
        </button>
      </span>
    </li>
  );
}
