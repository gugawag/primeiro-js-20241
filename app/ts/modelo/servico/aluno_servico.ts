class AlunoServico {

    private repositorio: RepositorioAluno;
    constructor() {
        this.repositorio = new RepositorioAluno();
    }

    inserir(matricula: string, nome: string, idade: number) {
       this.validarMatriculaUnica(matricula);
       this.validarMaiorIdade(idade);

        const aluno = new Aluno(matricula, nome, idade);

        this.repositorio.inserir(aluno);
        return aluno;
    }

    listar(): Aluno[] {
        return this.repositorio.listar();
    }

    remover(matricula: string) {
        return this.repositorio.remover(matricula);
    }

    buscar(matricula: string): Aluno[] {
        return this.repositorio.buscarPorMatricula(matricula);
    }

    validarMaiorIdade(idade: number) {
        if (idade < 18) {
            throw new Error('menor de idade não permitido!');
        }
    }

    validarMatriculaUnica(matricula: string) {
        // matricula nao duplicada
        const alunoProcurado = this.repositorio.buscarPorMatricula(matricula);

        if (alunoProcurado && alunoProcurado.length > 0) {
            throw new Error('Matrícula já cadastrada!');
        }
    }
}
