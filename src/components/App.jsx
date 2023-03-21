import React, { useState } from "react";
import ToDoItems from "./ToDoItems";
import InputArea from "./InputArea";

function App() {
    const [items,setItems] = useState([])

    function addItems(text){
        setItems((preItems)=>{
            return [...preItems,text]
        });
    }
    function deleteItems(id){
      setItems(preItems=>{
        return preItems.filter(
          (items,index)=>{
            return index!==id; 
          }
        )
      })
    }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addItems={addItems}/>
      <div>
        <ul>
          {items.map((todoItems,index) => 
          <ToDoItems 
          key={index}
          id={index}
          text={todoItems} 
          onChecked={deleteItems}/> )}
        </ul>
      </div>
    </div>
  );
}

export default App;
