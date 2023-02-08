import React ,{ useState }from 'react'
// import PropTypes from 'prop-types'
// import PropTypes from 'prop-types'

export default function Texatarea(props) {
    const [text,setText ]= useState('');

    const changeThetext=(event)=>{
        setText(event.target.value);
        
    }
    const convertUpperCase=()=>{
        if(text.length !== 0){
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
        }else{
        props.showAlert("please enter the text","warning")
        }
    }
    const convertLowerCase=()=>{
        if(text.length !== 0){
            let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success")
            }else{
            props.showAlert("please enter the text","warning")
            }
        
    }
    const convertClearCase=()=>{
        if(text.length !== 0){
            setText("");
        props.showAlert("Cleared the text","success")
            }else{
            props.showAlert("please enter the text","warning")
            }
        
    }
    const convertBoldCase=()=>{
        if(text.length !== 0){
            let newText1=text.split(" ");
        for (var i = 0; i < newText1.length; i++) {
            newText1[i] = newText1[i].charAt(0).toUpperCase() + newText1[i].slice(1);
        
        }
        let newText=newText1.join(" ");
        setText(newText);
        props.showAlert("Text is Capitalized","success")
            }else{
            props.showAlert("please enter the text","warning")
            }
        
    }
    let sum=0;
    const vowels=()=>{
        let newText1=text.split("");
        for (var i = 0; i < newText1.length; i++) {
        if(newText1[i]==="a"|| newText1[i]==="e"|| newText1[i]==="i"|| newText1[i]==="o"||newText1[i]==="u"){
            sum=sum+1;
        }
        }
        setText("No of vowels : "+sum);
    }
    
    return (

        <>
        <div className="container" style={{color:props.mode==='dark' ? 'white': 'black'}}>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea className={`form-control bg-${props.mode}`} style={{backgroundColor:props.mode==='dark' ? 'dark': 'light', color:props.mode==='dark' ? 'white': 'black'}} value={text} onChange={changeThetext}  id='mybox' rows='8'></textarea>
            </div>
            <button  className='btn btn-primary mx-2 my-1' onClick={convertUpperCase}>Convert to UpperCase</button>
            <button  className='btn btn-primary mx-2 my-1' onClick={convertLowerCase}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-2 my-1' onClick={convertClearCase}>Clear Text</button>
            <button className='btn btn-primary mx-2 my-1' onClick={convertBoldCase}>Captalize</button>
            <button className='btn btn-primary mx-2 my-1' onClick={vowels}>Vowels</button>
        </div>
        <div className='container my-3' style={{color:props.mode==='dark' ? 'white': 'black'}}>
            <h3>Your text summary</h3>
        <p> 
            {text.split(" ").filter((element)=>{return element.length !== 0}).length}  words {text.length} character and {text.split("\n").filter((element)=>{return element.length !== 0}).length} lines </p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
            
        </div>
        </>
    )
}
