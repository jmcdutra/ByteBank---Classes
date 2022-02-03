export class Employee {
    constructor(name, wage, cpf, rg) {
        this._name = name;
        this._wage = wage;
        this._cpf = cpf;
        this._rg = rg;

        this._bonus = 1; 
        this._password;
    }

    auth (password) {
        return password == this._password;
    }
    
    registerPassword(password) {
        this._password = password;
    }
}