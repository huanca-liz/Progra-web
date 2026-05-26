function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero === 2) return true;

    // Evita divisiones innecesarias
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function verificarPrimo() {
    let input = document.getElementById("numero");
    let resultado = document.getElementById("resultado");

    let numero = parseInt(input.value);

    // Verificación
    if (esPrimo(numero)) {
        resultado.innerText = `✅ ${numero} es un número primo`;
        resultado.style.color = "green";
    } else {
        resultado.innerText = `❌ ${numero} no es un número primo`;
        resultado.style.color = "red";
    }
}