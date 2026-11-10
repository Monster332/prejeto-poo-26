class Interface {
    btnCadastrar;
    tabCadastrar;
    btnListar;
    tabListar;
    btnCadastrarTurma;
    tabCadastrarTurma;

    constructor() {

    }

    static salvarAluno() {
        let nome = document.getElementById('nome').value.trim();

        let valor1 = document.getElementById('n1').value;
        let valor2 = document.getElementById('n2').value;
        let valor3 = document.getElementById('n3').value;

        if (nome === '' || valor1 === '' || valor2 === '' || valor3 === '') {
            alert('Preencha todos os campos!');
            return null;
        }

        let n1 = Number(valor1);
        let n2 = Number(valor2);
        let n3 = Number(valor3);

        if (
            !Number.isFinite(n1) || !Number.isFinite(n2) ||
            !Number.isFinite(n3) ||
            n1 < 0 || n1 > 10 ||
            n2 < 0 || n2 > 10 ||
            n3 < 0 || n3 > 10
        ) {
            alert('Digite notas válidas entre 0 e 10!');
            return null;
        }

        let a1 = new Aluno(nome, n1, n2, n3);
        let m = a1.gerarMedia(n1, n2, n3);

        a1.gerarEstado(m);

        alert('Aluno cadastrado!');
        return a1;
    }

    static listar(alunos) {
        Interface.pegarElementos();

        this.btnListar.classList.add('active');
        this.btnCadastrar.classList.remove('active');
        this.btnCadastrarTurma.classList.remove('active');

        this.tabListar.classList.add('active');
        this.tabCadastrar.classList.remove('active');
        this.tabCadastrarTurma.classList.remove('active');

        let lista = `
            <table>
                <tr>
                    <th>Nome</th>
                    <th>N1</th>
                    <th>N2</th>
                    <th>N3</th>
                    <th>Média</th>
                    <th>Situação</th>
                    <th>Editar</th>
                </tr>
        `;

        for (let i = 0; i < alunos.length; i++) {
            lista += `
                <tr>
                    <td>${alunos[i].getNome()}</td>
                    <td>${alunos[i].getNota1()}</td>
                    <td>${alunos[i].getNota2()}</td>
                    <td>${alunos[i].getNota3()}</td>
                    <td>${alunos[i].media.toFixed(2)}</td>
                    <td>${alunos[i].estado}</td>
                    <td>
                        <button onclick="editarNotas(${i})">Editar</button>
                    </td>
                </tr>
            `;
        }

        lista += '</table>';

        document.getElementById('alunos').innerHTML = lista;
    }

    static cadastrar() {
        Interface.pegarElementos();

        this.btnCadastrar.classList.add('active');
        this.btnListar.classList.remove('active');
        this.btnCadastrarTurma.classList.remove('active');

        this.tabCadastrar.classList.add('active');
        this.tabListar.classList.remove('active');
        this.tabCadastrarTurma.classList.remove('active');
    }

    static cadastrarTurma() {
        Interface.pegarElementos();

        this.btnCadastrarTurma.classList.add('active');
        this.btnCadastrar.classList.remove('active');
        this.btnListar.classList.remove('active');

        this.tabCadastrarTurma.classList.add('active');
        this.tabCadastrar.classList.remove('active');
        this.tabListar.classList.remove('active');
    }

    static salvarTurma() {
        const curso = document.getElementById('curso').value.trim();
        const prof = document.getElementById('prof').value.trim();

        if (curso === '' || prof === '') {
            alert('Preencha o nome do curso e do professor!');
            return null;
        }

        const t1 = new Turma(curso, prof);

        alert('Turma cadastrada!');
        return t1;
    }

    static pegarElementos() {
        this.btnCadastrar = document.getElementById('btn-cadastrar');
        this.tabCadastrar = document.getElementById('tab-cadastrar');

        this.btnListar = document.getElementById('btn-listar');
        this.tabListar = document.getElementById('tab-listar');

        this.btnCadastrarTurma = document.getElementById('btn-cadastrar-turma');
        this.tabCadastrarTurma = document.getElementById('tab-cadastrar-turma');
    }
}

window.Interface = Interface;
