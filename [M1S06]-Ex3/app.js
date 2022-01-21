let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let invertedArray = []

const arrayInvert = (arr, inverted) =>{
    for(let v = arr.length - 1 ; v >=0; --v)
    inverted.push(arr[v])
    document.querySelector('#result').innerHTML=`
    <p>Array normal:    ${arr}  <br> 
    Array invertido: ${inverted}</p>
    `
}

window.onload = () => {
    arrayInvert(array, invertedArray)
    

}

const found = array.find (value => value > 5)
document.querySelector('#result2').innerHTML = `
    <p>O primeiro número maior que 5 no array é ${found} `