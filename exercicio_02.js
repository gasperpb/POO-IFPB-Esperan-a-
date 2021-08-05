

let pessoa = {
    nome: 'Matheus',
    getNome: function () {
        console.log("O nome é " + this.nome);

    },
    setNome: function (novoNome) {
        this.nome = novoNome;
    }
}
pessoa.getNome();
pessoa.getNome('Teste');
pessoa.getNome();