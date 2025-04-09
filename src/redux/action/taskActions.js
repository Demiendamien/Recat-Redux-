export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const editTask = (taskId, updatedTask) => {
  return {
    type: EDIT_TASK, // Correction ici
    payload: { taskId, updatedTask },
  };
};

export const toggleTask = (taskId) => {
  return {
    type: TOGGLE_TASK,
    payload: taskId,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: REMOVE_TASK,
    payload: taskId,
  };
};