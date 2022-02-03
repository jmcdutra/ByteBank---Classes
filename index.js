// Área de testes

import { Customer } from "./Customers/Customer.js"
import { SavingsAccount } from "./Accounts/SavingsAccount.js";
import { TransactionAccount } from "./Accounts/TransactionAccount.js"
import { WageAccount } from "./Accounts/WageAccount.js";

let customers = {};

customers["Ricardo"] = new Customer("Ricardo", '65812348325', '3100200', "123456");
customers["Alice"] = new Customer("Alice", '23345532300', '3155200', "1234");

let c = {}; // Conta corrente
let p = {}; // Conta poupança
let s = {}; // Conta salário

c["Ricardo"] = new TransactionAccount(customers["Ricardo"], "1001")
c["Ricardo"].deposit(500)
c["Ricardo"].withdraw(100)
// c["Ricardo"].logdata('Conta corrente')

p["Ricardo"] = new SavingsAccount(50, customers["Ricardo"], "1001")
p["Ricardo"].withdraw(12)
// p["Ricardo"].logdata('Conta poupança')

s["Ricardo"] = new WageAccount(customers["Ricardo"]);
s["Ricardo"].deposit(5000)
s["Ricardo"].withdraw(750)
// s["Ricardo"].logdata("Conta salário")

import { Manager } from "./Employees/Manager.js";
import { CEO } from "./Employees/CEO.js";
import { Auth } from "./Auth/System.js"

const CompanyCEO = new CEO("Rodrigo", 15000, '65812348325', '3100200')
const CompanyManager = new Manager("Alice", 7500, '23345532300', '3155200')

CompanyCEO.registerPassword("0000")
CompanyManager.registerPassword("25660")

const isCEOLogged = Auth.login(CompanyCEO, "0000")
const isManagerLogged = Auth.login(CompanyManager, "25660")

const isCustomerLogged = Auth.login(customers["Ricardo"], "123456")

if (isCustomerLogged && isManagerLogged) {
    s["Ricardo"].deposit(1200);
}

s["Ricardo"].logdata("Conta salário")

console.log('O CEO Da empresa está logado?', (isCEOLogged ? "sim" : "nao" ) + ", Dados:", CompanyCEO)