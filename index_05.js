/*     Objetos dentro de objetos
    ● Como o objeto é também um tipo de dado, podemos ter objetos com 
    objetos dentro;
    ● Utilizando como um array associativo, por exemplo */
let pessoa = {
    nome: 'Matheus',
    caracteristicas: {
        olhos: 'verdes',
        cabelos: 'castanho',
        brincos: false,
        oculos: false

    }
}
console.log(pessoa.caracteristicas.cabelos);