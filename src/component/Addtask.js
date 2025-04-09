import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/action/taskActions";

const AddTask = () => {
    const [taskDescription, setTaskDescription] = React.useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskDescription.trim()) {
            dispatch(addTask(taskDescription));
            setTaskDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTask;