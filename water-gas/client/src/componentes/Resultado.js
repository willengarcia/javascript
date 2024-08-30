import React, { useState } from "react";
import '../App.css'
import Erros from "./Erros";

export default function Resultado(props){

    const [uuid, setUuid] = useState('');
    const [customerCode, setCustomerCode] = useState('');

    const [erro, setErro] = useState(false)

    const [erros, setErros] = useState({"error_code": "", "error_description":""})

    const aparecerErro = ()=>{
        if(erro == true) {
            return <Erros erro_codigo={erros.error_code} descricao={erros.error_description}></Erros>
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            measure_uuid: uuid, // Certifique-se de que a imagem é uma string codificada em Base64
            confirmed_value: parseInt(customerCode),
        };
        try {
            const response = await fetch('/confirm', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            console.log(response.status)
            if(response.status === 404){
                setErros({"error_code": `${result.error_code}`, "error_description":`${result.error_description}`})
                setErro(true)
                console.log(result.error_code)
            }else if (response.status === 409){
                setErros({"error_code": `${result.error_code}`, "error_description":`${result.error_description}`})
                setErro(true)
                console.log(result.error_code)
            }
        } catch (err) {
            console.error('Error uploading:', err);
        }
    };
    return(
        <>
            {aparecerErro()}
            <div className="resultado">
                <img src={props.image_url}/>
                <p>Valor recebido: {props.measure_value}</p>
                <p className="id">ID: <span>{props.measure_uuid}</span></p>
                <form className="form-resultado" onSubmit={handleSubmit}>
                    <label>ID:</label>
                    <input
                        className='input-text'
                        type="text"
                        placeholder="Insira o ID"
                        value={uuid}
                        onChange={(e)=>{setUuid(e.target.value)}}
                        required
                    />
                    <label>Valor</label>
                    <input
                        className='input-text'
                        type="text"
                        placeholder="Insira o Valor"
                        value={customerCode}
                        onChange={(e)=>{setCustomerCode(e.target.value)}}
                        required
                    />
                    <button className='button-resultado' type="submit">Upload</button>
                </form>
            </div>
        </>
    )
}