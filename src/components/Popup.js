import React from 'react'

function Popup(props) {
  return (
    <div style={{height:"53px",color:props.cssMode.color,backgroundColor:props.cssMode.backgroundColor}} >
        {
        props.popup &&
        <div className="alert alert-success alert-dismissible fade show m-0" role="alert">
            <strong>{props.popup.type}</strong> {props.popup.msg}
        </div>
        }
    </div>
  )
}

export default Popup