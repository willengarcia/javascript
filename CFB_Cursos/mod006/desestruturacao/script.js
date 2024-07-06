let a,b,c
[a,b,c] = [10,20,40]
console.log(a)

let d,e,f
({d,e,f}={d:'oi', e:'sla', f:12})
console.log(d)

let numeros=[1,2,3]
let [g,h,i] = numeros
console.log(g)

let matriz = [[1,2,3], [4,5,6]]
let [j,k] = matriz
console.log(k)

let num = ()=>{
    return [10,20,30]
}
let [n1, n2, n3] = num()
console.log(n1)

let array = [11,12,13,14]
let [a1,a2,...a3] = array
console.log(a3)

let nu = ()=>{
    return ['a','b','c','d']
}
let [n11,n12,,n13] = nu()
console.log(n13)