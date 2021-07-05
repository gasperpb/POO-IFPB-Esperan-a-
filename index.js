/* ● No JavaScript podemos criar um objeto abrindo e fechando chaves;
● O objeto parece com um array de chave e valor;
● Podemos atribuir o objeto a uma variável; */

let carro = {
    /*     ● As propriedades são as características dos objetos;
    ● Por ex: cor, portas, nome, marca e etc;
    ● Podemos iniciar um objeto com várias propriedades;
    ● E acessá-las para resgatar os seus valores; */
    portas: 4,
    cor: 'verde',
    opcionais: ["teto solar", "blindagem", 'ar condicionado',],
    revisado: true
}
console.log(carro.portas);
console.log(carro['cor']);
console.log(carro.revisado);
console.log(carro.opcionais);


/* Propriedades com mais de uma palavra
● As propriedades podem ter mais de uma palavra
● Neste caso precisamos colocá-las entre aspas
● Obs: não é muito utilizado, opte por camelCase */
let carro = {
    portas: 4,
    cor: 'verde',
    'tem blindagem': true
}
console.log(carro.portas);
console.log(carro["cor"]);
console.log(carro["tem blindagem"]);