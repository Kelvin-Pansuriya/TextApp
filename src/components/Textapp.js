import React, {useState} from 'react'
import PropTypes from 'prop-types'


function Textapp(props) {
    const [text, setText] = useState("")
    function myChange(event) {
        setText(event.target.value)
    }
    function btnToUpCase() {
        setText(text.toLocaleUpperCase())
        props.showPop("Success","Value Is Convert Into UpperCase")
    }
    function btnToLowCase() {
        setText(text.toLowerCase())
        props.showPop("Success","Value Is Convert Into LoweCase")
    }
    function btnClear() {
        setText("")
        props.showPop("Success","Value Is Clear")
    }

    return (
        <div className='container-fluid' style={props.cssMode}>
            <div className="container">
                <div className="form-group">
                    <h1 className="py-4">{props.heading}</h1>
                    <label htmlFor="myTextArea">{props.textAreaHeading}</label>
                    <textarea className="form-control" value={text} onChange={myChange} id="myTextArea" rows="8"></textarea>
                    <button className="btn btn-primary m-3" disabled={text.length === 0} onClick={btnToUpCase}>Convert To UpperCase</button>
                    <button className="btn btn-primary m-3" disabled={text.length === 0} onClick={btnToLowCase}>Convert To LowerCase</button>
                    <button className="btn btn-primary m-3" disabled={text.length === 0} onClick={btnClear}>Clear Text</button>
                </div>
                <div className="container my-4">
                    <p className='p-2'>
                        <span className='px-2'>Total Words :- {text.split(" ").filter((element)=>{return element.length !==0}).length}</span>
                        <span className='px-2'>Total Letters :- {text.length}</span>
                        <span className='px-2'>Reading Time In Words/Minutes :- {text.split(" ").filter((element)=>{return element.length !==0}).length*0.08 + "/Minutes"}</span>
                    </p>
                </div>
                <div className="container py-4">
                    <h2 className="my-2">Text Preview</h2>
                    <p className='my-2 p-2' id='preview'>{text.length >0? text:"Write Anything For Preview...."}</p>
                </div>
            </div>
        </div>
    )
}

Textapp.propTypes = {
    heading: PropTypes.string.isRequired,
    textAreaHeading: PropTypes.string.isRequired
}

Textapp.defaultProps = {
    heading: "This Is Main Heading....",
    textAreaHeading: "This Is Text-Area's Heading...."
}

export default Textapp