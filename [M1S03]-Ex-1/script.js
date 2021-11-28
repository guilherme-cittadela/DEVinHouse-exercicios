const btn = document.querySelector('.btn-ex')

btn.onclick = function(e){
    e.preventDefault()
    let birthday = document.getElementById('birthday').value
    let today = new Date()
    let actualYear = today.getFullYear()
    let actualMonth = today.getMonth()
    let birthYear = birthday.split('-')
    let birthMonth = birthYear[1]
    let age = (Number(actualYear) - Number(birthYear[0]))
    
    document.querySelector('#result').innerHTML = `
        <div>
            <span id="age">
            Você tem ${age} anos de vida!
            </span>
        </div>
    `
        
}