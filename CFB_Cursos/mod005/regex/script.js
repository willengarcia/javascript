let nome = 'Willen 0005'
let email = 'willen.garcia05@gmail.com'
// nome.search('w') encontra a letra ou a palavra
// nome.search(/n/i) encontra a letra ou a palavra sem diferenciar das maiusculas e minusculas (CaseSensitive)
// nome.match(/l/g) retorna as letras ou palavras que estão na variavel
// nome.replace(/w/i, 'e') retorna uma palavra modificada pela segunda
// nome.match(/[ln]/g) retorna a letra l e n da palavra (só vale se tiver no colchetes)
// email.match(/[a-z]/ig) retorna de a ate é z, todas as letras
// email.match(/[a-w|0-9]/ig) retorna de a até w e(|) de 0 até 9
// email.match(/\d/ig) retorna o dígito númerico
// console.log(email.match(/\s/ig)) retorna espaços

console.log(nome.search(/n/i))
console.log(nome.match(/l/g))
console.log(nome.replace(/w/i, 'e'))
console.log(nome.replace(/l/ig, 'e'))
console.log(nome.match(/[ln]/g))
console.log(email.match(/[a-w|0-9]/ig))
// Metacaractere
console.log(email.match(/\d/ig))
console.log(email.match(/\s/ig))
console.log(email.match(/\b/ig))
// Quantificadores
console.log(nome.match(/l+|\d0+/ig))
console.log(nome.match(/\d0*/ig))
console.log(nome.match(/\d0?/ig))