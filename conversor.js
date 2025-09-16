
console.log('Converta quilômetros em metros');
const valor = process.argv[2];
const unidadeOrigem = process.argv[3];
const unidadeFinal = process.argv[4];

const resultado = valor / 1000;
     
console.log(`${valor} ${unidadeOrigem} é igual a ${resultado} ${unidadeFinal}!`);