import axios from "axios";
import * as actionType from "../constants/todoConstants";
// Sử dụng: dispatch(getTodos())
// redux chỉ cho phép action là một plain object
// VD: const getTodos = () => {type: "GET_TODOS", data}
// Nếu muốn viết một async action ta cần dùng custom middleware
// export const getTodos = async () => {
//   try {
//     // Call API
//     const { data } = await axios.get(
//       "https://629757b414e756fe3b2dc8f0.mockapi.io/api/todos"
//     );
//     // Thành công return về action
//     return { type: "GET_TODOS", data };
//   } catch (error) {
//     console.log(error);
//   }
// };

// Khi sử dụng redux-thunk, action có thểlà một function về một function nhận vào 2 tham số là dispatch và getState
// Với các viết này sẽ giúp:
//  + Tái sử dụng hàm getTodos
//  + Tách biệt logic ra khỏi component

const FILTER_MAPPING = {
  all: undefined,
  active: false,
  completed: true,
};
export const getTodos = () => {
  // action thunk/middleware
  return async (dispatch, getSate) => {
    try {
      // Dùng hàm getState để lấy state search và filter từ store
      const { search, filter } = getSate().todo;
      // Call API
      const { data } = await axios.get(
        "https://62cfaa431cc14f8c087af8b4.mockapi.io/todos",
        {
          params: {
            isCompleted: FILTER_MAPPING[filter],
            title: search || undefined,
          },
        }
      );
      // Thành công dispatch một action để đưa data vào store
      dispatch({ type: actionType.GET_TODOS, data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTodo = (todoId) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        `https://62cfaa431cc14f8c087af8b4.mockapi.io/todos/${todoId}`
      );
      //   Call API delete todo thành công
      // dispatch action getTodos để call API lấy data mới từ server và set lại state cho store
      dispatch(getTodos());
    } catch (error) {
      console.log(error);
    }
  };
};

export const completeTodo = (todo) => {
  return async (dispatch) => {
    try {
      const { id, ...payload } = todo;
      await axios.put(
        `https://62cfaa431cc14f8c087af8b4.mockapi.io/todos/${id}`,
        { ...payload, isCompleted: true }
      );

      // dispatch action getTodos để call API lấy data mới từ server và set lại state cho store
      dispatch(getTodos());
    } catch (error) {
      console.log(error);
    }
  };
};

export const addTodo = (todo, onSuccess) => {
  return async (dispatch) => {
    try {
      await axios.post(
        "https://62cfaa431cc14f8c087af8b4.mockapi.io/todos",
        todo
      );

      // dispatch action getTodos để call API lấy data mới từ server và set lại state cho store
      dispatch(getTodos());

      onSuccess();
    } catch (error) {
      console.log(error);
    }
  };
};

export const changeFilter = (status) => {
  return { type: actionType.CHANGE_FILTER, data: status };
};

export const changeSearchValue = (value) => {
  return { type: actionType.CHANGE_SEARCH_VALUE, data: value };
};
