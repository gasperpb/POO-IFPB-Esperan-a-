/* Acessando a propriedade por variável
● Podemos acessar uma propriedade por meio de uma variável;
● É importante que a variável contenha o texto da propriedade, veja: */


const robo = {
    bracos: 4,
    pernas: 2,
    arma: 'metralhadora',
    armaEspecial: 'foguete'
}
let a = 'arma';
console.log(robo[a]);