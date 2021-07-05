/*      Descreva Os objetos Built-in de JavaScript:
    Number
    Boolean
    Array
    Apresente um exemplo de funcionalidade simples da cada um dos mesmo
    utilizando um método de cada classe. O exercício pode ser realizado
    pelos 3 alunos participantes da disciplina juntos. */



/*     Number = O objeto JavaScript Number é um objeto encapsulado que
permite você trabalhar com valores numéricos. Um objeto 
Number é criado utilizando o construtor Number(). */

function multiply(x, y) {
    if (x * y > Number.MAX_VALUE) {
        return ('Process as Infinity');
    }
    return (x * y);
}

console.log(multiply(1.7976931348623157e+308, 1));
//  output: 1.7976931348623157e+308

console.log(multiply(1.7976931348623157e+308, 2));
// output: "Process as Infinity"




/* Boolean = O objeto Boolean é um objeto wrapper para um valor booleano.
    O valor passado como primeiro parâmetro é convertido para um valor boleano, se necessário.
    Se o valor é omitido ou é 0, -0, null, false, NaN, undefined ou é uma string vazia(""),
    o objeto terá um valor inicial de false.Todos outros valores, incluindo qualquer objeto ou string "false",
    criam um objeto com valor inicial  true.
    Não confunda os valores primitivos Boolean true e false com os valores true and false do objeto Boolean.
        Qualquer objeto cujo o valor não é undefined ou null, incluindo um objeto Boolean que o valor seja false,
    é avaliado para true quando passa por uma declaração condicional.
    Por exemplo, a condição a seguir if a declaração é avaliada como true:
 */
var x = new Boolean(false);
if (x) {
    // esse código é executado
    console.log("O esse código é executado");
}

//Esse comportamento não se aplica aos primitivos Boolean. Por exemplo, a condição a seguir if a declaração é avaliada como false:

var x = false;
if (x) {
    // esse código não é executado
    console.log("O esse código é executado");
}





/* Array = O objeto Array do JavaScript é um objeto global usado na construção 
de 'arrays': objetos de alto nível semelhantes a listas. */

var frutas = ['Maçã', 'Banana'];

console.log(frutas.length);
// 2
//Acessar um item (index) do Array

var primeiro = frutas[0];
console.log(primeiro);
// Maçã

var ultimo = frutas[frutas.length - 1];
console.log(ultimo);
// Banana