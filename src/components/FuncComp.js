import React from "react";

function FuncComp(props){
    console.log(props)
    return ( 
    <div>
    <h1>I am kalesha vali</h1>
    <p> Paragraph2knkhbjknlvf</p>
    <h1>{props.name}</h1>
    <h1>{props.professsion}</h1>
    <h1>{props.age}</h1>
    </div>
    );
}

export default FuncComp;