import { Customer } from "../Customers/Customer.js";
// Classe abstrata
export class Account {

    constructor(firstBalance, customer, agency){
        if (this.constructor == Account) {
            throw new Error("Você não deveria instanciar um objeto do tipo Account diretamente, pois esta é uma classe abstrata.");
        }

        this._balance = firstBalance;
        this._customer = customer;
        this._agency = agency;
    }

    set customer(newValue) {
        if (newValue instanceof Customer) {
            this._customer = newValue
        }
    }

    get customer() {
        return this._customer;
    }

    get balance() {
        return this._balance
    }

    withdraw(value){
        let rate = 1
        return this._withdraw(value, rate);
    }

    _withdraw(value, rate){
        const amount = rate * value;
        if (this._balance >= amount) {
            this._balance -= amount;
            return amount;
        }
        return 0;
    }

    deposit(value) {
        if (value >= 0) {
            this._balance += value;
        }
    }

    transfer(value, account) {
        const amount = this.withdraw(value);
        account.deposit(amount);
    }

    logdata(prefix) {
        console.log('------------------')
        if (prefix) console.log(prefix);
        console.log('Nome:', this._customer.nome)
        console.log('CPF:', this._customer.cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4"))
        console.log('RG:', this._customer.rg.replace(/(\d{1})?(\d{3})?(\d{3})/, "$1.$2.$3"))
        console.log('Agência:', this._agency)
        console.log('Saldo:', this._balance)
        console.log('------------------')
    }

} 