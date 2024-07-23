const canva = document.getElementById('canva')
let contexto = canva.getContext('2d') // todo o contexto vai ser feito aqui
// --------- BASE
// contexto.fillStyle = 'rgb(0,0,255)' // definir o preenchimento
// contexto.rect(0,0,50,50) // X, Y, W, H desenhar o elemento preenchido
// contexto.fill() // redenizao preenchimento
// contexto.clearRect(0,0, 25,25) // apaga a área definida para atualizar o desenho: X, Y, W, H

// _________ Utilizando Classes
// class Retangulo{
//     constructor(canva, x, y, w, h, cor){
//         this.Elemento = document.getElementById(canva)
//         this.X = x
//         this.Y = y
//         this.W = w
//         this.H = h
//         this.Cor = cor
//         this.Contexto = this.Elemento.getContext('2d')
//     }
//     desenhar(){
//         this.Contexto.fillStyle = this.Cor
//         this.Contexto.fillRect(this.X, this.Y, this.W, this.H)
//     }
//     limpar(x,y,w,h){
//         this.Contexto.clearRect(x,y,w,h)
//     }
// }
// let retangulo1 = new Retangulo('canva', 0, 0, 300, 300, 'rgb(255,0,0)')
// let retangulo2 = new Retangulo('canva', 50, 60, 50, 50, 'rgb(0,255,0)')
// retangulo1.desenhar()
// retangulo1.limpar(0,30,100,100)

// ------------------- Linhas

// contexto.moveTo(0,0) // posicao da linha: x(para direita),y(para baixo)
// contexto.lineTo(255,255) // direcao da linha: x,y
// contexto.moveTo(255,255)
// contexto.lineTo(50, 0)
// contexto.stroke()