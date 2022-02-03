import { Employee } from "./Employee.js";

export class Manager extends Employee {
    constructor(name, wage, cpf, rg) {
        super(name, wage, cpf, rg)
        this._bonus = 1.1;
    }
}