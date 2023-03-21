import React,{useState} from "react";

function InputArea(props) {

    const [text,setText] = useState("");

    function handleChange(event){
        const newText = event.target.value;
        setText(newText);
    }

  return (
    <div className="form">
      <input 
      onChange={handleChange} 
      type="text" 
      value={text} 
      />
      <button onClick={()=>{
        props.addItems(text);
        setText("")
      }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
