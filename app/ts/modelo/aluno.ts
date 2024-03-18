class Aluno {

    constructor(public matricula: string,
                public nome: string, private _idade: number) {
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
