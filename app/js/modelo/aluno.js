class Aluno {
    matricula;
    nome;
    _idade;
    constructor(matricula, nome, _idade) {
        this.matricula = matricula;
        this.nome = nome;
        this._idade = _idade;
    }
    incrementarIdade() {
        this.idade++;
    }
    get idade() {
        return this._idade;
    }
    set idade(novaIdade) {
        this._idade = novaIdade;
    }
}
