import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { changeFilter as changeFilterAction } from "../redux/actions/todoActions";

const FilterTodo = () => {
  const dispatch = useDispatch();
  const changeFilter = (status) => {
    dispatch(changeFilterAction(status));
  };
  return (
    <div className="mt-3">
      {/* Hiển thị tất cả */}
      <button
        className="btn btn-primary me-2"
        onClick={() => changeFilter("all")}
      >
        All
      </button>
      {/* Hiển thị những todos chưa hoàn thành */}
      <button
        className="btn btn-success me-2"
        onClick={() => changeFilter("active")}
      >
        Active
      </button>
      {/* Hiển thị những todos đã hoàn thành */}
      <button
        className="btn btn-warning me-2"
        onClick={() => changeFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterTodo;
