import React from "react";

function Form({ input, setinput, inputTextHandler, handleclick, edit }) {
  return (
    <div id="main">
      <form className={edit ? "editTask" : ""} onSubmit={handleclick}>
        <input
          className={edit ? "editTask" : ""}
          id="task"
          onChange={inputTextHandler}
          value={input}
        />
        <button id="btn">{edit ? `save` : `add`}</button>
      </form>
    </div>
  );
}

export default Form;
