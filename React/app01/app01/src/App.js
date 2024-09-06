import React, { useState, useEffect } from  'react' // Importa do React, o modulo react
import './App.css' // Importa o Css 
import Header from './componentes/Header' // Importando um Componente
import DesafioCarros from './componentes/DesafioCarros'
import Imc from './componentes/Imc'
import Calculadora from './componentes/Calculadora'
import Jogo from './componentes/Jogo'

/* 
  Importar imagens caso esteja dentro do SRC
  Criar uma pasta dentro de SRC, e dentro dessa pasta fazer outra pasta com o nome 'imagens'
  import <nome da importacao> from '/caminho/da/imagem'

  Caso estea dentro de PUBLIC
  Basta ir em src da tag img, e colocar o caminho relativo da imagem
*/

function App(){
  return(
    <>
      <Jogo></Jogo>
    </>
  )
}

// Toda vez que a página é montada, ou atualizada, ele usa a Hook useEffect
// Elevação de State, é quando eu passo os valores da função principal para os outros comonentes, usando props
// Uma das formas de pegar os valores de um input, é usando o state, e no input atribuindo o atributo 'value' na tag, como o primeiro state, e aplicando o evento onChange, com o parametro value da propria tag.
// Para trabalhar com retornos de valores de listas e objetos(json), aa melhor função é o .map()
// O uso do setState serve para atualização automática de uma 'variável' sem precisar salvar e para a utilizacao é: const [variavel, setVariavel] = setState, onde o setVariavel serve para atualizar o valor da variavel. Nota importante é que pode ser utilizado a alteração de componentes diferentes com State usando Props
// Para atribuir uma classe na tag, basta utilizar o className='nome da classe'
// Para fazer a estilização inline, se usar os atributos css diretamente: style={{atributos:'valores'}}, ou usando objeto literal style={objeto Literal}, ou pode importar pelo CSS: import './App.css', lembrando que utilizando essa maneira, os filhos herdarão os atributos css
// Ao declarar uma propriedade, basta utilizar o nome da propriedade, e o valor, que pode ser uma função ou uma variável
// Sempre que for utilizar alguma expressão dentro do 'html', tem que conter {}
// Só pode retornar um componente por vez
// Por padronização, a tag tem que ter o fechamento dela, se não causa erro
export default App // Exporta o nome da função para redenrizar no index.js

/*
  const [carro, setCarro] = useState(true)
  const ocultaCarro = ()=>{
    setCarro(!carro)
  }
  const [nome, setNome] = useState('')
  const armazenar = (chave, valor)=>{
    localStorage.setItem(chave, valor)
  }
  const consultar = (chave)=>{
    if(localStorage.getItem(chave) == null || localStorage.getItem(chave) == undefined){
      alert('Usuário não encontrado na Base')
    }else{
      alert(localStorage.getItem(chave))
    }
    
  }
  const apagar = (chave)=>{
    localStorage.removeItem(chave)
  }
  localStorage.setItem("nome","bruno") // Adiciona uma chave
  localStorage.getItem("nome") // Pegar o valor de uma chave
  localStorage.removeItem("nome") // Remover chave
  const [contagem, setContagem] = useState(0)
  useEffect(
    ()=>{console.log('Página carregada')
      document.title = `contagem: ${contagem}`
    }
  )
  const [notas, setNotas] = useState({"nota1": "0", "nota2": "0", "nota3": "0"})
  const handleSetNotas = (e) =>{
    if(e.target.getAttribute('name') == 1){
      setNotas({"nota1": e.target.value, "nota2": notas.nota2, "nota3": notas.nota3})
    }else if(e.target.getAttribute('name') == 2){
      setNotas({"nota1": notas.nota1, "nota2": e.target.value, "nota3": notas.nota3})
    }else if(e.target.getAttribute('name') == 3){
      setNotas({"nota1": notas.nota1, "nota2": notas.nota2, "nota3": e.target.value})
    }
    
  }
  localStorage.setItem("nome","bruno") // Adiciona uma chave
  localStorage.getItem("nome") // Pegar o valor de uma chave
  localStorage.removeItem("nome") // Remover chave
  const [form, setForm] = useState({"nome": "", "idade": "", "curso": ""})
  const handleChange = (e)=>{
    if(e.target.getAttribute('name') == 'nome'){
      setForm({"nome": e.target.value, "idade": form.idade, "curso": form.curso})
    }else if(e.target.getAttribute('name') == 'idade'){
      setForm({"nome": form.nome, "idade": e.target.value, "curso": form.curso})
    }else if(e.target.getAttribute('name') == 'curso'){
      setForm({"nome": form.nome, "idade": form.idade, "curso": e.target.value})
    }
  }
  const [carro, setCarro] = useState('Outro')
  const [nome, setNome] = useState('')
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
*/


/* <>
      <Header/>
      <Corpo></Corpo>
      <Dados canal={funcaoTeste} curso={somar}></Dados>
      <Relogio></Relogio>
      <Nota num={1} nota={notas.nota1} setNota={handleSetNotas}></Nota>
      <Nota num={2} nota={notas.nota2} setNota={handleSetNotas}></Nota>
      <Nota num={3} nota={notas.nota3} setNota={handleSetNotas}></Nota>
      <Resultado somaNotas={parseFloat(notas.nota1)+parseFloat(notas.nota2)+parseFloat(notas.nota3)}></Resultado>
      <Filhos>
        <h2>Filho secundário do componente App na posição 1</h2>
        <p>Filho secundário do componente App na posição 2</p>
      </Filhos>
      <p>Contagem: {contagem}</p>
      <button onClick={()=>{setContagem(contagem+1)}}>Contar</button>
      <div>
        <label>Digite seu nome:</label>
        <input type='text' value={nome} onChange={(e)=>{setNome(e.target.value)}}></input>
        <p>Seu nome: {nome}</p>
        <button onClick={(e)=>{armazenar(nome, nome)}}>Inserir</button>
        <button onClick={(e)=>{apagar(nome)}}>apagar</button>
        <button onClick={(e)=>{consultar(nome)}}>Consultar</button>
      </div>
      {carro?<Classe canal='CFB Cursos' fator={1}></Classe>:''}
      <button onClick={()=>{ocultaCarro()}}>Ocultar</button>
      <p>{'canal: '+ Globais.canal}</p>
      <div>
        <label>Nome</label>
        <input name='nome' value={form.nome} onChange={(e)=>{handleChange(e)}}></input>
        <br/>
        <label>Idade</label>
        <input name='idade' value={form.idade} onChange={(e)=>{handleChange(e)}}></input>
        <br/>
        <label>Curso</label>
        <input name='curso' value={form.curso} onChange={(e)=>{handleChange(e)}}></input>
        <br/>
        <p>Nome: {form.nome}</p>
        <p>Idade: {form.idade}</p>
        <p>Curso: {form.curso}</p>
      </div>
      <div>
        <label>Selecione um Carro</label>
        <select value={carro} onChange={(e)=>{setCarro(e.target.value)}}>
          <option value={'HRV'}>HRV</option>
          <option value={'Chevrolet'}>Chevrolet</option>
          <option value={'Corola'}>Corola</option>
          <option value={'Hillux'}>Hillux</option>
          <option value={'Ônix'}>Ônix</option>
        </select>
        <p>Carro Selecionado: {carro}</p>
      </div>
      <div>
        <label>Nome</label>
        <input name='nome' type='text' value={nome} onChange={(e)=>{setNome(e.target.value)}}></input>
        <p>Nome digitado: {nome}</p>
      </div>
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
    </> */