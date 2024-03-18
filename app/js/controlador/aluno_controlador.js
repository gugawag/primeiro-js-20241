class AlunoControlador {
    servico;
    constructor() {
        this.servico = new AlunoServico();
    }
    inserir() {
        const matriculaInputElement = document.querySelector("#matricula");
        const nomeInputElement = document.querySelector("#nome");
        const idadeInputElement = document.querySelector("#idade");
        const nome = nomeInputElement.value;
        const matricula = matriculaInputElement.value;
        const idade = idadeInputElement.value;
        let alunoInserido = undefined;
        try {
            alunoInserido = this.servico.inserir(matricula, nome, Number(idade));
        }
        catch (e) {
            alert(e.message);
        }
        if (alunoInserido) {
            this.mostrarAlunoNaTela(alunoInserido);
        }
    }
    mostrarAlunoNaTela(aluno) {
        const listaNomesElement = document.querySelector("#listaNomes");
        const liElement = document.createElement('li');
        liElement.innerText = aluno.nome;
        const botaoRemoverAluno = document.createElement('button');
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
