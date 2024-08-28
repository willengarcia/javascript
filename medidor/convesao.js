const fs = require('fs');

function imageToBase64(filePath) {
  const image = fs.readFileSync(filePath);
  return `data:image/png;base64,${image.toString('base64')}`;
}

const base64Image = imageToBase64('AGUA-1.png'); // Substitua pelo caminho da sua imagem
console.log(base64Image);
