
class Address{
    constructor(logradouro, num, city, state, country, cep){
        // this.checkInput(logradouro)
        // this.checkInput(num)
        // this.checkInput(city)
        // this.checkInput(state)
        // this.checkInput(country)
        // this.checkInput(cep)
        this.logradouro = logradouro
        this.num = num
        this.city = city
        this.state = state
        this.country = country
        this.cep = cep

    }
    // checkInput(value){
    //     if(typeof value !=='string'){
    //         throw new Error(`Dados inválidos`)
    //     }
    // }
}


export { Address }