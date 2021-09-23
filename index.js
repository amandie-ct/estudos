// treinando classes com JavaScript
import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Angelina";
cliente1.cpf = 11122232109;

const cliente2 = new Cliente();
cliente2.nome = "Logan";
cliente2.cpf = 44455565709;

console.log(cliente1, cliente2)

const contacorrente2 = new ContaCorrente();
contacorrente2.depositar(500);
contacorrente2.sacar(100);

const contacorrenteAngelina = new ContaCorrente();
contacorrenteAngelina.agencia = 16653
contacorrenteAngelina.cliente = cliente1;
contacorrenteAngelina.depositar(100);

const contaLogan = new ContaCorrente();
contaLogan.agencia = 16683;
contaLogan.cliente = cliente2;
contaLogan.depositar(400);
contaLogan.transferir(20, contacorrenteAngelina)

console.log(`Valor na conta de Logan ${contaLogan._saldo} e na de Angelina ${contacorrenteAngelina._saldo}`);

const contaAmanda = new ContaCorrente;
contaAmanda.cliente = new Cliente;
contaAmanda.cliente.nome = "Amanda";
contaAmanda.agencia = 16683;
contaAmanda.cliente.cpf = 10524543309;
console.log(contaAmanda)