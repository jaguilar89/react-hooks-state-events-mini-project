import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  //For each button rendered, set class name based on selectedCategory state
  const categoryButtons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    return (
      <button 
        key={category}
        className={className}
        onClick={() => onSelectCategory(category)}
      >
          {category}
      </button>
      )
  })


  return ( 
    <div className="categories">
      <h5>Category filters</h5>
        {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
