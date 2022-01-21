import { Client } from "./Client.js";

class Conta extends Client{
    constructor(client,
                accNumber, 
                balance){
        super(client)
        this.accNumber = accNumber
        this.balance = balance
    }
}

export { Conta }