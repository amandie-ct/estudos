export class Cliente{
    // atributos:
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }
    // assim o cpf só pode ser criado dentro do construtor e depois não pode ser alterado
    // (somente leitura)
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}