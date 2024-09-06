import React, { useEffect, useState } from "react";

export default function Calculadora(){
    const [valorTela, setValorTela] = useState('')
    const [resultado, setResultado] = useState(0)
    const [acumulado, setAcumulado] = useState(0)
    const [operador, setOperador] = useState(false)

    const tela = (val, res) =>{
        return(
            <div className="tela">
                <span>{val}</span>
                <span>{res}</span>
            </div>
        )

    }
    const btn = (label, onclick)=>{
        return(
            <button onClick={onclick}>{label}</button>
        )
    }

    // Funções
    const addDigitoTela = (dig) =>{
        if((dig == "+" || dig == "-" || dig == "*" || dig == "/") && operador){
            console.log('teste')
            setOperador(false)
            setValorTela(resultado+dig)
            return
        }
        if(operador){
            setValorTela(dig)
            setOperador(false)
            return
        }
        const valorDigitadoTela = valorTela+dig
        setValorTela(valorDigitadoTela)
    }
    const limparMemoria =  ()=>{
        setOperador(false)
        setValorTela(0)
        setResultado(0)
        setAcumulado(0)
        return
    }
    const operacao = (oper) =>{
        if(oper == 'bs'){
            let vTela = valorTela
            vTela = vTela.substring(0, vTela.length-1)
            setValorTela(vTela)
            setOperador(false)
            return
        }else{
            try{
                const r = eval(valorTela)
                setAcumulado(r)
                setResultado(r)
                setOperador(true)
            }catch{
                setResultado('ERRO')
            }
        }
    }
    return(
        <div className="calculadora">
            <p>Calculadora Matemática Simples</p>
            <div className="numeros">
            {tela(valorTela, resultado)}
                <table>
                    <tr>
                        <td onClick={()=>{limparMemoria()}}>AC</td>
                        <td onClick={(e)=>{addDigitoTela(e.target.innerHTML)}}>(</td>
                        <td onClick={(e)=>{addDigitoTela(e.target.innerHTML)}}>)</td>
                        <td onClick={(e)=>{addDigitoTela(e.target.innerHTML)}}>/</td>
                    </tr>
                    <tr>
                        <td onClick={(e)=>{addDigitoTela(e.target.innerHTML)}}>7</td>
                        <td onClick={(e)=>{addDigitoTela(e.target.innerHTML)}}>8</td>
                        <td onClick={(e)=>{addDigitoTela(e.target.innerHTML)}}>9</td>
                        <td onClick={(e)=>{addDigitoTela(e.target.innerHTML)}}>*</td>
                    </tr>
                    <tr>
                        <td onClick={(e)=>{addDigitoTela(e.target.innerHTML)}}>4</td>
                        <td onClick={(e)=>{addDigitoTela(e.target.innerHTML)}}>5</td>
                        <td onClick={(e)=>{addDigitoTela(e.target.innerHTML)}}>6</td>
                        <td onClick={(e)=>{addDigitoTela(e.target.innerHTML)}}>-</td>
                    </tr>
                    <tr>
                        <td onClick={(e)=>{addDigitoTela(e.target.innerHTML)}}>1</td>
                        <td onClick={(e)=>{addDigitoTela(e.target.innerHTML)}}>2</td>
                        <td onClick={(e)=>{addDigitoTela(e.target.innerHTML)}}>3</td>
                        <td onClick={(e)=>{addDigitoTela(e.target.innerHTML)}}>+</td>
                    </tr>
                    <tr>
                        <td onClick={(e)=>{addDigitoTela(e.target.innerHTML)}}>0</td>
                        <td onClick={(e)=>{addDigitoTela(e.target.innerHTML)}}>.</td>
                        <td onClick={(e)=>{btn('<', operacao('bs'))}}>&lt;</td>
                        <td onClick={(e)=>{btn('=', operacao(' '))}}>=</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}