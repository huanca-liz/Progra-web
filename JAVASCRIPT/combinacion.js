function esPrimo(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function generarFibonacci(cantidad) {
    let fib = [0, 1];

    for (let i = 2; i < cantidad; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }

    return fib;
}

function generar() {
    let cantidad = parseInt(prompt("Ingresa cuántos números de Fibonacci quieres generar:"));
    let inicio = parseInt(prompt("Desde qué posición quieres empezar? (0 recomendado):"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Ingresa un número válido");
        return;
    }

    if (isNaN(inicio) || inicio < 0) {
        inicio = 0;
    }

    let fib = generarFibonacci(cantidad);
    let seleccion = fib.slice(inicio);

    let texto = `<b>📊 Análisis de Estantes (Fibonacci + Primos)</b><br><br>`;

    seleccion.forEach((num, index) => {
        let estante = index + inicio + 1;

        if (esPrimo(num)) {
            texto += `Estante ${estante}: ⭐ ${num} (PRIMO - producto especial)<br>`;
        } else {
            texto += `Estante ${estante}: ${num}<br>`;
        }
    });

    document.getElementById("resultado").innerHTML = texto;
}