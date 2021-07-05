/*         Crie um Objeto "Animal", com as propriedades: Tamanho,
    Peso e Idade e os Métodos FazerBarulho(), Comer(Comida) e Dormir().
    A saida do método FazerBalhulho é "Buuuuuuu!!!", do método 
    comer é "Alimentado com " comida e do Dormir é "ZZZZzzzzz" */

let animal = {
    tamanho: 1,
    peso: 5,
    idade: 3,
    fazerBarulho: function () {
        console.log("Buuuuuuu");

    },

    comer: function () {
        console.log("Alimentado com comida");


    },
    dormi: function () {
        console.log("ZZZZZzzzzzzzzz");
    }


}

console.log("Tamanho =  " + animal.tamanho);
console.log("Peso  =  " + animal.peso);
console.log("idade =  " + animal.idade);
animal.fazerBarulho();
animal.dormi();
animal.comer();