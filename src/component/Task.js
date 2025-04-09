import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask, editTask } from "../redux/action/taskActions";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false); // État pour savoir si on est en mode édition
  const [newDescription, setNewDescription] = useState(task.description); // État pour la nouvelle description

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    if (isEditing) {
      // Si on est en mode édition, sauvegarder les modifications
      dispatch(editTask(task.id, newDescription));
    }
    setIsEditing(!isEditing); // Basculer le mode édition
  };

  return (
    <div className={`task ${task.isDone ? "completed" : ""}`}>
      {isEditing ? (
        // Champ d'édition
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        // Affichage normal
        <span onClick={handleToggle} style={{ cursor: "pointer" }}>
          {task.description}
        </span>
      )}
      <button onClick={handleEdit} style={{ marginLeft: "10px" }}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button onClick={handleDelete} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </div>
  );
};

export default Task;