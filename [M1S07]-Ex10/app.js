const btnRdm = document.querySelector('#rdm-btn')


const catAPI = async () =>{
    try{
        const cat = await fetch('https://api.thecatapi.com/v1/images/search')
    const obj = await cat.json()
    console.log(obj[0].url)
    document.querySelector('#result').innerHTML = `
    <img src="${obj[0].url}" alt="gatinhos">
    `
    
    } catch(error){

    }
}

btnRdm.addEventListener('click', catAPI)
window.onload = () => {
    catAPI()
}