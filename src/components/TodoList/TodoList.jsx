import todosData from "./../../data/todos.json";
import { TodoItem } from "../TodoList/TodoItem";
import s from "../TodoList/TodoList.module.css";
export const TodoList = () => {
  return (
    <div>
      <div className="flex">
        <input className={s.input} />
        <button className="btn border">Add</button>
      </div>
      <ul className={s.list}>
        {todosData.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};
