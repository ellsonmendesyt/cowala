import fibonacci from "./algoritmos/fibonacci.js";
import classificar from "./algoritmos/classificador.js";
import faxina from './algoritmos/faxina.js';
import expirou from './algoritmos/validade.js';
import criarFrame from './algoritmos/moldura.js';











console.log(`
/==============================
            FIBONACCI
===============================/`
);


// experado: fibonacci(6)  deve retornar: [0, 1, 1, 2, 3, 5].
console.log(fibonacci(3))





console.log(`
/==============================
            CLASSIFICADOR
===============================/`
);

const pessoas =[
    {nome:"Maria",souEu:false,responsavel:true},
    {nome:"Raimundo", souEu:false,responsavel:false},
    {nome:"Joaquim",souEu:false,responsavel:false},
    {nome:"Sebastiao",souEu:false,responsavel:true},
    {nome:"Miguel",souEu:false,responsavel:false},
    {nome:"Antonio",souEu:false,responsavel:false},
    {nome:"Elson",souEu:true,responsavel:false},
    {nome:"Michael",souEu:false,responsavel:true},
];


console.log(classificar(pessoas))




console.log(`
/==============================
            FAXINA
===============================/`
);

let obj2 = {"fizz": "buzz", "foo": null, "bar": 42};

console.log(`Antes: {"fizz": "buzz", "foo": null, "bar": 42}`)
console.log("Depois: ",faxina(obj2))






console.log(`
/==============================
            VALIDADE
===============================/`
);


console.log(`expirou("2021-11-17T20:40:09.503Z", "10d");`)
console.log(`expirou("2021-12-10T00:00:00.000Z", "180d");`)

console.log(expirou("2021-11-17T20:40:09.503Z", "10d"))
console.log(expirou("2021-12-10T00:00:00.000Z", "180d"))




console.log(`
/==============================
            MOLDURA
===============================/`
);


console.log("\n(9,6)\n\n")
criarFrame(9,6);

console.log("\n(1,3)\n\n")
criarFrame(1,3);