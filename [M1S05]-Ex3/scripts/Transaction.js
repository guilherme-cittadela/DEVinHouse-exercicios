import { Conta } from "./Conta.js";

class Transaction extends Conta{
    constructor(count, transValue){
        super(count)
        this.transValue = transValue
    }

    deposit(balance, transValue){
        balance += transValue

    }

    transfer(balance, transValue){
        balance -= transValue
    }
}

export { Transaction }