const colorReducer = (state = ["red", "green", "blue"], action) => {
  // xử lý thay đổi state....
  console.log("COLOR REDUCER", state, action);
  switch (action.type) {
    case "ADD_COLOR": {
      return [...state, action.data];
    }

    case "REMOVE_COLOR": {
      return state.filter((item) => item !== action.data);
    }

    default:
      return state;
  }
};

export default colorReducer;
