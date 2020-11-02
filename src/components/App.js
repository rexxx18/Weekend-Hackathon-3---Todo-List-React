import React, { useState } from "react";
import "./../styles/App.css";
import Todolist from "./todolist";
import Form from "./form";

function App() {
  const [input, setinput] = useState("");
  const [list, setlist] = useState([]);
  const [edit, setedit] = useState(false);
  const [editid, seteditid] = useState(null);

  const inputTextHandler = (e) => {
    setinput(e.target.value);
    console.log(e.target.value);
  };

  const handleclick = (e) => {
    e.preventDefault();
    if (input === "") {
      return;
    } else if (edit === false) {
      const newitem = { id: Math.floor(Math.random() * 100), value: input };
      const newList = [...list, newitem];
      setlist(newList);
      setinput("");
    } else if (edit === true) {
      const newitem = { id: editid, value: input };
      const newList = [...list, newitem];
      setlist(newList);
      setinput("");
      setedit(false);
      seteditid(null);
    }
  };

  const handledelete = (id) => {
    const Filteredlist = list.filter((list) => list.id !== id);
    setlist(Filteredlist);
  };

  const handleedit = (id) => {
    const Filteredlist = list.filter((list) => list.id !== id);
    setlist(Filteredlist);
    const selecteditem = list.find((list) => list.id === id);
    setedit(true);
    setinput(selecteditem.value);
    seteditid(selecteditem.id);
  };
  return (
    <div id="main">
      <div id="task">
        <Form
          edit={edit}
          input={input}
          setinput={setinput}
          inputTextHandler={inputTextHandler}
          handleclick={handleclick}
        />
      </div>
      <div>
        <Todolist
          list={list}
          setlist={setlist}
          handledelete={handledelete}
          handleedit={handleedit}
        />
      </div>
    </div>
  );
}

export default App;
