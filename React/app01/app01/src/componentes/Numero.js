import React from "react";

export default function Numero(props){
    return(
        <div>
            <p>Valor do state num em Numero: {props.num}</p>
            <button onClick={()=>props.setNum(props.num+10)}>Atualizar Componente</button>
        </div>
    )
}