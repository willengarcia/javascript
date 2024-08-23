import React from  'react' // Importa do React, o modulo react
import './App.css' // Importa o Css 
import Logo from './componentes/imagens/logo192.png'
import Header from './componentes/Header' // Importando um Componente
import Corpo from './componentes/Corpo'
import Dados from './componentes/Dados'
/* 
  Importar imagens caso esteja dentro do SRC
  Criar uma pasta dentro de SRC, e dentro dessa pasta fazer outra pasta com o nome 'imagens'
  import <nome da importacao> from '/caminho/da/imagem'

  Caso estea dentro de PUBLIC
  Basta ir em src da tag img, e colocar o caminho relativo da imagem
*/

function App(){
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
      <h1 className={curso} style={{color:'red'}}>Teste{canal}</h1>
      <p style={formatacaoCss}>{funcao()}</p>
      <img src={Logo}/>
    </>
  )
}
// Para atribuir uma classe na tag, basta utilizar o className='nome da classe'
// Para fazer a estilização inline, se usar os atributos css diretamente: style={{atributos:'valores'}}, ou usando objeto literal style={objeto Literal}, ou pode importar pelo CSS: import './App.css', lembrando que utilizando essa maneira, os filhos herdarão os atributos css
// Ao declarar uma propriedade, basta utilizar o nome da propriedade, e o valor, que pode ser uma função ou uma variável
// Sempre que for utilizar alguma expressão dentro do 'html', tem que conter {}
// Só pode retornar um componente por vez
// Por padronização, a tag tem que ter o fechamento dela, se não causa erro
export default App // Exporta o nome da função para redenrizar no index.js