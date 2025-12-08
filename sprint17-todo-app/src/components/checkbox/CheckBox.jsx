import React from "react";
import "./CheckBox.css";

const CheckBox = (props) => {
  return (
    <div className="round">
      <input type="checkbox" checked={props.checked} onChange={(e) => props.onChange(e.target.checked)} />
      <label className={`checkbox ${props.checked ? "checkbox--active" : ""}`}></label>
    </div>
  );
};

export default CheckBox;
