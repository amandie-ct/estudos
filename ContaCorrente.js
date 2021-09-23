import {Cliente} from "./Cliente.js";

export class ContaCorrente{
    // a palavra reservada static serve pra que ao invés do atributo ser pra cada
    // instancia do objeto apenas, ele ser generalizado pra TODAS as instancias 
    static numeroDeContas = 0;
    agencia;

    _cliente;

    // isso é uma forma de proteger o valor de _cliente, fazendo com que o valor dele só possa
    // ser alterado se primeiro for "setado" new Cliente nessa variável - "acessores"
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    // usando esse get tem como colocar por ex console.log(conta2.cliente) e acessar apenas 
    // o cliente, ao invés do objeto inteiro
    get cliente(){
        return this._cliente;
    }

    // _ antes do nome da variável serve pra indicar que é um atributo privado que não deve
    // ser alterado fora da classe
    _saldo = 0;

    // colocar apenas o getter torna uma propriedade somente leitura
    get saldo(){
        return this._saldo;
    }

    constructor(cliente, agencia){
        // pra contar quantas contas tem no banco => numero de contas
        ContaCorrente.numeroDeContas += 1;
        this.agencia = agencia;
        this.cliente = cliente;
    }
    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor){

        // tecnica de early return:
        if (valor <= 0) return;
        return this._saldo += valor;
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}