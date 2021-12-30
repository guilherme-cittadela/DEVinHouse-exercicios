let sum = document.getElementById('btn-sum')
let minus = document.getElementById('btn-minus')
let multiply = document.getElementById('btn-multiplication')
let division = document.getElementById('btn-division')
let showResult = document.getElementById('result')
console.log(showResult)

sum.onclick = function(){
    let numberOne = document.getElementById('number-one').value
    let numberTwo = document.getElementById('number-two').value
    result = Number(numberOne) + Number(numberTwo)
    showResult.value = result
    
}


minus.onclick = function(){
    let numberOne = document.getElementById('number-one').value
    let numberTwo = document.getElementById('number-two').value
    result = numberOne - numberTwo
    showResult.value = result
}   


multiply.onclick = function(){
    let numberOne = document.getElementById('number-one').value
    let numberTwo = document.getElementById('number-two').value
    result = numberOne * numberTwo
    showResult.value = result
}
division.onclick = function(){
    let numberOne = document.getElementById('number-one').value
    let numberTwo = document.getElementById('number-two').value
    result = numberOne / numberTwo
    showResult.value = result
}