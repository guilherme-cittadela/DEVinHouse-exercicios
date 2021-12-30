num = document.getElementById("number")
btnCheck = document.getElementById("btn-check")
result = document.getElementById("result")


btnCheck.onclick = function checkNumber(){
    
    if(num.value%2==0){
        
        result.innerText = `O número ${num.value} é par!`
    }
    else{
        result.innerText = `O número ${num.value} é ímpar!`
    }
    num.value=""
    
}   