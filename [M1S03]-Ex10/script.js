let btnPa = document.querySelector('#btn-pa')
let btnPg = document.querySelector('#btn-pg')
let btnClean = document.querySelector('#btn-clean')

btnPa.onclick = function(){
    let string = "aritmética"
    let initial = document.getElementById('initial-number')
    let root = document.getElementById('root-number')
    if (initial.value == '' || root.value == ''){
        window.alert('Digite o valor inicial e a raíz!')
    }
    else{
        let rootNumber = Number(root.value)  
        let initialNumber = Number(initial.value)
        array = new Array()
        array.push(initialNumber)
        let count = 1
        
        while(count<10){
            initialNumber+=rootNumber
            array.push(initialNumber)
            count++
        }
        showResult(initial.value, root.value, array, string)
        clearInput(initial, root, array)
        
    }
}

btnPg.onclick = function(){
    let string = "geométrica"
    let initial = document.getElementById('initial-number')
    let root = document.getElementById('root-number')
    if (initial.value == '' || root.value == ''){
        window.alert('Digite o valor inicial e a raíz!')
    }
    else{
        let rootNumber = Number(root.value)  
        let initialNumber = Number(initial.value)
        array = new Array()
        array.push(initialNumber)
        let count = 1
        
        while(count<10){
            initialNumber = initialNumber*rootNumber
            array.push(initialNumber)
            count++
        }
        showResult(initial.value, root.value, array, string)
        clearInput(initial, root, array)
        
    }
}

btnClean.onclick = function(){
    document.querySelector("#result").innerHTML = ""
}

function clearInput(v1,v2,array){
    v1.value= ''
    v2.value = ''
    array.splice(0,array.length)
}

function showResult(i,r,v, string){
    document.querySelector("#result").innerHTML += `O resultado da progressão ${string} iniciando em ${i} e com raiz ${r} é: ${v} <br> `
}