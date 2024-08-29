import React, { useState } from "react";
import '../App.css'
export default function Resultado(props){
    const [valor, setValor] = useState(props.measure_value)
    const [id, setId] = useState(props.measure_uuid)
    return(
        <>
            <div className="resultado">
                <img src={props.image_url}/>
                <p>Valor recebido: {props.measure_value}</p>
                <p className="id">ID: <span>{props.measure_uuid}</span></p>
                <form className="form-resultado">
                    <label>ID:</label>
                    <input
                        className='input-text'
                        type="text"
                        placeholder="Insira o ID"
                        value={id}
                        onChange={(e)=>{setId(e.target.value)}}
                        required
                    />
                    <label>Valor</label>
                    <input
                        className='input-text'
                        type="text"
                        placeholder="Insira o Valor"
                        value={valor}
                        onChange={(e)=>{setValor(e.target.value)}}
                        required
                    />
                </form>
                <button className='button-resultado'>Upload</button>
            </div>
        </>
    )
}