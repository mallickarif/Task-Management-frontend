import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);

    return (
        <div>
            <h1>Task List</h1>
            {tasks.map(task => (
                <TaskItem key={task.id}
                task={task} />
            ))}
        </div>
    );
}

export default TaskList;