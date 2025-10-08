function somar(a, b) {
    return a + b;
}

function multiplicar(a, b) {
    return a + b; // ❌ ERRADO! Deveria ser a * b
}

module.exports = { somar, multiplicar };
