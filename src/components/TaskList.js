import React from "react";
import Task from "./Task";

function TaskList({ tasks, onTaskDelete }) {
  const taskList = tasks.map((task) => {
    return (
      <Task
        key={task.text}
        text={task.text}
        category={task.category}
        onTaskDelete={onTaskDelete}
      />
    )
  })
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
