import React, { useState } from "react";
import "../App.css";

export default function TextForm(props) {



  const btnUClicked = () => {
    let utxt = text.toUpperCase();
    setText(utxt);
    props.seeAlert("Converted to UpperCase","success");
  };
  const btnLClicked = () => {
    let ltxt = text.toLowerCase();
    setText(ltxt);
    props.seeAlert("Converted to LowerCase","success")
  };
  

  const copybutton = () =>{
    let txtSelect = document.getElementById('mybox');
    txtSelect.select();
    navigator.clipboard.writeText(txtSelect.value);
    props.seeAlert("Copied to Clipboard!","success")

  }

  
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode === "dark" ? "white" : "black"}}>
        <h1>{props.head}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" placeholder="Enter text" style={{backgroundColor: props.mode === 'dark'? 'white' : 'black', color: props.mode === "dark" ? "black" : "white" }}></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={btnUClicked}>
          Convert to UpperCase
        </button>
        <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={btnLClicked}>
          Convert to LowerCase
        </button>
        <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={copybutton}>
          Copy to Clipboard
        </button>
        
      </div>
      <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "black"}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} word, {text.length} Characters
        </p>
        <p> Reading Time : {0.008 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p className="border">{text.length > 0 ? text : "Noting To Preview"}</p>
      </div>
    </>
  );
}
