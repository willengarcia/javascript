import React, { useCallback, useState } from "react";

export default function Imc(){
    const [peso, setPeso] = useState('0')
    const [altura, setAltura] = useState('0')

    const calcular = () =>{
        return <p>Resultado: {peso/(altura*altura)}</p>
    }
    return(
        <>
            <div>
                <form>
                    <label>Informe seu Peso:</label>
                    <input type="number" placeholder="Em KG" value={peso}
                    onChange={(e)=>{setPeso(e.target.value)}}></input>
                    <br></br>
                    <label>Informe sua altura:</label>
                    <input type="number" placeholder="1.70" value={altura}
                    onChange={(e)=>{setAltura(e.target.value)}}></input>
                </form>
                {calcular()}
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Classificação</td>
                        <td>IMC</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Abaixo do Peso</td>
                        <td>Abaixo de 18.5</td>
                    </tr>
                    <tr>
                        <td>Peso Normal</td>
                        <td>Entre 18.5 e 24.9</td>
                    </tr>
                    <tr>
                        <td>Sobrepeso</td>
                        <td>Entre 25 e 29.9</td>
                    </tr>
                    <tr>
                        <td>Obesidade grau I</td>
                        <td>Entre 30 e 34.9</td>
                    </tr>
                    <tr>
                        <td>Obesidade grau II</td>
                        <td>Entre 35 e 39.9</td>
                    </tr>
                    <tr>
                        <td>Obesidade grau III</td>
                        <td>Maior que 40</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}