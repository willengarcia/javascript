import React, { useState } from 'react';
import '../App.css'
export default function Jogo(){
    const [a1, setA1] = useState('')
    const [a2, setA2] = useState('')
    const [a3, setA3] = useState('')
    const [b1, setB1] = useState('')
    const [b2, setB2] = useState('')
    const [b3, setB3] = useState('')
    const [c1, setC1] = useState('')
    const [c2, setC2] = useState('')
    const [c3, setC3] = useState('')
    const inicio = [['','',''], 
                    ['','',''], 
                    ['','','']]
    const [jogo, setJogo] = useState([['','',''], 
                                    ['','',''], 
                                    ['','','']])
    const [simboloAtual, setSimboloAtual] = useState('X')
    const [jogando, setJogando] = useState(true)
    const tabuleiro = (j)=>{
        return(
            <div className='jogo'>
                <table id='jogo-velha'>
                    <tr>
                        <td data-pos='01' onClick={(e)=>{}}>{j[0][0]}</td>
                        <td data-pos='02' onClick={(e)=>{}}>{j[0][1]}</td>
                        <td data-pos='03' onClick={(e)=>{}}>{j[0][2]}</td>
                    </tr>
                    <tr>
                        <td data-pos='11' onClick={(e)=>{}}>{j[1][0]}</td>
                        <td data-pos='12' onClick={(e)=>{}}>{j[1][1]}</td>
                        <td data-pos='13' onClick={(e)=>{}}>{j[1][2]}</td>
                    </tr>
                    <tr>
                        <td data-pos='21' onClick={(e)=>{}}>{j[2][0]}</td>
                        <td data-pos='22' onClick={(e)=>{}}>{j[2][1]}</td>
                        <td data-pos='23' onClick={(e)=>{}}>{j[2][2]}</td>
                    </tr>
                </table>
            </div>
        )
    }
    const verificaVitoria = ()=>{
        // linhas 
        let pontos = 0
        let vitoria = false
        for(let l =0; l<3; l++){
            pontos = 0
            for(let c = 0; c<3; c++){
                if(jogo[l][c] == simboloAtual){
                    pontos++
                }
            }
            if(pontos == 3){
                vitoria =true
                break
            }
        }

        // colunas
        for(let c =0; c<3; c++){
            pontos = 0
            for(let l = 0; l<3; l++){
                if(jogo[l][c] == simboloAtual){
                    pontos++
                }
            }
            if(pontos == 3){
                vitoria =true
                break
            }
        }

        // diagonais
        pontos = 0
        for(let d = 0; d<3; d++){
            if(jogo[d][d]){
                if(jogo[l][c] == simboloAtual){
                    pontos++
                }
            }
            if(pontos == 3){
                vitoria =true
                break
            }
        }
        pontos = 0
        let l = 0 
        for(let c = 2; c>=0; c--){
            if(jogo[l][c] == simboloAtual){
                pontos++
            }
            if(pontos == 3){
                vitoria =true
                break
            }
        }
        return vitoria
    }

    const trocaJogador = ()=>{
        simboloAtual == 'X'?setSimboloAtual('O'):setSimboloAtual('X')
    }
    const retornaPos = (e)=>{
        const p = e.target.getAttribute('data-pos')
        const pos = [parseInt(p.substring(0,1)), parseInt(p.substring(1,2))]
        return pos
    }
    const verificaEspaco = (e)=>{
        if(jogo[retornaPos(e)[0]][retornaPos[e][1]]==''){
            return true
        }else{
            return false
        }
    }
    return(
    )
}
