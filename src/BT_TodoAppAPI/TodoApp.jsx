import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import FilterTodo from "./FilterTodo";
import TodoList from "./TodoList";
import SearchTodo from "./SearchTodo";
import { getTodos } from "../redux/actions/todoActions";

const TodoApp = () => {
  const { search, filter } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch getTodos action sẽ được gọi ở sau lần render
    // đầu tiên và ở những lần render tiếp theo khi state search hoặc
    // filter thay đổi
    dispatch(getTodos());
  }, [search, filter]);

  return (
    <div style={{ minHeight: "100vh" }} className="bg-secondary">
      <div className="container">
        <div className="text-center text-white">
          <h1>My todos</h1>

          <div className="row">
            <div className="col-sm6 mx-auto text-white">
              <AddTodo />
              <SearchTodo />
              <TodoList />
              <FilterTodo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
