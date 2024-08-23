import React from "react";

export default function Dados(props){
    return(
        <section>
            <p>Canal: {props.canal()}</p>
            <p>Curso: {props.curso(10, 5)}</p>
        </section>
    )
}
// Recebe os valores do props no App.js usando atributos canal='valor'
// No caso de Funções, eu coloco no formato de chamada de função ex: props.funcao(valor || void)