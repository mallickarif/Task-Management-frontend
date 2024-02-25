import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addTask, updateTask } from "../actions/taskActions";

const TaskForm = ({ match }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { title };
        if (match.params.id) {
            dispatch(updateTask(match.params.id, newTask));
        } else {
            dispatch(addTask(newTask));
        }
        history.push("/");
    }
    return (
        <div>
            <h2>{match.params.id ? "Edit Task" : "Create Task"}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
                <button type="submit">
                {match.params.id ? "Update" : "Create"}
                </button>
            </form>
        </div>
    );
}

export default TaskForm;