import { Account } from "./Account.js";

export class TransactionAccount extends Account {
    static StoredAccounts = 0;
    constructor(customer, agency) {
        super(0, customer, agency);
        TransactionAccount.StoredAccounts += 1;
    }

    // Sobrescrevendo o comportamente de sacar, vindo de Account
    withdraw(value){
        const rate = 1.05;
        return this._withdraw(value, rate);
    }
}