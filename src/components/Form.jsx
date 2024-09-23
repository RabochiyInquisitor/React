import React from "react";

const Form = (props) => {
    console.log(props)
    return(
        <div className="Post">
           <div>{props.value.id}</div>
           <div>{props.value.name}</div>
           <div>{props.value.content}</div>
        </div>  
    )
}

export default Form;