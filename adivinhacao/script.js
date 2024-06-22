// const cartas = [...document.querySelectorAll('.cartas')]
// let vidas = cartas.length-1

// cartas.forEach((elemento)=>{
//     elemento.addEventListener('click',(evento)=>{
//         const ele = elemento.classList.toggle('ativo')
//         if(ele){
//             console.log('ativo')
//             const c1 = evento.target
//             const c2 = evento.target
//             console.log(c1)
//             console.log(c2)
//         }else{
//             console.log('desativo')
//         }
        
//     })
// })

let sequence = [];
let playerSequence = [];
let level = 0;

const startButton = document.getElementById('startButton');
const gameButtons = document.querySelectorAll('.cartas');
const message = document.getElementById('message');

startButton.addEventListener('click', startGame);

gameButtons.forEach((button, index) => {
  button.addEventListener('click', () => playerMove(index));
});

function startGame() {
  sequence = [];
  playerSequence = [];
  level = 0;
  message.textContent = 'Memorize a sequência!';
  nextLevel();
}

function nextLevel() {
  level++;
  playerSequence = [];
  message.textContent = `Nível ${level}`;
  sequence.push(Math.floor(Math.random() * gameButtons.length));
  showSequence();
}

function showSequence() {
  let i = 0;
  const interval = setInterval(() => {
    if (i >= sequence.length) {
      clearInterval(interval);
      return;
    }
    const button = gameButtons[sequence[i]];
    button.classList.add('ativo');
    setTimeout(() => {
      button.classList.remove('ativo');
    }, 700);
    i++;
  }, 1000);
}

function playerMove(index) {
  playerSequence.push(index);
  const currentMove = playerSequence.length - 1;

  if (playerSequence[currentMove] !== sequence[currentMove]) {
    endGame(false);
    return;
  }

  if (playerSequence.length === sequence.length) {
    setTimeout(nextLevel, 1000);
  }
}

function endGame(success) {
  if (success) {
    message.textContent = 'Você venceu!';
  } else {
    message.textContent = 'Game over!';
  }
}

