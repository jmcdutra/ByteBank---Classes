export class Customer {

    constructor(nome, cpf, rg, password) {
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;

        this._password = password;
    }


    auth (password) {
        return password == this._password;
    }

}