import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code")

  const options = categories.filter(category => category !== "All")
                            .map(category => <option key={category} value={category}> {category} </option>)
  
  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({text, category});
    setText("");
    setCategory("Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onInput={(event) => setText(event.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(event) => setCategory(event.target.value)}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
