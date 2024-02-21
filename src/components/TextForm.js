import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpclick = () => {
        // console.log("Upprecase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Uppercase","success");

    }

    const handleLowclick = () => {
        // console.log("Upprecase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lowercase","success");


    }

    //clear text
    const handleClsclick = () => {
        // console.log("Upprecase was clicked" + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared !","success");

    }

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }

    //Copt text 
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied !","success");

    }

    //Hande extra spac
    const handleSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spacec Removed","success");

    }


// Declare a new state variable, which we'll call "count"
  const [text, setText] = useState('');
    
  return (
    <>
        <div className='container' style={{color:props.mode === 'dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
         <div className="mb-3">
        
             {/* <label for="mybox" className="form-label">Example textarea</label> */}
            <textarea className="form-control" style={{backgroundColor :props.mode === 'dark'?'#082346':'white',color:props.mode === 'dark'?'white':'black'}}  value={text} onChange={handleOnChange} id="mybox" rows="6"></textarea>
          </div>
             < button className='btn btn-primary btn-sm mx-1' onClick={handleUpclick} >Convert To Uppercase </button>
             < button className='btn btn-secondary btn-sm mx-1' onClick={handleLowclick} >Convert To Lowercase </button>
             < button className='btn btn-success btn-sm mx-1' onClick={handleClsclick} >Clear Text </button>
             < button className='btn btn-danger btn-sm mx-1' onClick={handleCopy} >Copy Text </button>
             < button className='btn btn-warning btn-sm mx-1' onClick={handleSpace} >Remove Extra Space </button>

         </div>
        <div className='container my-3' style={{color :props.mode === 'dark'?'white':'black'}}>    
            <h3>Text Summary</h3>  
            <p>
                <b> {text.split(' ').length}</b>  words and <b>{text.length}</b> character
            </p>
            <h3>Preview</h3>
          
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
    </>
  )
}
