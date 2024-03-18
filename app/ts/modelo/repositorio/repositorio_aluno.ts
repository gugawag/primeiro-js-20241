class RepositorioAluno {

    private alunos: Aluno[];
    constructor() {
        this.alunos = [];
    }

    inserir(aluno: Aluno) {
        this.alunos.push(aluno);
        return aluno;
    }

    listar(): Aluno[] {
        return this.alunos;
    }

    remover(matricula: string) {
        const indx =
            this.alunos.findIndex(aluno => aluno.matricula === matricula);

        if (indx >= 0) {
            const alunoARemover = this.alunos[indx];
            this.alunos.splice(indx, 1);
            return alunoARemover;
        }

        return undefined;
    }

    buscarPorNome(nome: string): Aluno[] {
        return this.alunos.filter(aluno => aluno.nome === nome);
    }

    buscarPorMatricula(matricula: string): Aluno[] {
        return this.alunos.filter(aluno => aluno.matricula === matricula);
    }

}
