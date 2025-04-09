const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: Date.now(), description: action.payload, isDone: false }];
    case "EDIT_TASK":
      return state.map((task) =>
        task.id === action.payload.taskId
          ? { ...task, description: action.payload.updatedTask }
          : task
      );
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      );
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

export default taskReducer;