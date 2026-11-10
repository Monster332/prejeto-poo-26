class Aluno {
    #nome;
    #nota1;
    #nota2;
    #nota3;

    estado;
    media;

    constructor(nome, nota1, nota2, nota3) {
        this.#nome = nome;
        this.#nota1 = nota1;
        this.#nota2 = nota2;
        this.#nota3 = nota3;
    }

    gerarMedia(nota1, nota2, nota3) {
        let m = (nota1 + nota2 + nota3) / 3;
        this.media = m;
        return m;
    }

    gerarEstado(media) {
        let est;

        if (media >= 6) {
            est = 'Aprovado';
        } else if (media >= 3) {
            est = 'Recuperação';
        } else {
            est = 'Reprovado';
        }

        this.estado = est;
        return est;
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getNota1() {
        return this.#nota1;
    }

    setNota1(nota) {
        this.#nota1 = nota;
    }

    getNota2() {
        return this.#nota2;
    }

    setNota2(nota) {
        this.#nota2 = nota;
    }

    getNota3() {
        return this.#nota3;
    }

    setNota3(nota) {
        this.#nota3 = nota;
    }
}

window.Aluno = Aluno;
