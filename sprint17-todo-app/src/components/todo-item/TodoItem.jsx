import React from "react";
import "./TodoItem.css";
import CheckBox from "../checkbox/CheckBox";

const TodoItem = (props) => {
  return (
    <div className={`todo-item ${props.completed && "todo-completed"}`}>
      <div className="todo-item-header">
        <div className="title-area">
          <CheckBox checked={props.completed} onChange={() => props.onToggle(props.id)} />
          <h4>{props.title}</h4>
        </div>
        <div className="todo-actions">
          <button onClick={() => props.onEdit(props.id)} className="icon-button edit-button" title="Edit">
            ✏️
          </button>
          <button onClick={() => props.onDelete(props.id)} className="icon-button delete-button" title="Delete">
            🗑️
          </button>
        </div>
      </div>
      <div className="separator"></div>
      <p>{props.description}</p>
    </div>
  );
};

export default TodoItem;
