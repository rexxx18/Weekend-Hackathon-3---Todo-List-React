import React from "react";

function Todoitem({ value, key, handledelete, handleedit }) {
  return (
    <div className="list">
      {value}
      <button className="edit" id="edit" onClick={handleedit}>
        Edit
      </button>
      <button className="delete" id="delete" onClick={handledelete}>
        delete
      </button>
    </div>
  );
}

export default Todoitem;
