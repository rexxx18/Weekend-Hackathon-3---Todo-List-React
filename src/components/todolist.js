import React from "react";

import Todoitem from "./todoitem";

function Todolist({ list, setlist, handledelete, handleedit }) {
  return (
    <div id="main">
      <header>List:</header>
      {list.map((list) => {
        return (
          <Todoitem
            key={list.id}
            value={list.value}
            handledelete={() => handledelete(list.id)}
            handleedit={() => handleedit(list.id)}
          />
        );
      })}
    </div>
  );
}

export default Todolist;
