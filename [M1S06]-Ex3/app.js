let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let invertedArray = []

const arrayInvert = (arr, inverted) =>{
    for(let v = arr.length - 1 ; v >=0; --v)
    inverted.push(arr[v])
    document.querySelector('#result').innerHTML=`
    Array normal:    ${arr}  <br> 
    Array invertido: ${inverted}
    `
}

window.onload = () => {
    console.log(arrayInvert(array, invertedArray))

}