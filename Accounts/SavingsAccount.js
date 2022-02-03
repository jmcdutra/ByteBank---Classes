import { Account } from "./Account.js";

export class SavingsAccount extends Account {
    constructor(firstBalance, customer, agency) {
        super(firstBalance, customer, agency);
    }

    withdraw(value){
        const rate = 1.02;
        return this._withdraw(value, rate);
    }
}