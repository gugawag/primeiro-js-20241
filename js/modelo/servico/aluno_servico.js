class AlunoServico {

    constructor() {
        this.repositorio = new RepositorioAluno();
    }

    inserir(matricula, nome, idade) {
       this.validarMatriculaUnica(matricula);
       this.validarMaiorIdade(idade);

        const aluno = new Aluno(matricula, nome, idade);

        this.repositorio.inserir(aluno);
        return aluno;
    }

    listar() {
        return this.repositorio.listar();
    }

    remover(matricula) {
        return this.repositorio.remover(matricula);
    }

    buscar(matricula) {
        return this.repositorio.buscarPorMatricula(matricula);
    }

    validarMaiorIdade(idade) {
        if (idade < 18) {
            throw new Error('menor de idade não permitido!');
        }
    }

    validarMatriculaUnica(matricula) {
        // matricula nao duplicada
        const alunoProcurado = this.repositorio.buscarPorMatricula(matricula);

        if (alunoProcurado && alunoProcurado.length > 0) {
            throw new Error('Matrícula já cadastrada!');
        }
    }
}
