/* Como criar métodos
● Os métodos são as ações dos objetos;
● Podemos ter métodos de resgatar propriedades do objeto ou modificar o 
valor delas, por exemplo;
 */


const robo = {
    bracos: 4,
    pernas: 2,
    arma: 'metralhadora',
    armaEspecial: 'foguete',
    atirar: function () {
        console.log("pew pew pew");
    }
}
robo.atirar();