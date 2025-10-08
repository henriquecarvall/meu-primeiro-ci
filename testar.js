const { somar, multiplicar } = require('./calculadora.js');

console.log('🔬 Iniciando testes...');

const resultadoSoma = somar(2, 3);
if (resultadoSoma === 5) {
    console.log('✅ Soma: 2 + 3 = 5 → CORRETO!');
} else {
    console.log(`❌ Soma deu ${resultadoSoma}, mas deveria ser 5`);
    process.exit(1); 
}

const resultadoMult = multiplicar(4, 5);
if (resultadoMult === 20) {
    console.log('✅ Multiplicação: 4 × 5 = 20 → CORRETO!');
} else {
    console.log(`❌ Multiplicação deu ${resultadoMult}, mas deveria ser 20`);
    process.exit(1);
}

console.log('🎉 TODOS OS TESTES PASSARAM!');
