import React from 'react'
import {useState} from 'react'




const TextForm = (props) => {
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked"+ text);
    let newText=text.toUpperCase()
    setText(newText);
    props.showAlert("Converted to Uppercase","success")
   

  }

    const handleLoClick=()=>{
    
    let newText=text.toLowerCase()
    setText(newText);
        props.showAlert("Converted to Lowercase","success")
   

  }

  const handleRefresh=()=>{
    let newText="";
    setText(newText);
        props.showAlert("refreshed","success")

  }

  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
        props.showAlert("Copied","success")
  }


 const handleExtraSpaces=()=>{
  let newText=text.split(/[  ]+/);
  setText(newText.join(" "))
      props.showAlert("Extra space removed","success")
}

    const handleOnChange=(event)=>{
    // console.log("On chnage");
    setText(event.target.value)
    }
  const [text,setText] = useState("")

  return (
    <>
    <div className="container">
     
        <h1>{props.heading}</h1>  
        <div class="mb-3"> 

        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}   onChange={handleOnChange}  id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleRefresh}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        
        </div>

        <div className="container my-3">
          <h2>Your text summary</h2>
          <p>{text.split(" ").length} and {text.length}</p>
          <p>{0.008*text.split(" ").length}  Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0? text : "Enter something into text box above  to preview it here "}</p>

        </div>
        </>
  )
}

export default TextForm
