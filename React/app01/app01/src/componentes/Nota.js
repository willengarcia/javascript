import React from "react";

export default function Nota(props){
    return(
        <div>
            <legend>Informe a nota: {props.num}</legend>
            <input type="text" name={props.num} value={props.nota} onChange={(el)=>{props.setNota(el)}}></input>
        </div>
    )
}