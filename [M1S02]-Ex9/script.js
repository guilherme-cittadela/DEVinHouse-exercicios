let operation = prompt('Qual operação você deseja realizar?')
console.log(operation)
let valor1 = prompt('Digite o primeiro valor: ')
console.log(valor1)
let valor2 = prompt('Digite o segundo valor: ')
console.log(valor2)
let resultado = 0

switch(operation){
    case '+':
        alert(`'O resultado do seu cálculo é: ${Number(valor1)+Number(valor2)}`)
        break

    case '*':
        alert(`'O resultado do seu cálculo é: ${Number(valor1)*Number(valor2)}`)
        break

    case '/':
        alert(`'O resultado do seu cálculo é: ${Number(valor1)/Number(valor2)}`)
        break

    case '-':
        alert(`'O resultado do seu cálculo é: ${Number(valor1)-Number(valor2)}`)
        break;

    default:
        alert('Error')
}
