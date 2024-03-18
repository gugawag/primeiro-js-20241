class AlunoControlador {

    private servico: AlunoServico;
    constructor() {
        this.servico = new AlunoServico();
    }

    inserir() {
        const matriculaInputElement: HTMLInputElement  =
            document.querySelector("#matricula");

        const nomeInputElement: HTMLInputElement =
            document.querySelector("#nome");

        const idadeInputElement: HTMLInputElement  =
            document.querySelector("#idade");

        const nome = nomeInputElement.value;
        const matricula = matriculaInputElement.value;
        const idade = idadeInputElement.value;

        let alunoInserido = undefined;
        try {
            alunoInserido = this.servico.inserir(matricula, nome, Number(idade));
        } catch (e) {
           alert(e.message);
        }

        if (alunoInserido) {
            this.mostrarAlunoNaTela(alunoInserido);
        }
    }

    mostrarAlunoNaTela(aluno: Aluno) {
        const listaNomesElement =
            document.querySelector("#listaNomes")

        const liElement = document.createElement('li');
        liElement.innerText = aluno.nome;

        const botaoRemoverAluno
            = document.createElement('button');
        botaoRemoverAluno.textContent = 'X';
        botaoRemoverAluno.addEventListener('click', () => {
            const alunoRemovido = this.servico.remover(aluno.matricula);
            if (alunoRemovido) {
                liElement.remove();
            }

        });

        liElement.appendChild(botaoRemoverAluno);

        listaNomesElement.appendChild(liElement);

    }
}
