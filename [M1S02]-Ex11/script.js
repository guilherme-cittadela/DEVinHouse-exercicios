let initial = parseInt(prompt('Escolha o valor inicial: '))
let raiz = parseInt(prompt('Escolha a raiz: '))
let resultado = 0
let count = 1
let pa = initial
array = new Array()
array.push(initial)


while(count<10){
    pa+=raiz
    console.log(pa)
    array.push(pa)
    console.log(array)
    count++
}

alert(`A progresssão aritmética para o valor inicial ${initial} e raiz ${raiz} é: ${array}`)