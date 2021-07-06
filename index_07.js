/*     Deletando propriedades e métodos
    ● Como é possível adicionar, também podemos deletar propriedades dos 
    objetos;
 */


let pessoa = {
    nome: 'Matheus',
}

pessoa.idade = 29;

pessoa.falar = function () {
    console.log('olá');
}
delete pessoa.idade;
delete pessoa.falar;
console.log(pessoa);
