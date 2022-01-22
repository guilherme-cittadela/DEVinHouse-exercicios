import Person from "./Person.js";

export default class Employees extends Person{
    constructor(person, job, salary){
        super(person)
        this.job = job
        this.salary = salary
    }
}


