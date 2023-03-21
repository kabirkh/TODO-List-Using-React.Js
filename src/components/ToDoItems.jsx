import React, { useState } from "react";

function ToDoItems(props){

    const [isDone,setIsDone] = useState(false);

    function handleClick(){
        setIsDone((preValue)=>{
            return !preValue;
        })
    }

    return(
        <div onClick={()=>{
            props.onChecked(props.id)
        }}>
            <li style={{textDecoration: isDone?"line-through":"none"}}>{props.text}</li>
        </div>
    )
}

export default ToDoItems;

//milk maggi adrak pani ande 1-tray 