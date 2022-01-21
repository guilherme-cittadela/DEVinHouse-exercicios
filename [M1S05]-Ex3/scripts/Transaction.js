import { Conta } from "./Conta.js";

class Transaction extends Conta{
    constructor(count, transValue){
        super(count)
        this.transValue = transValue
        console.log(count)
    }

    deposit(count, transValue){
        count += transValue
        console.log("oi",count)

    }

    transfer(balance, transValue){
        balance -= transValue
    }

    
}

export { Transaction }