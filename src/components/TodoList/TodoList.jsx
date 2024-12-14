import { useState } from "react";
import todosData from "./../../data/todos.json";
import { TodoItem } from "../TodoList/TodoItem";
import s from "../TodoList/TodoList.module.css";

export const TodoList = () => {
  const [todos, setTodos] = useState(todosData);
  const [newValue, setNewValue] = useState("");

  const deleteTodo = (id) => {
    console.log(id);
    //const newArr = todos.filter((item) => item.id !== id);
    //console.log(newArr);
    // можна зробити і так але на практиці краще використовувати
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const addNewTodo = () => {
    const newTodo = {
      id: crypto.randomUUID(), // спосіб зробити рандомний ID
      todo: newValue,
    };
    setTodos((prev) => [...prev, newTodo]);
  };
  return (
    <div>
      <div className="flex">
        <input
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          className={s.input}
          placeholder="Enter new todo"
        />
        <button className="btn border" onClick={addNewTodo}>
          Add
        </button>
      </div>
      <ul className={s.list}>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            onDeleteTodo={() => deleteTodo(item.id)} // Передаємо функцію видалення в дочірній компонент
          />
        ))}
      </ul>
    </div>
  );
};
