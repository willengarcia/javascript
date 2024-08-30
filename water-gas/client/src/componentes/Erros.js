import React from "react";
export default function Erros(props) {
    return(
        <div className="erros" onMouseLeave={(e)=>{e.target.style.display = "none"}} style={props.display}>
            <div>
                <h2>Erro</h2>
                <p>Código erro: {props.erro_codigo}</p>
                <p>Descrição: {props.descricao}</p>
            </div>
        </div>
    )
}