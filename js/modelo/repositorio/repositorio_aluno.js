class RepositorioAluno {

    constructor() {
        this.alunos = [];
    }

    inserir(aluno) {
        this.alunos.push(aluno);
        return aluno;
    }

    listar() {
        return this.alunos;
    }

    remover(matricula) {
        const indx =
            this.alunos.findIndex(aluno => aluno.matricula === matricula);

        if (indx >= 0) {
            const alunoARemover = this.alunos[indx];
            this.alunos.splice(indx, 1);
            return alunoARemover;
        }

        return undefined;
    }

    buscarPorNome(nome) {
        return this.alunos.filter(aluno => aluno.nome === nome);
    }

    buscarPorMatricula(matricula) {
        return this.alunos.filter(aluno => aluno.matricula === matricula);
    }

}
