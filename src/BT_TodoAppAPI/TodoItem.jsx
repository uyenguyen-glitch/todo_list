import React from "react";
import { useDispatch } from "react-redux/es/exports";
import cn from "classnames";
import axios from "axios";
import { completeTodo, deleteTodo } from "../redux/actions/todoActions";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    // dispatch action để thay đổi giá trị isCompleded của todo từ false sang true
    dispatch(completeTodo(todo));
  };

  const handleDelete = async () => {
    dispatch(deleteTodo(todo.id));
  };
  return (
    <div>
      <li className="d-flex justify-content-between">
        {/* Thêm class text-decoration-line-through vào thẻ div nếu todo.iscompleted là true  */}
        <div
          className={cn({ "text-decoration-line-through": todo.isCompleted })}
        >
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
        <div>
          {/* Btn complete chỉ được hiển thị khi todo.isCompleted là false */}
          {!todo.isCompleted && (
            <button className="btn btn-success me-2" onClick={handleComplete}>
              Complete
            </button>
          )}
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
