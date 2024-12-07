// Función para calcular el factorial de un número
function calcularFactorial(numero) {
    // Manejar números negativos devolviendo un mensaje de error
    if (numero < 0) return "Error: El número debe ser un entero no negativo.";
    
    // Inicializar el factorial en 1
    let factorial = 1;

    // Usar un bucle for para calcular el factorial
    for (let i = 1; i <= numero; i++) {
        factorial *= i; // Multiplicar factorial por i
    }

    // Devolver el resultado
    return factorial;
}

// Manejo del evento de envío del formulario
document.getElementById('factorialForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const numero = parseInt(document.getElementById('numberInput').value); // Obtener el número ingresado
    const resultado = calcularFactorial(numero); // Calcular el factorial

    // Mostrar el resultado en el div con id "result"
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `El factorial de ${numero} es: ${resultado}`;
});
