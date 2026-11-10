let turmas = [];
let turmaAtual = null;

// Atualiza o campo de seleção das turmas
function atualizarTurmas() {
    const select = document.getElementById('turma-selecionada');

    select.innerHTML = '<option value="">Selecione uma turma</option>';

    turmas.forEach((turma, indice) => {
        const opcao = document.createElement('option');

        opcao.value = indice;
        opcao.textContent = turma.curso + ' - ' + turma.professor;

        select.appendChild(opcao);
    });
}

// Salvar turma
function btnSalvarTurma() {
    const t = Interface.salvarTurma();

    if (t === null) {
        return;
    }

    turmas.push(t);

    atualizarTurmas();

    const select = document.getElementById('turma-selecionada');

    select.value = turmas.length - 1;

    selecionarTurma();
}

// Selecionar turma
function selecionarTurma() {
    const select = document.getElementById('turma-selecionada');

    if (select.value === '') {
        turmaAtual = null;
        return;
    }

    turmaAtual = turmas[Number(select.value)];
}

// Salvar aluno
function btnSalvarAluno() {
    if (turmaAtual === null) {
        alert('Cadastre e selecione uma turma antes de cadastrar um aluno!');
        return;
    }

    const aluno = Interface.salvarAluno();

    if (aluno === null) {
        return;
    }

    turmaAtual.matricular(aluno);
}

// Listar alunos da turma selecionada
function listarAluno() {
    if (turmaAtual === null) {
        alert('Selecione uma turma primeiro!');
        return;
    }

    Interface.listar(turmaAtual.alunos);
}

// Editar notas
function editarNotas(indice) {
    if (turmaAtual === null) {
        alert('Selecione uma turma primeiro!');
        return;
    }

    const aluno = turmaAtual.alunos[indice];

    const n1 = prompt('Digite a primeira nota:', aluno.getNota1());
    if (n1 === null) return;

    const n2 = prompt('Digite a segunda nota:', aluno.getNota2());
    if (n2 === null) return;

    const n3 = prompt('Digite a terceira nota:', aluno.getNota3());
    if (n3 === null) return;

    if (n1.trim() === '' || n2.trim() === '' || n3.trim() === '') {
        alert('Preencha todas as notas!');
        return;
    }

    const nota1 = Number(n1);
    const nota2 = Number(n2);
    const nota3 = Number(n3);

    if (
        !Number.isFinite(nota1) || !Number.isFinite(nota2) ||
        !Number.isFinite(nota3) ||
        nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10
    ) {
        alert('Digite notas válidas entre 0 e 10.');
        return;
    }

    aluno.setNota1(nota1);
    aluno.setNota2(nota2);
    aluno.setNota3(nota3);

    const media = aluno.gerarMedia(nota1, nota2, nota3);

    aluno.gerarEstado(media);

    alert('Notas atualizadas com sucesso!');

    Interface.listar(turmaAtual.alunos);
}

// Disponibiliza as funções para os botões do HTML
window.btnSalvarTurma = btnSalvarTurma;
window.atualizarTurmas = atualizarTurmas;
window.selecionarTurma = selecionarTurma;
window.btnSalvarAluno = btnSalvarAluno;
window.listarAluno = listarAluno;
window.editarNotas = editarNotas;
