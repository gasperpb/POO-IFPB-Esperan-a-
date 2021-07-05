
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