import React from "react";

export default function Filhos(props){
    return(
        <>
            <h1>Filho principal do componente Filhos</h1>
            {props.children[1]}
            {props.children[0]}
        </>
    )
}

// Para pegar os filhos de outro componente e inserir, basta usar props e usar a propriedade props.children, caso queira utilizar um children especifico, basta usar o indice