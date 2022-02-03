import { Account } from "./Account.js";

export class WageAccount extends Account {
    constructor(customer) {
        super(0, customer, 100)
    }

    withdraw (value) {
        const rate = 1.01;
        return this._withdraw(value, rate)
    }
}