const canva = document.getElementById('canva')
let contexto = canva.getContext('2d')
function desenha(){
    for(let i = 0; i<10;i++){
        contexto.arc(255,255, 100, ((Math.PI/180)*0), ((Math.PI/180)*360), false) // x, y, raio, angulo inicial, angulo final, sentido(true: horário, false:anti-horário)
        contexto.fill()
    }
}
desenha()