import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTask] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleTaskAdd(newTask) {
    setTask([...tasks, newTask])
  }
  function handleTaskDelete(taskText) {
    const filteredList = tasks.filter((task) => task.text !== taskText)
    setTask(filteredList)
  }

  const visibleTasks = tasks.filter((task) => {
    return category === "All" ? true : task.category === category;
  })
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory} 
      />
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskAdd}
      />
      <TaskList 
        tasks={visibleTasks}  
        onTaskDelete={handleTaskDelete}
      />
    </div>
  );
}

export default App;
