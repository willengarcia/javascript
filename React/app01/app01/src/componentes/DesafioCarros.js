import React, { useState } from "react";

export default function DesafioCarros(){
    const [categoria, setCategoria] = useState("")
    const [carros, setCarro] = useState({"categoria":['A', 'B', 'C', 'A'], "carros":['A1', 'B2', 'C3', 'D4'], "preco":[1, 2, 3, 4]})
    const add = ()=>{
        const input = document.getElementById('adicionar').value
        const [cat, car, pre] = input.split('-')
        setCarro({"categoria":['A', 'B', 'C', 'A', cat], "carros":['A1', 'B2', 'C3', 'D4', car], "preco":[1, 2, 3, 4, parseInt(pre)]})
    }
    const dados = ()=>{
        return carros.categoria.map((el, i) => {
            if (el.toUpperCase() === categoria.toUpperCase()) {
                return (
                    <tr key={i}> {/* Cada <tr> deve ter uma key única */}
                        <td>{el}</td>
                        <td>{carros.carros[i]}</td>
                        <td>{carros.preco[i]}</td>
                    </tr>
                    );
                }else {
                    return null// Retorne null ao invés de um <p> para manter a estrutura da tabela
            }
        })
    }
    return(
        <div>
            <label>Digite a Categoria do Carro:</label>
            <input type="text" value={categoria} onChange={(e)=>{setCategoria(e.target.value)}}></input>
            <table>
                <thead>
                    <tr>
                        <td>Categoria</td>
                        <td>Carro</td>
                        <td>Preço</td>
                    </tr>
                    
                </thead>
                <tbody>
                    {dados()}
                </tbody>
            </table>
            <label>Insira mais dados</label>
            <input type="text" placeholder="Categoria-Carro-Preco" id="adicionar"></input>
            <button onClick={()=>{add()}}>Adicionar</button>
        </div>
    )
}