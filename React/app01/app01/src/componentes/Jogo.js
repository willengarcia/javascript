import React, { useState } from 'react';
import '../App.css'
export default function Jogo(){
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
                        <td data-pos='00' onClick={(e)=>joga(e)}>{j[0][0]}</td>
                        <td data-pos='01' onClick={(e)=>joga(e)}>{j[0][1]}</td>
                        <td data-pos='02' onClick={(e)=>joga(e)}>{j[0][2]}</td>
                    </tr>
                    <tr>
                        <td data-pos='10' onClick={(e)=>joga(e)}>{j[1][0]}</td>
                        <td data-pos='11' onClick={(e)=>joga(e)}>{j[1][1]}</td>
                        <td data-pos='12' onClick={(e)=>joga(e)}>{j[1][2]}</td>
                    </tr>
                    <tr>
                        <td data-pos='20' onClick={(e)=>joga(e)}>{j[2][0]}</td>
                        <td data-pos='21' onClick={(e)=>joga(e)}>{j[2][1]}</td>
                        <td data-pos='22' onClick={(e)=>joga(e)}>{j[2][2]}</td>
                    </tr>
                </table>
            </div>
        )
    }
    const btnNovamente = ()=>{
        if(!jogando){
            return<button onClick={()=>reiniciar()}>Jogar Novamente</button>
        }
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
                vitoria = true
                return
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
            if(jogo[d][d] == simboloAtual){
                pontos++
            }
        }
        if(pontos == 3){
            vitoria =true
        }
        pontos = 0
        let l = 0  
        for(let c = 2; c>=0; c--){
            if(jogo[l][c] == simboloAtual){
                pontos++
            }
            l++
        }
        if(pontos == 3){
            vitoria =true
        }
        return vitoria
    }
    const trocaJogador = ()=>{
        simboloAtual == 'X'?setSimboloAtual('O'):setSimboloAtual('X')
    }
    const retornaPos = (e)=>{
        const p = e.target.getAttribute('data-pos')
        const pos = [parseInt(p.substring(0,1)), parseInt(p.substring(1,2))]
        console.log(pos)
        return pos
    }
    const verificaEspaco = (e)=>{
        if(jogo[retornaPos(e)[0]][retornaPos(e)[1]]==''){
            return true
        }else{
            return false
        }
    }
    const joga = (el) =>{
        if(jogando){
            if(verificaEspaco(el)){
                jogo[retornaPos(el)[0]][retornaPos(el)[1]] = simboloAtual
                trocaJogador()
                if(verificaVitoria()){
                    trocaJogador()
                    alert('Jogador ' + simboloAtual + ' venceu!')
                    setJogando(false)
                }
            }else{
                alert('Esse espaço já está em uso')
            }
        }
    }
    const reiniciar = ()=>{
        setJogando(true)
        setJogo(inicio)
        setSimboloAtual('X')
    }
    return(
        <>
            {'Quem joga:' + simboloAtual}
            <div>
                {tabuleiro(jogo)}
            </div>
            <div>
                {btnNovamente()}
            </div>
        </>
    )
}
