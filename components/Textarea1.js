import React, {useState}from 'react';



export default function Textforms(props) {
    const handleUpClick=()=>{
     
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    }
    const handleLowClick=()=>{
        
        let newText1=text.toLowerCase();
        setText(newText1)
        props.showAlert("Converted to lowercase","success");
    }
    const handleClearclick=() =>{
        let newText1=''
        setText(newText1)
        props.showAlert("Text Cleared", "success")
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to clipboard", "success")
    }
    const handleOnChange=(event)=>{
        
        setText(event?.target.value)
    }
    const [text, setText] = useState("");   
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            
            <h1 className="mb-4">{props.heading}- </h1>
            <div className="mb-3">
                <textarea className="form-control"  value={text} onChange={handleOnChange} 
                style={{background: props.mode==='dark'?'#13466e':'white',
                color: props.mode==='dark'?'white':'#042743'}}
                 id="my-box" rows="8"></textarea>
            </div>
            
            <button disabled={text.length===0}className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-secondary mx-2" onClick={handleLowClick}>Convert to lower-case</button>
            <button disabled={text.length===0} className="btn btn-success mx-2" onClick={handleClearclick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-warning" onClick={handleCopy}>Copy Text</button>
             
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summery</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!== 0}).length}Minites read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>

        </div>
        </>
    )
}
