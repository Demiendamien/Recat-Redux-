import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks); // Assurez-vous que `tasks` est bien défini dans votre reducer

    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;