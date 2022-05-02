import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleUPcase = () => {
    let netText = text.toUpperCase();
    setText(netText);
    props.showAlert("Converted to UpperCase !","Success");
  };
  const handlelocase = () => {
    let netText = text.toLowerCase();
    setText(netText);
    props.showAlert("Converted to  LowerCase !","Success");

  };
  const txtonchangfun = (event) => {
    console.log("text onchange");
    setText(event.target.value);
  };
  const handleClearText = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text has been cleared !","Danger");

  };
  const handleTextCopy = () => {
    let newText = document.getElementById("floatingTextarea2");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text  copied !","Success");

  };
  const handleRemoveExtraspace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed !","Success");

  };
  const textStyle ={
      height:220
  }
  // setText("jgldfls");
  return (
    <>
      <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
        <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <div className="form-floating">
              <textarea
                className="form-control" 
                value={text}
                onChange={txtonchangfun}
                placeholder="Leave a comment here"
                rows="8"
                id="floatingTextarea2"
                style={textStyle}
              ></textarea>
            </div>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUPcase}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary mx-2" onClick={handlelocase}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClearText}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleTextCopy}>
            Copy
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={handleRemoveExtraspace}
          >
            Remove Extraspace
          </button>
        </div>
      </div>
      <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.length ===0?0: text.split(" ").length} words and {text.length} characters
        </p>
      </div>
    </>
  );
}
