function generarFibonacci() {
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let resultado = document.getElementById("resultado");

    // Validación
    if (isNaN(cantidad) || cantidad <= 0) {
        resultado.innerText = "⚠️ Ingresa un número válido mayor a 0";
        resultado.style.color = "orange";
        return;
    }

    let a = 0,
        b = 1;
    let secuencia = [];

    for (let i = 0; i < cantidad; i++) {
        secuencia.push(a);
        let temp = a + b;
        a = b;
        b = temp;
    }

    resultado.innerText = "Resultado: " + secuencia.join(", ");
    resultado.style.color = "purple";
}