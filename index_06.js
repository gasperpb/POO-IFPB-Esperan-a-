/*     Criando props e métodos em objs existentes
    ● O objeto não é imutável, ele pode ganhar propriedades e métodos ao longo 
    do código;
 */
let pessoa = {
    nome: 'Matheus',
}

pessoa.idade = 29;

pessoa.falar = function () {
    console.log('olá');
}

console.log(pessoa);