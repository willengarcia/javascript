import React from "react";

class Classe extends React.Component{
    constructor(props){
        super(props)
        this.carro = 'gold'
        this.state = {
            ligado: false,
            velAtual: 0,

        }
        this.ld = this.ligarDesligar.bind(this)
    }
    ligarDesligar() {
        if(this.state.ligado == false){
            this.setState({ligado:true})
        }else {
            this.setState({ligado:false})
        }
        
    }
    acelerar(){
        this.setState(
            (state, props)=>({velAtual:state.velAtual+props.fator})
        )
    }
    componentDidMount(){
        console.log('O carro foi criado')
    }
    componentDidUpdate(){
        console.log('O carro foi atualizado')
    }
    componentWillUnmount(){
        console.log('O carro foi removido')
    }
    render(){
        return(
            <>
            <h1>
                Primeiro Componente de Classe {this.props.canal}
            </h1>
            <h2>Usando Variável {this.carro}</h2>
            <p>Ligado {this.state.ligado?'Sim':'Não'}</p>
            <p>Velocidade {this.state.velAtual}</p>
            <button onClick={()=>{this.ligarDesligar()}}>{this.state.ligado?"Desligar":"Ligar"}</button>
            <button onClick={()=>{this.acelerar()}}>Acelerar</button>
            </>
            
        )
    }
}

export default Classe

// O uso do BIND é para ligação, o que permite o conceito de this apontando para outro elemento, ou seja, a sintaxe seria:
/*
    const novaReferencia = antigaReferencia.bind(referenciaAtual)
*/
// Usando o setState dentro de uma classe, para uma boa prática, basta utilizar a seguinte sintaxe:
/*
    metodo(){
        this.setState(
            (state, props)=>({chave:state.valor+props.propriedade-da-tag})
        )
    }
*/
// Para atualizar o valor do state, tem que criar um método e colocar dentro dele um this.setState({chave:valor}) para poder atualizar os dados
// Para o uso de State em classe, basta utilizar this.state = {chave: valor}
// Em classe, as propriedades que foram passadas para a classe no App.js, o props vai no construtor
// Para finalmente herdar, basta usar depois o super(props), já que ele vai herdar o construtor da classe que está sendo importada, que no caso seria o React.Component
// Para finalmente instanciar  valor na propriedade, basta utilizar o this.props.nome-da-propriedade