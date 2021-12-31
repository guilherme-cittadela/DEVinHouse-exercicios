const data = new Date()
let content = document.querySelector('#content')
let month = (data.getMonth())+1
let day = data.getDate()

function checkSummer(){
    if (month == 12 && day>=22){
        return true
    }
    else if(month==3 && day<=22){
        return true
    }
    else if(month == 1 || month == 2){
        return true
    }
    else return false
}

function checkAutumn(){
    if (month == 3 && day>22){
        return true
    }
    else if(month==6 && day<21){
        return true
    }
    else if(month == 4 || month == 5){
        return true
    }
    else return false
}

function checkWinter(){
    if (month == 6 && day>=21){
        return true
    }
    else if(month==9 && day<=22){
        return true
    }
    else if(month == 7 || month == 8){
        return true
    }
    else return false
}

function checkSpring(){
    if (month == 9 && day>22){
        return true
    }
    else if(month==12 && day<=21){
        return true
    }
    else if(month == 10 || month == 11){
        return true
    }
    else return false
}

window.onload = function(){
    if(checkSummer()){
        summerContent()
    }
    if(checkAutumn()){
        autumnContent()
    }
    if(checkWinter()){
        winterContent()
    }
    if(checkSpring()){
        springContent()
    }
}


function summerContent(){
    content.innerHTML=`<p class="season">O verão é caracterizada pelo aumento das temperaturas e dos índices pluviométricos. Normalmente, nessa estação, os dias são mais longos que as noites em virtude da maior incidência solar em um dos hemisférios. ... Durante o verão, é comum a ocorrência de chuvas de curta duração e de forte intensidade.</p>
    <img src="https://www.prosaude.org.br/wp-content/uploads/2021/07/Verao.jpg" alt="imagem ilustrando o verão">`
}

function autumnContent(){
    content.innerHTML=`<p class="season">O outono é a estação do ano que começa após o verão e que antecede o inverno. ... Algumas das principais características dessa estação são a redução gradual das temperaturas, bem como a diminuição do tempo de luz diária. O outono é conhecido também como a estação das frutas.</p>
    <img src="https://s3.static.brasilescola.uol.com.br/be/2021/03/outono.jpg" alt="imagem ilustrando o outono">`
}

function winterContent(){
    content.innerHTML=`<p class="season">O inverno é uma das quatros estações do ano e representa o período em que as temperaturas caem e ocorre noites mais longas e dias mais curtos. ... Com início no fim do outono, o tempo frio traz baixas temperatura, chuvas e, em alguns lugares do mundo, nevadas.</p>
    <img src="https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2020/04/inverno-datas-e-caracteristicas-1024x576.jpg" alt="imagem ilustrando o inverno">`
}

function springContent(){
    content.innerHTML=`<p class="season">A Primavera é o começo de um novo ciclo, que representa o “nascimento”. É o período de regar nossos jardins e plantar sementes para o nosso processo de renascimento.</p>
    <img src="https://s2.static.brasilescola.uol.com.br/img/2019/09/primavera.jpg" alt="imagem ilustrando a primavera">`
}
console.log("verão " + checkSummer())
console.log("outono " + checkAutumn())
console.log("inverno " + checkWinter())
console.log("primavera " + checkSpring())

