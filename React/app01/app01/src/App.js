import React, { useState } from  'react' // Importa do React, o modulo react
import './App.css' // Importa o Css 
import Logo from './componentes/imagens/logo192.png'
import Header from './componentes/Header' // Importando um Componente
import Corpo from './componentes/Corpo'
import Dados from './componentes/Dados'
import Relogio from './componentes/Relogio'
import Numero from './componentes/Numero'
import Imagem192 from './componentes/imagens/logo192.png'
import Imagem512 from './componentes/imagens/logo512.png'
/* 
  Importar imagens caso esteja dentro do SRC
  Criar uma pasta dentro de SRC, e dentro dessa pasta fazer outra pasta com o nome 'imagens'
  import <nome da importacao> from '/caminho/da/imagem'

  Caso estea dentro de PUBLIC
  Basta ir em src da tag img, e colocar o caminho relativo da imagem
*/

function App(){
  const listas = [<p>Lista 1</p>, <p>Lista 2</p>, <p>Lista 3</p>, <p>Lista 4</p>]
  const mudaCor = `rgb(${parseInt(Math.random()*255)}, ${parseInt(Math.random()*255)}, ${parseInt(Math.random()*255)})`
  const cumprimento = ()=>{
    const hora = new Date().getHours()
    if(hora >=0 && hora <13){
      return <p>Bom dia</p>
    }else if(hora >= 13 && hora < 18){
      return <p>Boa tarde</p>
    }else{
      return <p>Boa noite</p>
    }
  }
  const [cumprimentar, setCumprimentar] = useState(cumprimento())
  const [num, setNum] = useState(10)
  const [imagem, setImagem] = useState(false)
  const funcao = ()=>{
    return  'funcao de retorno'
  }
  const canal = 'teste1'
  const curso = 10
  const funcaoTeste = ()=>{
    return 'CFB Cursos'
  }
  const somar = (v1, v2)=>{
    return v1+v2
  }
  const formatacaoCss = {
    fontSize: '17px',
    textAlign: 'center'
  }
  return(
    <>
      <Header/>
      <Corpo></Corpo>
      <Dados canal={funcaoTeste} curso={somar}></Dados>
      <Relogio></Relogio>
      {listas.map((el)=>{return el})}
      <button onClick={(elemento)=>{elemento.target.style.backgroundColor = mudaCor}}>Mudar Cor</button>
      <p>{cumprimentar}</p>
      <p>Valor do State num em App: {num}</p>
      <Numero num={num} setNum={setNum}></Numero>
      <img src={imagem?Imagem192:Imagem512}></img>
      <button onClick={()=>{setImagem(!imagem)}}>{imagem?'Ligado':'Desligado'}</button>
      <h1 className={curso} style={{color:'red'}}>Teste{canal}</h1>
      <p style={formatacaoCss}>{funcao()}</p>
      <img src={Logo}/>
    </>
  )
}

// Para trabalhar com retornos de valores de listas e objetos(json), aa melhor função é o .map()
// O uso do setState serve para atualização automática de uma 'variável' sem precisar salvar e para a utilizacao é: const [variavel, setVariavel] = setState, onde o setVariavel serve para atualizar o valor da variavel. Nota importante é que pode ser utilizado a alteração de componentes diferentes com State usando Props
// Para atribuir uma classe na tag, basta utilizar o className='nome da classe'
// Para fazer a estilização inline, se usar os atributos css diretamente: style={{atributos:'valores'}}, ou usando objeto literal style={objeto Literal}, ou pode importar pelo CSS: import './App.css', lembrando que utilizando essa maneira, os filhos herdarão os atributos css
// Ao declarar uma propriedade, basta utilizar o nome da propriedade, e o valor, que pode ser uma função ou uma variável
// Sempre que for utilizar alguma expressão dentro do 'html', tem que conter {}
// Só pode retornar um componente por vez
// Por padronização, a tag tem que ter o fechamento dela, se não causa erro
export default App // Exporta o nome da função para redenrizar no index.js